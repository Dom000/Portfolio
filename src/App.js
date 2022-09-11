import React, { useEffect } from "react";
import "./index.css";
// import "animate.css";
import Home from "./component/Home";
import Header from "./component/Header";
// import { SnackbarProvider, enqueueSnackbar } from "notistack";

function App() {
  const scrollAction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {/* <SnackbarProvider /> */}

      <Header />
      <Home onClick={scrollAction} />
    </div>
  );
}

export default App;
