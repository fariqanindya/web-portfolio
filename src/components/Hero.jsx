import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="hero-badge">
                <span className="dot" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              I'm{' '}
              <span className="highlight">Fariq Azura Anindya</span>,{' '}
              Research &amp; Analyst Based in Indonesia
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Passionate about transforming raw data into strategic insights. 
              I combine analytical rigor with creative problem-solving to help 
              organizations make data-driven decisions that drive real impact.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <a href="#contact" className="hero-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </a>
              <a href="#projects" className="hero-cta-secondary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="hero-stats mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              <div>
                <div className="hero-stat-number">3+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div>
                <div className="hero-stat-number">15+</div>
                <div className="hero-stat-label">Projects Completed</div>
              </div>
              <div>
                <div className="hero-stat-number">8+</div>
                <div className="hero-stat-label">Clients Served</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            className="hero-image-container flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">
              <div className="hero-image-frame">
                {/* SVG Placeholder Portrait */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 420 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ background: 'linear-gradient(135deg, #2A5C47 0%, #1B3D2F 50%, #0F2519 100%)' }}
                >
                  {/* Abstract geometric pattern */}
                  <defs>
                    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4A843" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#E4C06A" stopOpacity="0.1" />
                    </linearGradient>
                    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#F5F2EB" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#F5F2EB" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  <rect width="420" height="560" fill="url(#glow)" />
                  
                  {/* Decorative circles */}
                  <circle cx="210" cy="200" r="80" fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.3" />
                  <circle cx="210" cy="200" r="120" fill="none" stroke="#D4A843" strokeWidth="0.5" opacity="0.15" />
                  <circle cx="210" cy="200" r="160" fill="none" stroke="#F5F2EB" strokeWidth="0.5" opacity="0.08" />
                  
                  {/* Person silhouette */}
                  <ellipse cx="210" cy="180" rx="55" ry="65" fill="#F5F2EB" opacity="0.12" />
                  <ellipse cx="210" cy="350" rx="95" ry="130" fill="#F5F2EB" opacity="0.08" />
                  
                  {/* Decorative lines */}
                  <line x1="50" y1="450" x2="370" y2="450" stroke="url(#gold)" strokeWidth="1" />
                  <line x1="80" y1="470" x2="340" y2="470" stroke="url(#gold)" strokeWidth="0.5" />
                  
                  {/* Monogram */}
                  <text x="210" y="210" textAnchor="middle" fill="#F5F2EB" fontFamily="Georgia, serif" fontSize="64" fontWeight="700" opacity="0.2">
                    FA
                  </text>
                  
                  {/* Caption */}
                  <text x="210" y="500" textAnchor="middle" fill="#D4A843" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.2em" opacity="0.7">
                    YOUR PHOTO HERE
                  </text>
                  <text x="210" y="520" textAnchor="middle" fill="#F5F2EB" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.4">
                    Replace with your portrait image
                  </text>
                </svg>
              </div>
              <div className="hero-image-decoration" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
