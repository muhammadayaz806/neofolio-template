import { Home, Briefcase, ShoppingCart, User, FileText, MessageCircle, Twitter, Facebook, Dribbble, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import profileImg from '../assets/profile-avatar.avif';

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const navigationItems = [
    { icon: Home, label: 'Homepage', to: '/', end: true },
    { icon: Briefcase, label: 'Projects', to: '/projects' },
    { icon: ShoppingCart, label: 'Store', to: '/store' },
    { icon: User, label: 'About', to: '/about' },
    { icon: FileText, label: 'Blog', to: '/blog' },
    { icon: MessageCircle, label: 'Contact', to: '/contact' }
  ]

  const socialItems = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Dribbble, label: 'Dribbble', href: '#' }
  ]

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="sidebar-profile">
        <div className="profile-info">
          <div className="profile-avatar">
            <img 
              src={profileImg}
              alt="Muhammad Ayaz"
            />
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
          {navigationItems.map((item, index) => (
            <li key={item.label} className="nav-item">
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => isActive ? "active-link" : ""}
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
                <a href={item.href}>
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
          style={{ width: '100%', justifyContent: 'flex-start' }}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span></span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

