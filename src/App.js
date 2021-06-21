import React from "react";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Trade from "./components/Trade";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Info />
      <Trade />
    </>
  );
}

export default App;
