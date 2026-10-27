export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="footer-text">
            © {currentYear} Fariq Azura Anindya. Crafted with passion.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/fariqazura"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-text"
              style={{ textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-mustard)')}
              onMouseLeave={(e) => (e.target.style.color = '')}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/fariqazura"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-text"
              style={{ textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-mustard)')}
              onMouseLeave={(e) => (e.target.style.color = '')}
            >
              GitHub
            </a>
            <a
              href="mailto:fariq.azura@email.com"
              className="footer-text"
              style={{ textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-mustard)')}
              onMouseLeave={(e) => (e.target.style.color = '')}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
