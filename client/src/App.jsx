import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages starts
import Home from "./pages/Home";
// pages ends

// global css starts
import "./styles/global.css";
import Nav from "./components/Nav";
// global css ends

function App() {
  return (
    <>
      <Nav />
      <div className="global_wrapper">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
