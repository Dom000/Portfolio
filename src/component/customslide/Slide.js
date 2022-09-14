import React, { useEffect, useState } from "react";
import "animate.css";

function Slid({ items }) {
  const newItem = items[0];
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(newItem[count]);
  //   setSli(true);
  // }, [count]);

  setTimeout(() => {
    if (count >= newItem.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, 10000);

  return (
    <div className="flex justify-center items-center">
      <div className="  text-3xl font-bold">{newItem[count]}</div>
    </div>
  );
}

export default Slid;
