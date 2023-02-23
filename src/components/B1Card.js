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
            <b>mprn</b>: {mprn}
          </div>
          <div>
            <b>mpan</b>: {mpan}
          </div>
          <div>
            <b>job appointment date</b>: {jad}
          </div>
          <div>
            <b>job type code</b>: {jtc}
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
