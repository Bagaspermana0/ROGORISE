import { RiArrowLeftLine, RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'

export default function PremiumScreen({ goBack }) {
  return (
    <div className="screen slide-up">
      <div className="screen-header">
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div className="screen-header-title" style={{ color: '#FFB347' }}>RogoRise Premium</div>
      </div>

      <div className="screen-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #FFB347, #FF8C00)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, color: 'white', marginBottom: 20, boxShadow: '0 10px 30px rgba(255,179,71,0.3)' }}>
          <BsStars />
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', textAlign: 'center', marginBottom: 8 }}>
          Buka Potensi Maksimal Anda
        </h1>
        <p style={{ fontSize: 13, color: '#888', textAlign: 'center', marginBottom: 30, maxWidth: 280 }}>
          Dapatkan akses penuh ke AI Personal Coach, resep eksklusif, dan analisis tubuh mendalam.
        </p>

        <div style={{ width: '100%', background: '#161616', border: '1px solid #FFB34755', borderRadius: 18, padding: 20, marginBottom: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#FFB347', color: '#000', fontSize: 11, fontWeight: 800, padding: '4px 12px', borderRadius: 100 }}>
            PALING POPULER
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'AI Smart Coach 24/7',
              'Akses 100+ Resep Diet Premium',
              'Analisis Tubuh Masa Depan (AI Preview)',
              'Video Latihan Kualitas HD',
              'Bebas Iklan Selamanya'
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,179,71,0.15)', color: '#FFB347', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                  <RiCheckLine />
                </div>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, width: '100%', marginBottom: 30 }}>
          <div className="hover-bounce" style={{ flex: 1, background: '#111', border: '1px solid #222', borderRadius: 16, padding: '16px', textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>1 Bulan</div>
            <div style={{ fontSize: 20, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>Rp49k</div>
          </div>
          <div className="hover-bounce pulse" style={{ flex: 1, background: 'rgba(255,179,71,0.1)', border: '1px solid #FFB347', borderRadius: 16, padding: '16px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -10, right: -10, background: '#FF6B6B', color: 'white', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 100 }}>HEMAT 40%</div>
            <div style={{ fontSize: 12, color: '#FFB347', marginBottom: 4 }}>12 Bulan</div>
            <div style={{ fontSize: 20, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: '#FFB347' }}>Rp349k</div>
          </div>
        </div>

        <button className="app-btn hover-bounce" style={{ background: '#FFB347', color: '#000', fontSize: 16 }}>
          Langganan Sekarang
        </button>
        <p style={{ fontSize: 11, color: '#555', marginTop: 12, textAlign: 'center' }}>
          Berlangganan dapat dibatalkan kapan saja melalui pengaturan.
        </p>

      </div>
    </div>
  )
}
