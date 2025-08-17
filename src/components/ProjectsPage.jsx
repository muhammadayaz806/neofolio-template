import Contact from "./Contact";
import "../assets/css/ProjectsPage.css";
import { useEffect } from "react";

import img1 from "../assets/images/01.webp";
import img2 from "../assets/images/02.webp";
import img3 from "../assets/images/03.webp";
import img4 from "../assets/images/04.webp";
import img5 from "../assets/images/05.webp";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects - Neofolio";
  }, []);
  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      period: "2024 - 2025",
      image: img1,
      description:
        "A comprehensive e-commerce solution with modern design and user experience.",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      period: "2023 - 2024",
      image: img2,
      description:
        "Advanced analytics dashboard with AI-powered insights and data visualization.",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      period: "2023 - 2025",
      image: img3,
      description:
        "Secure and user-friendly mobile banking application with modern UI/UX.",
    },
    {
      id: 4,
      title: "Real Estate Management System",
      period: "2022 - 2023",
      image: img4,
      description:
        "Comprehensive real estate management platform for property listings and transactions.",
    },
    {
      id: 5,
      title: "Online Learning Platform",
      period: "2023 - 2024",
      image: img5,
      description:
        "Interactive online learning platform with course management and progress tracking.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="section-description">
          Explore cutting-edge design innovations that transform ideas into
          reality
        </p>

        <div className="grid grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-period">{project.period}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ProjectsPage;
