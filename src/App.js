import React from "react";
import About from "./routes/About";
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <>
    <Routes basename="/rahul_porfolio">
      <Route path="/rahul_porfolio"  element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
