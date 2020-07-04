import React from "react";
import "./components/FontAwesomeIcons";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhoAmI from "./components/WhoAmI/WhoAmI";
import ConnectWithMe from "./components/ConnectWithMe/ConnectWithMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhoAmI />
      <ConnectWithMe />
    </div>
  );
}

export default App;
