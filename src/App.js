import * as layouts from "./layouts"
import { default as Home } from "./Home"
import {default as Resume} from "./resume"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;
