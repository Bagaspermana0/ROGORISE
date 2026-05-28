import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import logoImg from '../assets/rogoriselogo.png'
import './Navbar.css'

const navLinks = [
  { label: 'Fitur', href: '#features' },
  { label: 'Cara Kerja', href: '#how-it-works' },
  { label: 'Harga', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <img 
            src={logoImg} 
            alt="RogoRise Logo" 
            style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }} 
          />
          <span className="navbar__logo-text">Rogo<span>Rise</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} className="navbar__link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="#pricing" className="btn-primary navbar__cta">
            Mulai Sekarang
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="btn-primary" style={{ marginTop: 8 }}>
            Mulai Sekarang
          </a>
        </div>
      )}
    </nav>
  )
}
