import "../css/AboutPage.css";
import Services from "../../components/Services";
import Contact from "../../components/Contact";

const AboutPage = () => {
  return (
    <>
      <section className="about-section flex gap-8 mb-32">
        <div className="text-container">
          <h1 className="about-title">Hello! I'm Ayaz</h1>
          <div>
            <h2 className="about-subtitle">Frontend Developer</h2>
          </div>

          <div className="about-description">
            <p>
              I’m Toby, a frontend developer and product development specialist
              from Poland with over 9 years of experience crafting seamless user
              interfaces and scalable design systems for SaaS products. My focus
              is on bridging the gap between user experience and technical
              implementation.
            </p>
            <p>
              Co-creator at Tetrisly, one of the most popular design system
              starter kits. I’ve collaborated with companies like Phenom.com,
              Bidroom.com, and Perfops.net, as well as numerous startups
              worldwide, to deliver innovative solutions as a Lead Developer and
              Technical Consultant.
            </p>
          </div>
        </div>
        <div className="about-image">
          <img src="/assets/images/about-image.webp" alt="About Me" />
        </div>
      </section>
      <Services />
      <section className="tools-section">
        <div>
          <h2 className="tools-title">Tools and Techs</h2>
          <div className="tools-grid">
            <div className="tools-item">
              <div className="tools-name">
                <p>Figma</p>
              </div>
            </div>
            <div className="tools-item">
              <div className="tools-name">
                <p>Next.js</p>
              </div>
            </div>
            <div className="tools-item">
              <div className="tools-name">
                <p>Webflow</p>
              </div>
            </div>
            <div className="tools-item">
              <div className="tools-name">
                <p>Slack</p>
              </div>
            </div>
            <div className="tools-item">
              <div className="tools-name">
                <p>ChatGPT</p>
              </div>
            </div>
            <div className="tools-item">
              <div className="tools-name">
                <p>Visual Studio Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default AboutPage;
