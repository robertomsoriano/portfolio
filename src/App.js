import React from "react";
import "./App.scss";
import "./mobile.scss";
import { Laptop } from "./assets/Laptop";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <Laptop />
      <Hero />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <footer />
    </>
  );
}

export default App;
