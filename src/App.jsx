import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "./components/Features";
import Testimonails from "./components/Testimonails";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonails />
      <Footer />
      <CTA />
    </div>
  );
}

export default App;
