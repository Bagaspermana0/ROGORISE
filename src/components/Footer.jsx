import { RiFlashlightFill, RiArrowRightLine, RiInstagramLine, RiTiktokFill, RiYoutubeLine, RiWhatsappLine, RiMailLine, RiMapPinLine, RiAppleFill, RiAndroidFill, RiHeartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logoImg from '../assets/rogoriselogo.png'
import './Footer.css'

const footerLinks = {
  Produk: ['Fitur', 'Cara Kerja', 'Harga', 'Roadmap', 'Updates'],
  Perusahaan: ['Tentang Kami', 'Tim', 'Karir', 'Press Kit', 'Blog'],
  Bantuan: ['FAQ', 'Customer Support', 'Privacy Policy', 'Terms of Service', 'Keamanan Data'],
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="container">
        <div className="footer__cta">
          <div className="footer__cta-glow" />
          <div className="footer__cta-left">
            <h2 className="footer__cta-title">
              Siap Memulai Perjalanan <span>Hidupmu yang Lebih Sehat?</span>
            </h2>
            <p className="footer__cta-desc">
              Bergabunglah dengan ribuan orang Indonesia yang sudah berubah bersama RogoRise. Mulai gratis, tanpa risiko.
            </p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/app" className="btn-primary footer__cta-btn">
              Download Sekarang
              <RiArrowRightLine />
            </Link>
            <div className="footer__cta-stores">
              <div className="footer__store" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <RiAppleFill style={{ fontSize: 14 }} /> App Store
              </div>
              <div className="footer__store" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <RiAndroidFill style={{ fontSize: 14 }} /> Play Store
              </div>
            </div>
          </div>
        </div>

        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img 
                src={logoImg} 
                alt="RogoRise Logo" 
                style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }} 
              />
              <span>Rogo<span className="green-text">Rise</span></span>
            </div>
            <p className="footer__brand-desc">
              Platform AI coaching fitness & nutrisi personal pertama yang benar-benar memahami gaya hidup orang Indonesia.
            </p>

            <div className="footer__contact">
              <div className="footer__contact-item">
                <RiMapPinLine />
                Semarang, Jawa Tengah, Indonesia
              </div>
              <div className="footer__contact-item">
                <RiMailLine />
                hello@rogorise.id
              </div>
              <div className="footer__contact-item">
                <RiWhatsappLine />
                <a href="https://wa.me/6281234567890?text=Halo%20RogoRise,%20saya%20tertarik%20dengan%20layanan%20coaching%20AI!" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>+62 812-3456-7890</a>
              </div>
            </div>

            <div className="footer__socials">
              <a href="https://www.instagram.com/rogorise/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
                <RiInstagramLine />
              </a>
              <a href="https://www.tiktok.com/@rogorise" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="TikTok">
                <RiTiktokFill />
              </a>
              <a href="https://www.youtube.com/@rogorise" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="YouTube">
                <RiYoutubeLine />
              </a>
              <a href="https://wa.me/6281234567890?text=Halo%20RogoRise,%20saya%20tertarik%20dengan%20layanan%20coaching%20AI!" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="WhatsApp">
                <RiWhatsappLine />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer__links-col">
              <h4 className="footer__links-title">{section}</h4>
              <ul className="footer__links">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-left" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            © 2025 RogoRise. Dibuat dengan <RiHeartFill style={{ color: '#FF4D4D', fontSize: 13 }} /> di Semarang, Indonesia.
          </div>
          <div className="footer__bottom-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
