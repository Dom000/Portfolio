import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import style from "../contact.css";
import { BsArrowDown } from "react-icons/bs";
import { IoIosSend, IoMdSend } from "react-icons/io";
import { MdWarningAmber, MdVerified } from "react-icons/md";
// import { useSnackbar } from "notistack";
// import { baseUrl } from "../../APIConst";
import axios from "axios";
import Spiner from "./Spiner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const refLabel = useRef(null);
  const labelRef = useRef(null);
  const comment = useRef(null);

  //   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const child = Array.from(refLabel.current.children);
    const child2 = Array.from(labelRef.current.children);
    const child3 = Array.from(comment.current.children);
    const nodeX = child.concat(child2);
    const node = nodeX.concat(child3);

    node.shift();
    node.splice(1, 1);
    // console.log(node)
    node?.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  //   const sendMsg = (e) => {
  //     e.preventDefault();
  //     if (name === "" || email === "" || msg === "") {
  //       enqueueSnackbar("please all fields are required", { variant: "error" });
  //     } else {
  //       setLoading(true);
  //       const data = {
  //         name: name,
  //         email: email,
  //         comment: msg,
  //       };
  //       axios
  //         .post(`${baseUrl}contact`, data)
  //         .then((res) => {
  //           if (res.data.msg) {
  //             setMsg("");
  //             setEmail("");
  //             setName("");
  //             setLoading(false);
  //             setMessage(res.data.msg);
  //             enqueueSnackbar(res.data.msg, {
  //               variant: "success",
  //             });
  //           } else {
  //             enqueueSnackbar("something went wrong", {
  //               variant: "error",
  //             });
  //             setLoading(false);
  //             setMessage("something went wrong");
  //           }
  //         })
  //         .catch((err) => {
  //           enqueueSnackbar("something went wrong", {
  //             variant: "error",
  //           });
  //           setLoading(false);
  //           setMessage("something went wrong");
  //         });
  //     }
  //   };

  return (
    <div className="bg-prosGray py-8 w-full h-auto">
      <Fade left>
        <h1 className="font-light mb-3 mt-7 text-center text-white text-3xl md:text-5xl">
          <strong>Contact</strong>
        </h1>
      </Fade>
      <Fade right>
        <div className="flex justify-center items-center">
          <div className="border-b-4 place-items-center rounded-xl h-auto w-24 md:w-32 border-white" />
        </div>
      </Fade>

      <p className="my-12 text-center text-sm md:text-xl text-white">
        Do you have a question or you want to work with me ?{" "}
      </p>

      <div className="text-white flex  justify-center items-center overflow-hidden flex-col">
        <div className="containa">
          <form className="   w-[200px] lg:w-full md:w-full ">
            <div className="control" ref={refLabel}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
              <label>Full Name</label>
            </div>
            <div ref={comment} className="control">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
              />
              <label>Email</label>
            </div>

            <div ref={labelRef} className="control">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                type="text"
                required
              />
              <label>Comment</label>
            </div>
            <div className="flex mt-16 mb-7 justify-center items-center">
              <button className="border hover:bg-[peru] hover:border-white border-[peru] rounded-full text-white px-5 py-1 text-center flex justify-center items-center flex-col ">
                <span className="animate-bounce">
                  <BsArrowDown />
                </span>
                Submit
              </button>{" "}
            </div>
          </form>

          {loading && message === "" && (
            <div className="flex justify-center items-center">
              <Spiner />
            </div>
          )}
          {message !== "" && (
            <span
              className={`text-center justify-center items-center flex mt-10 ${
                message === "something went wrong"
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              <p>{message}</p>

              {message === "somthing went wrong" ? (
                <MdWarningAmber className="text-red-600 ml-2 text-xl md:text-2xl" />
              ) : (
                <MdVerified className="text-green-600 ml-2 text-xl md:text-2xl" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;