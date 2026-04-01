import React from "react";
import { useState } from "react";
import "./index.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import Steps from "./Steps.jsx";
import Price from "./Price.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Product />
      <Steps />
      <Price />
      <CTA />
      <Footer />
    </>
  )
  
}

export default App;
