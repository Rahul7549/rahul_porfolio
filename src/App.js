import React from "react";
import About from "./routes/About";
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <>
    <Routes basename="/rahul_portfolio">
      <Route exact path="/rahul_portfolio"  element={<Home/>}/>
      <Route exact path="/rahul_portfolio/contact" element={<Contact/>}/>
      <Route exact path="/rahul_portfolio/project" element={<Project/>}/>
      <Route exact path="/rahul_portfolio/about" element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
