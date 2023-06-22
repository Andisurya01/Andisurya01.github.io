import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Pages/Home";
import React from "react";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App () {
  return (
    <>
    <BrowserRouter basename="/React".react-router>
     <Home/>
    </BrowserRouter>
    </>
  );
}

export default App;
