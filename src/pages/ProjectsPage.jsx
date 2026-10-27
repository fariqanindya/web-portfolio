import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ProjectCard } from '../components/Projects'
import { projectsData } from '../data/portfolio'
import { useEffect } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ProjectsPage() {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="projects-page-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="back-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Home
              </Link>
              <p className="section-label">All Projects</p>
              <h1 className="section-title">My Work Portfolio</h1>
              <p className="section-subtitle">
                A comprehensive collection of research projects, data analytics work,
                and consulting engagements I've contributed to throughout my career.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="section">
          <div className="container">
            <motion.div
              className="projects-grid-full"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
