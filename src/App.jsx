import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "./components/Features";
import Testimonails from "./components/Testimonails";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonails />
    </div>
  );
}

export default App;
