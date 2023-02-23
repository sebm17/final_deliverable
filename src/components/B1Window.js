import React from "react";
import { fetchBSmart, fetchM98 } from "../data";

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

  return (
    <div className="b1Window">
      <h1>Electricity</h1>
      {printInfo(m98Data)}
      <h1>Gas</h1>
      {printInfo(bSmartData)}
    </div>
  );
};
