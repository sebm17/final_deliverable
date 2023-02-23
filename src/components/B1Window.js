import React, { useCallback } from "react";
import { fetchBSmart, fetchM98, generateB1File } from "../data";

function printInfo(data) {
  const entries = Object.entries(data).reduce((acc, [title, value]) => {
    if (value) {
      acc.push(
        <div>
          {title}: {value}
        </div>
      );
    }
    return acc;
  }, []);

  if (entries.length === 0) {
    return <div>No data to display</div>;
  }

  return entries;
}

export const B1Window = ({ selectedInput }) => {
  if (!selectedInput) {
    return null;
  }

  const bSmartData = fetchBSmart(selectedInput);
  const m98Data = fetchM98(selectedInput);

  const downloadURL = URL.createObjectURL(
    generateB1File({
      ...selectedInput,
      ...bSmartData,
      ...m98Data,
      elecSerialNumber: bSmartData.serialNumber,
      gasSerialNumber: m98Data.serialNumber
    })
  );

  return (
    <div className="b1Window three column row">
      <div className="column">
        <h1>Electricity</h1>
        {printInfo(m98Data)}
      </div>
      <div className="column">
        <h1>Gas</h1>
        {printInfo(bSmartData)}
      </div>
      <div className="column">
        <a href={downloadURL} download={"B1.csv"}>
          <button className="downloadButton ui button green">Download</button>
        </a>
      </div>
    </div>
  );
};
