import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App () {
  return (
    <>
      <BrowserRouter basename="/">
     <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/Contact" element={<Contact></Contact>}/>
        <Route path="/About" element={<About></About>}/>
      </Routes>
    </Router>
    </BrowserRouter>
    </>
  );
}

export default App;
