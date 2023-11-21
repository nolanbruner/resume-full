import { default as Home } from "./pages/Home"
import { default as AboutUs } from "./pages/aboutUs"
import { default as Project } from "./pages/project"
import { default as Gallary } from "./pages/Gallary"
import { default as Services } from "./pages/Services"
import { default as NotFoundPage } from "./pages/NotFoundPage"
import { default as About } from "./layouts/about"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<About color={""} />} />
          <Route path="/aboutUs" element={<AboutUs ismobile={false} />} />
          <Route path="/gallary" element={< Gallary isMobile={false} />} />

          <Route path="/services" element={<Services ismobile={false} />} />

          <Route element={<NotFoundPage />} />

        </Route>
        <Route path="/project/:name" element={< Project isMobile={false} />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
