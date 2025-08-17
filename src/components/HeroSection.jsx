import { MapPin, Copy } from "lucide-react";

const HeroSection = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("ayazmughal806@gmail.com");
  };

  return (
    <section className="hero-section">
      <div>
        <h1 className="hero-title">Hello! I'm Ayaz</h1>
        <div className="hero-sub-div flex items-start gap-12">
          <div>
            <h2 className="hero-subtitle">Frontend Developer</h2>
          </div>

          <div className="hero-location">
            <MapPin className="w-5 h-5" />
            <span>Pakistan</span>
          </div>
        </div>

        <p className="hero-description">
          Frontend developer and design system specialist with over 9 years of
          experience focusing on user experience and design systems to create
          user-centered designs in SaaS products.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary">About</button>
          <button className="btn btn-outline" onClick={copyEmail}>
            <Copy className="w-4 h-4" />
            <span>Copy mail</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
