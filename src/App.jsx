import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ProjectsPage from "./components/ProjectsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <SelectedWork />
                  <Services />
                  <Testimonials />
                  <Blog />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
