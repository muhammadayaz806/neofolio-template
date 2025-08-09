import { ArrowRight } from 'lucide-react'
import blogImg1 from '../assets/images/blogs/blog1.webp';
import blogImg2 from '../assets/images/blogs/blog2.webp';


const Blog = () => {
  const blogPosts = [
    {
      date: 'August 2, 2024',
      title: 'The Future of JavaScript: What\'s New in ES2025?',
      image: blogImg1,
      slug: 'future-of-javascript-es2025'
    },
    {
      date: 'August 5, 2024',
      title: 'How AI is Transforming Software Development',
      image: blogImg2,
      slug: 'ai-transforming-software-development'
    },
    {
      date: 'August 10, 2024',
      title: 'Top 5 Programming Languages for 2024',
      image: blogImg1,
      slug: 'top-programming-languages-2024'
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title mb-8">Blog</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-post">
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">
                {post.title}
              </h3>
              <button className="btn btn-ghost" style={{ color: 'var(--yellow-600)', padding: 0 }}>
                Read
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="blog-image">
              <img 
                src={post.image} 
                alt={post.title}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog

