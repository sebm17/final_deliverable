import React from "react";
import { B1Card } from "./B1Card";

export const B1List = (props) => {
  const renderB1List = props.b1Files.map((b1File) => {
    return <B1Card key={b1File.id} b1File={b1File} />;
  });

  return (
    <>
      <h1>Previous files</h1>
      <div className="ui celled list inputList">{renderB1List}</div>
    </>
  );
};
