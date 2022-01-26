import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BasicTrigger from "./components/BasicTrigger";
import LayeredPinning from "./components/LayeredPinning";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      {/* <div className="h-[150vh]">
        <BasicTrigger />
      </div>
      <div className="min-h-[100vh]">
        <ScrollReveal />
      </div>   
     <div className="min-h-screen  text-emerald-50">
        <LayeredPinning />
      </div> */}

      <Router>
        <Routes>
          <Route exact path="/" element={ <BasicTrigger />} />
          <Route exact path="/ScrollReveal" element={<ScrollReveal />} />
          <Route exact path="/LayeredPinning" element={<LayeredPinning />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
