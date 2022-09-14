import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "animate.css";

function NotifyWrapper({ props }) {
  const { message, positions, type, animation } = props;
  const [text, setText] = useState(message);
  const [className, setClassName] = useState(positions);
  const [background, setBackground] = useState(type);
  const [animations, setAnimations] = useState(animation);
  const [trigger, setTrigger] = useState(false);
  const [counts, setCounts] = useState([]);
  console.log(counts);
  useEffect(() => {
    let objecLength = Object.keys(props).length;
    if (objecLength > 0) {
      setCounts(props);
    }

    if (typeof message === "string") {
      setText(message);
      setTrigger(true);
      console.log("trigger", trigger);
      setTimeout(() => {
        setTrigger(false);
      }, 5000);
    } else {
      setTrigger(false);
    }
    console.log(message);
    positions === "top-right"
      ? setClassName("top-0 right-0")
      : positions === "top-left"
      ? setClassName("top-0 left-0")
      : positions === "top-center"
      ? setClassName("top-0 left-1/2")
      : positions === "bottom-right"
      ? setClassName("bottom-0 right-0")
      : positions === "bottom-left"
      ? setClassName("bottom-0 left-0")
      : positions === "bottom-center"
      ? setClassName("bottom-0 left-1/2")
      : setClassName();

    type === "success"
      ? setBackground("bg-green-500")
      : type === "error"
      ? setBackground("bg-red-500")
      : type === "warning"
      ? setBackground("bg-yellow-500")
      : setBackground();

    animation === "slideInRight"
      ? setAnimations("animate__slideInRight")
      : animation === "slideInLeft"
      ? setAnimations("animate__slideInLeft")
      : setAnimations();
  }, [props]);
  //   console.log("trigger", trigger);
  console.log(counts);
  return (
    <>
      {trigger ? (
        <div
          className={`w-[200px] z-50 fixed m-5 animate__slideInDown animate__animated ${animations} ${background}  bg-white rounded-md p-2 ${className}`}
        >
          {text}
        </div>
      ) : null}
    </>
  );
}

export { NotifyWrapper };
