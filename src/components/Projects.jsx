import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

function ProjectCard({ project }) {
  return (
    <motion.div className="project-card" variants={itemVariants} whileHover={{ y: -8 }}>
      {/* Project Image / Colored Header */}
      <div className="project-card-image" style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)` }}>
        <div className="flex items-center justify-center h-full p-6">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(245,242,235,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {project.category === 'Data Analytics' && (
              <>
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </>
            )}
            {project.category === 'Research' && (
              <>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </>
            )}
            {(project.category === 'Analytics' || project.category === 'Data Engineering') && (
              <>
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </>
            )}
          </svg>
        </div>
        <div className="project-card-overlay" />
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <span className="project-card-category">{project.category}</span>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="project-card-link">
          View Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const featuredProjects = projectsData.filter((p) => p.featured)

  return (
    <section id="projects" className="section" style={{ background: 'var(--color-offwhite-light)' }}>
      <div className="container" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A curated selection of projects that showcase my analytical
              capabilities and research expertise.
            </p>
          </div>
          <Link to="/projects" className="view-all-btn">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { ProjectCard }
