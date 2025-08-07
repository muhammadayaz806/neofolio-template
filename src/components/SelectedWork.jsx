import { ArrowRight } from 'lucide-react'
import img1 from '../assets/images/01.webp';
import img2 from '../assets/images/02.webp';

const SelectedWork = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      period: '2024 - 2025',
      image: img1 ,
      description: 'A comprehensive e-commerce solution with modern design and user experience.'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      period: '2023 - 2024',
      image: img2,
      description: 'Advanced analytics dashboard with AI-powered insights and data visualization.'
    }
  ]

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">Selected Work</h2>
        <button className="btn btn-ghost" style={{ color: 'var(--yellow-600)' }}>
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
              />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-period">{project.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork

