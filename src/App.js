import * as React from "react";
import DrawerAppBar from "./components/navbar/Navbar";
import Aboutme from "./components/about me/Aboutme";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Header />
      <Skills />
      <Works />
      <Aboutme />
      <Contact />
    </>
  );
}

export default App;
