import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import HomePage from "./assets/pages/HomePage.jsx";
import ProjectsPage from "./components/ProjectsPage";
import StorePage from "./components/StorePage";
import AboutPage from "./assets/pages/AboutPage.jsx";
import BlogPage from "./assets/pages/BlogPage.jsx";
import ContactPage from "./assets/pages/ContactPage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
