import React from "react";
import Header from "./components/Header";
import SoMe from "./components/SoMe";
import SaltiestHackerNews from './components/SaltiestHackerNews';
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <SaltiestHackerNews />
      <SoMe />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
