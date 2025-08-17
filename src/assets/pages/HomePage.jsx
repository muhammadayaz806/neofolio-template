import HeroSection from "../../components/HeroSection.jsx";
import SelectedWork from "../../components/SelectedWork.jsx";
import Services from "../../components/Services.jsx";
import Testimonials from "../../components/Testimonials.jsx";
import Blog from "../../components/Blog.jsx";
import Contact from "../../components/Contact.jsx";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Neofolio";
  }, []);
  return (
    <>
      <HeroSection />
      <SelectedWork />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
