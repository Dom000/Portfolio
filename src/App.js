import React, { useEffect, useState } from "react";
import "./index.css";
// import "animate.css";
import Home from "./component/Home";
import Header from "./component/Header";
import axios from "axios";
import BASE_URL from "./api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [totalviews, setTotalviews] = useState(0);
  const [totallikes, setTotallikes] = useState(0);
  const genRanHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  // console.log(randomString(24));
  useEffect(() => {
    const user = genRanHex(24);
    const visito =
      localStorage.getItem("usermy87") === null
        ? localStorage.setItem("usermy87", user)
        : localStorage.getItem("usermy87");

    if (visito === undefined) {
      async function creatVisitor() {
        await axios
          .post(`${BASE_URL}createVisitor`, {
            _id: user,
            viewed: 1,
            likes: 0,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        // ______________________________________________________________
      }
      creatVisitor();
      console.log(user);
    } else {
      console.log(visito + " " + "already exist");
    }

    axios.get(`${BASE_URL}totalView`).then((res) => {
      console.log(res.data?.data);
      setTotalviews(res.data?.data);
    });

    // ______________________________________________________________
    axios.get(`${BASE_URL}totalLikes`).then((res) => {
      console.log(res.data?.data);
      setTotallikes(res.data?.data);
    });
  });

  const scrollAction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <ToastContainer />
      <Header />
      <Home likes={totallikes} views={totalviews} onClick={scrollAction} />
    </div>
  );
}

export default App;
