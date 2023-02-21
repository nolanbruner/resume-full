import { default as Home } from "./pages/Home"
import { default as Resume } from "./pages/resume"
import { default as Project } from "./pages/project"
import { default as ProjectsPage } from "./pages/projectsPage"
import { default as Themes } from "./pages/themes"
import { default as NotFoundPage } from "./pages/NotFoundPage"
import { default as About } from "./components/about"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<About color={""} iconWidth="100px" />} />
          <Route path="/resume" element={<Resume ismobile={false} />} />
          <Route path="/projects" element={< ProjectsPage isMobile={false} />} />

          <Route path="/themes" element={<Themes />} />

          <Route element={<NotFoundPage />} />

        </Route>
        <Route path="/project/:name" element={< Project isMobile={false} />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
