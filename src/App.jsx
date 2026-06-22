import { useState } from "react";
import OpeningEnvelope from "./components/OpeningEnvelope";
import HeroSection from "./components/HeroSection";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <OpeningEnvelope onOpen={() => setOpened(true)} />
      ) : (
        <HeroSection />
      )}
    </>
  );
}

export default App;