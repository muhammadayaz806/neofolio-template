import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className="contact-section">
      <div>
        <h2 className="contact-title">Got questions?</h2>
        <p className="contact-description">
          I'm always excited to collaborate on innovative and exciting projects!
        </p>

        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">
              <Mail className="w-5 h-5" />
            </div>
            <div className="contact-info">
              <p>E-mail</p>
              <a href="mailto:ayazmughal806@gmail.com">
                ayazmughal806@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <Phone className="w-5 h-5" />
            </div>
            <div className="contact-info">
              <p>Phone</p>
              <a href="tel:+48555555555">
                +48 555 555 555
              </a>
            </div>
          </div>
        </div>

        <button className="btn contact-btn">
          Schedule a call
        </button>
      </div>
    </section>
  )
}

export default Contact

