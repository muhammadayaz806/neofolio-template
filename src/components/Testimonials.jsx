import { Star } from 'lucide-react'
import avatar1 from '../assets/images/testimonials/01.png';
import avatar2 from '../assets/images/testimonials/02.png';
import avatar3 from '../assets/images/testimonials/03.png';
import avatar4 from '../assets/images/testimonials/04.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Robert Brown',
      company: 'InnovateX',
      avatar: avatar1,
      rating: 4,
      text: 'The attention to detail and expertise in design systems are unmatched. Our SaaS product now feels more polished than ever.'
    },
    {
      name: 'Emily Davis',
      company: 'NextGen Tech',
      avatar: avatar2,
      rating: 4,
      text: 'Their frontend development work is outstanding. They understood our requirements perfectly and delivered beyond expectations.'
    },
    {
      name: 'Michael Wilson',
      company: 'GlobalSoft',
      avatar: avatar3,
      rating: 4,
      text: 'The tools and systems they provided have made a huge impact on our design and development process. Exceptional work!'
    },
    {
      name: 'Sarah Martinez',
      company: 'Bright Ideas Co.',
      avatar: avatar4,
      rating: 4,
      text: 'Their dedication to creating user-centered designs is evident in every aspect of their work. Truly a pleasure to work with.'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      />
    ))
  }

  return (
    <section className="section">
      <h2 className="section-title mb-8">What Clients Say</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-header">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
            
            <p className="testimonial-text">
              {testimonial.text}
            </p>
            
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

