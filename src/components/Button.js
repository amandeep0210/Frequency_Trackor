import React, { useState } from "react";
import Histogram from "./Histogram";
import './Button.css';


const Button = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.terriblytinytales.com/test.txt"
    );
    const text = await response.text();
    const wordList = text.split(/\s+/);
    const frequencyMap = new Map();
    wordList.forEach((word) => {
      const count = frequencyMap.get(word) || 0;
      frequencyMap.set(word, count + 1);
    });
    const sortedData = Array.from(frequencyMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    const top20Data = sortedData.slice(0, 20).map((item) => ({
      word: item[0],
      frequency: item[1],
    }));
    setData(top20Data);
  };

  return (
    <div>
       {/* <h2 className="header">Click the button to fetch the contents</h2> */}
       <div className="header">Click the button to fetch the contents</div>
      <button className="btn" onClick={fetchData}>Submit</button>
      {data.length > 0 && <Histogram data={data} />}
    </div>
  );
};

export default Button;
