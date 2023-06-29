import React from "react";
import './App.css'
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about"  element={<About />} />
      </Routes>
    </div>
  );
}
