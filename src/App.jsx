import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <div className="max-w-6xl mx-auto">
          <HeroSection />
          <SelectedWork />
          <Services />
          <Testimonials />
          <Blog />
          <Contact />
        </div>
      </Layout>
    </>
  );
}

export default App;
