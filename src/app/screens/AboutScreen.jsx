import { RiArrowLeftLine, RiFlashlightFill } from 'react-icons/ri'
import logoImg from '../../assets/rogoriselogo.png'

export default function AboutScreen({ goBack }) {
  return (
    <div className="screen slide-up">
      <div className="screen-header">
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div className="screen-header-title">Tentang RogoRise</div>
      </div>

      <div className="screen-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: 24, background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <img 
            src={logoImg} 
            alt="RogoRise Logo" 
            style={{ width: '80px', height: '80px', borderRadius: '24px', objectFit: 'contain' }} 
          />
        </div>
        
        <h1 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>RogoRise</h1>
        <div style={{ fontSize: 12, color: '#666', marginBottom: 24 }}>Versi 1.0.0 (Prototype)</div>

        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, padding: 20, width: '100%', marginBottom: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--accent-green)' }}>Misi Kami</h3>
          <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.6 }}>
            RogoRise dibangun dengan misi untuk mendemokratisasi akses ke pelatihan kebugaran personal yang disesuaikan dengan gaya hidup dan kultur makan orang Indonesia, menggunakan kecerdasan buatan.
          </p>
        </div>

        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, padding: 20, width: '100%' }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Didukung Oleh</h3>
          <p style={{ fontSize: 13, color: '#ccc', lineHeight: 1.6, margin: 0 }}>
            Program inkubasi startup Wadhwani Foundation.
          </p>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 40, fontSize: 11, color: '#555', textAlign: 'center' }}>
          © 2026 RogoRise. All rights reserved.<br/>
          Dibuat dengan semangat di Semarang, Indonesia.
        </div>
      </div>
    </div>
  )
}
