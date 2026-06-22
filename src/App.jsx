import { useState } from "react";

import OpeningEnvelope from "./components/OpeningEnvelope";
import FlowerTransition from "./components/FlowerTransition";
import HeroSection from "./components/HeroSection";
import MemoryGallery from "./components/MemoryGallery";
import ReasonsSection from "./components/ReasonSection";
import FinalScreen from "./components/FinalScreen";
// import FinalScreen from "./components/FinalScreen";

function App() {
  const [opened, setOpened] = useState(false);
  const [showHero, setShowHero] = useState(false);

  // STEP 1
  if (!opened) {
    return (
      <OpeningEnvelope
        onOpen={() => setOpened(true)}
      />
    );
  }

  // STEP 2
  if (!showHero) {
    return (
      <FlowerTransition
        onComplete={() => setShowHero(true)}
      />
    );
  }

  // STEP 3
  return (
    <>
      <HeroSection />
      <MemoryGallery />
      <ReasonsSection />
      <FinalScreen />
    </>
  );
}

export default App;