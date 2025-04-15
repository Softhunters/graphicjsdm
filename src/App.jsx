import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Hero from "./components/Hero";
import Tournament from "./components/Tournament/Tournament";
import Reel from "./components/Tournament/Reel";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<AboutPage/>} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/contact_us" exact element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
