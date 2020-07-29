import React from "react";
import Header from "./components/Header";
import BucketList from "./components/BucketList";
import MiracleMessages from './components/MiracleMessages';
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <MiracleMessages />
      <BucketList />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
