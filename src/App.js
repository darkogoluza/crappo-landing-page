import React from "react";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Trade from "./components/Trade";
import Features from "./components/Features";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Info />
      <Trade />
      <Features />
    </>
  );
}

export default App;
