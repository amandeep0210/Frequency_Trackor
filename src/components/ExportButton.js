import React from "react";
import { CSVLink } from "react-csv";

const ExportButton = ({ data }) => {
  const csvData = [["Word", "Frequency"], ...data.map((item) => [item.word, item.frequency])];

  return (
   <CSVLink className="btn" style = {{color : 'white', textDecoration : 'none', maxWidth : '10%'}}data={csvData} filename={"histogram.csv"}>Export
  </CSVLink>
  );
};

export default ExportButton;
