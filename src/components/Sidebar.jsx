import {
  Home,
  Briefcase,
  ShoppingCart,
  User,
  FileText,
  MessageCircle,
  Twitter,
  Facebook,
  Dribbble,
  Sun,
  Moon,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../assets/profile-avatar.avif";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navigationItems = [
    { icon: Home, label: "Homepage", to: "/", end: true },
    { icon: Briefcase, label: "Projects", to: "/projects" },
    { icon: ShoppingCart, label: "Store", to: "/store" },
    { icon: User, label: "About", to: "/about" },
    { icon: FileText, label: "Blog", to: "/blog" },
    { icon: MessageCircle, label: "Contact", to: "/contact" },
  ];

  const socialItems = [
    { icon: Twitter, label: "Twitter", href: "https://x.com/" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/" },
    { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com/" },
  ];

  const handleNavClick = () => setSidebarOpen(false);

  return (
    <>
      {/* Hamburger Button (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" viewBox="0 0 24 24">
          <rect y="4" width="24" height="3" rx="1.5" fill="currentColor" />
          <rect y="10.5" width="24" height="3" rx="1.5" fill="currentColor" />
          <rect y="17" width="24" height="3" rx="1.5" fill="currentColor" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`sidebar${sidebarOpen ? " sidebar--open" : ""}`}>
        {/* Close button (mobile only) */}
        <button
          className="hamburger sidebar-close"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        {/* Profile Section */}
        <div className="sidebar-profile">
          <div className="profile-info">
            <div className="profile-avatar">
              <img src={profileImg} alt="Muhammad Ayaz" />
            </div>
            <div className="profile-details">
              <h3>Muhammad Ayaz</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.label} className="nav-item">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={handleNavClick}
                >
                  <div className="nav-icon">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Section */}
          <div className="social-section">
            <h4 className="social-title">SOCIAL</h4>
            <ul className="nav-list">
              {socialItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="nav-icon">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className="theme-toggle-section">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost"
            style={{ width: "100%", justifyContent: "flex-start" }}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
