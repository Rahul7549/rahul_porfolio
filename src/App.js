import React from "react";
import About from "./routes/About";
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/navBar/Navbar";

function App() {



  return (
    <>
    <Navbar/>
    <Routes basename="/">
      <Route exact path="/"  element={<Home />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/project" element={<Project />}/>
      <Route exact path="/about" element={<About />}/>
    </Routes>
    </>
  );
}

export default App;
