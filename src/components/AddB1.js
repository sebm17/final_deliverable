import React, { useCallback, useState, useMemo } from "react";
import { useB1FileInput } from "../B1Context";

function isInputValid(inputType, inputText) {
  switch (inputType) {
    case "mpan":
        return inputText && inputText.match(/[0-9]{13}/);
    case "mprn":
      return !inputText || inputText && inputText.match(/[0-9]{10}/);
    case "jad":
      // jad is a date field, if the date input is greater than today its valid
      return inputText && true && new Date(inputText).getTime() > Date.now();
    case "jtc":
      // jtc is a CHAR field of a maximum length of 3
      return inputText && inputText.match(/[a-zA-Z]{3}/);
    default:
      return false;
  }
}

export const AddB1 = () => {
  const [_, dispatch] = useB1FileInput();
  const [currentB1Data, setData] = useState({});

  // Add the B1 File to the list
  const onClickProcess = useCallback(() => {
    dispatch({ type: "ADD_B1_FILE", payload: currentB1Data });
  }, [currentB1Data]);

  const onClickReset = useCallback(() => {
    const resetData = Object.keys(currentB1Data).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});

    setData(resetData);
  }, [currentB1Data]);

  // Can't click the button unless you've filled everything
  const canSubmit = useMemo(() => {
    return !["mpan", "mprn", "jad", "jtc"].every((key) =>
      isInputValid(key, currentB1Data[key])
    );
  }, [
    currentB1Data.mpan,
    currentB1Data.mprn,
    currentB1Data.jad,
    currentB1Data.jtc
  ]);

  // Update the data whenever we type something in the boxes
  const onInputChange = useCallback((event) => {
    const value = event.target.value;
    const fieldId = event.target.name;
    setData((currentData) => ({ ...currentData, [fieldId]: value }));
  }, []);

  return (
    <div className="ui main">
      <h1 className="ui header teal">Input B1 data</h1>
      <form className="ui form">
        <div className="field">
          <label>MPAN</label>
          <input
            onChange={onInputChange}
            className={
              currentB1Data.mpan &&
              !isInputValid("mpan", currentB1Data.mpan) &&
              "error"
            }
            type="text"
            name="mpan"
            placeholder="mpan"
            value={currentB1Data.mpan}
          />
        </div>
        <div className="field">
          <label>MPRN</label>
          <input
            onChange={onInputChange}
            className={
              currentB1Data.mprn &&
              !isInputValid("mprn", currentB1Data.mprn) &&
              "error"
            }
            type="text"
            name="mprn"
            placeholder="mprn"
            value={currentB1Data.mprn}
          />
        </div>
        <div className="field">
          <label>Job Appointment Date</label>
          <input
            onChange={onInputChange}
            type="date"
            name="jad"
            placeholder="jad"
            value={currentB1Data.jad}
          />
        </div>
        <div className="field">
          <label>Job Type Code</label>
          <input
            onChange={onInputChange}
            className={
              currentB1Data.jtc &&
              !isInputValid("jtc", currentB1Data.jtc) &&
              "error"
            }
            type="text"
            name="jtc"
            placeholder="jtc"
            value={currentB1Data.jtc}
          />
        </div>
      </form>
      <button
        disabled={canSubmit}
        onClick={onClickProcess}
        className="ui button teal"
      >
        Process B1 file
      </button>
      <button className="ui button red" onClick={onClickReset}>
        Reset
      </button>
    </div>
  );
};
