import React, { useEffect, useState } from "react";
import "animate.css";

function Slid({ items }) {
  const [count, setCount] = useState(0);
  const [sli, setSli] = useState(false);
  const [display, setDisplay] = useState(items[count]);

  useEffect(() => {
    setSli(true);
  }, [display]);

  setTimeout(() => {
    if (count >= items.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setDisplay(items[count]);
  }, 4000);

 
  return (
    <div className="flex justify-center items-center">
        <div className="  text-3xl font-bold">
          {display}
        </div>
    </div>
  );
}

export default Slid;
