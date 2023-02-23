import React, { useCallback, useMemo } from "react";
import { useB1FileInput } from "../B1Context";

export const B1Card = ({ b1File: { id, mpan, mprn, jad, jtc } }) => {
  const [{ selectedInputId }, dispatch] = useB1FileInput();

  const onBinClick = useCallback(() => {
    dispatch({ type: "REMOVE_B1_FILE", id });
  }, [dispatch, id]);

  const onCardClick = useCallback(() => {
    dispatch({ type: "SET_CURRENT_B1_FILE", id });
  }, [dispatch, id]);

  const cardStyles = useMemo(() => {
    if (selectedInputId === id) {
      return "item selectedCard";
    }
    return "item b1Card";
  }, [id, selectedInputId]);

  return (
    <div className={cardStyles} onClick={onCardClick}>
      <div className="content">
        <div className="header">{id}</div>
        <>
          <div>
            <b>MPAN</b>: {mpan}
          </div>
          <div>
            <b>MPRN</b>: {mprn}
          </div>
          <div>
            <b>Job Appointment Date</b>: {jad}
          </div>
          <div>
            <b>Job Type Code</b>: {jtc}
          </div>
        </>
      </div>
      <i
        onClick={onBinClick}
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};
