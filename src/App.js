import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import Aboutme from "./components/about me/Aboutme";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import "./styles/index.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="App">
      <Hero />
      <Navbar />
      <Aboutme />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
