import React from "react";
import "./index.css";
// import "animate.css";
import Home from "./component/Home";
import Header from "./component/Header";
// import { SnackbarProvider, enqueueSnackbar } from "notistack";

function App() {
  return (
    <div>
      {/* <SnackbarProvider /> */}
      
      <Header />
      <Home />
    </div>
  );
}

export default App;
