import { RiArrowLeftLine, RiCheckLine, RiWhatsappLine } from 'react-icons/ri'
import { TbUsers } from 'react-icons/tb'

const packages = [
  {
    id: 'starter',
    name: 'Starter (1 Bulan)',
    price: '350.000',
    desc: 'Cocok untuk pemula yang butuh arahan dasar.',
    color: '#4ECDC4',
    features: ['Custom Meal Plan Basic', 'Review Form Latihan (1x/minggu)', 'Tanya Jawab via Chat (Slow Response)', 'Evaluasi Bulanan']
  },
  {
    id: 'transform',
    name: 'Transformasi (3 Bulan)',
    price: '900.000',
    desc: 'Pilihan paling populer. Hasil terlihat signifikan.',
    color: '#FFB347',
    badge: 'POPULER',
    features: ['Custom Meal Plan Dinamis', 'Review Form Latihan (Unlimited)', 'Prioritas Tanya Jawab via Chat', 'Video Call Evaluasi (2x/bulan)', 'Grup Komunitas Eksklusif']
  },
  {
    id: 'monster',
    name: 'Monster (6 Bulan)',
    price: '1.500.000',
    desc: 'Pendampingan penuh body recomposition intensif.',
    color: '#FF6B6B',
    features: ['Semua Fitur Transformasi', 'Revisi Program Kapan Saja', 'Konsultasi Suplemen Khusus', 'Garansi Uang Kembali (S&K)']
  }
]

export default function CoachingScreen({ goBack }) {
  return (
    <div className="screen slide-up" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="screen-header" style={{ borderBottom: 'none' }}>
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div className="screen-header-title" style={{ textAlign: 'center' }}>Online Coaching</div>
        <div style={{ width: 36 }} /> {/* spacer */}
      </div>

      <div className="screen-body" style={{ paddingTop: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: 24, marginTop: 10 }}>
          <div style={{ width: 64, height: 64, background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)', border: '1px solid #333', borderRadius: 20, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, color: '#B19CD9', boxShadow: '0 8px 24px rgba(177, 156, 217, 0.15)' }}>
            <TbUsers />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8, lineHeight: 1.2 }}>Capai Target Lebih Cepat<br />Bersama <span style={{ color: '#B19CD9' }}>Expert RogoRise</span></h2>
          <p style={{ fontSize: 13, color: '#888', padding: '0 10px', lineHeight: 1.5 }}>
            Bukan sekadar program AI. Dapatkan bimbingan intensif 1-on-1 langsung dari Coach Tersertifikasi.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 30 }}>
          {packages.map((pkg, i) => (
            <div key={pkg.id} style={{ background: '#161616', border: '1px solid', borderColor: pkg.badge ? pkg.color : '#222', borderRadius: 20, padding: '20px', position: 'relative', overflow: 'hidden' }}>
              {pkg.badge && (
                <div style={{ position: 'absolute', top: 0, right: 0, background: pkg.color, color: '#000', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderBottomLeftRadius: 14 }}>
                  {pkg.badge}
                </div>
              )}
              
              <div style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: pkg.color, marginBottom: 4 }}>{pkg.name}</div>
              <div style={{ fontSize: 12, color: '#666', marginBottom: 12 }}>{pkg.desc}</div>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Rp</span>
                <span style={{ fontSize: 28, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', color: 'white', letterSpacing: '-0.03em' }}>{pkg.price}</span>
              </div>

              <div style={{ background: '#0a0a0a', borderRadius: 14, padding: '12px 14px', marginBottom: 16 }}>
                {pkg.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: idx < pkg.features.length - 1 ? 8 : 0 }}>
                    <RiCheckLine style={{ color: pkg.color, fontSize: 16, marginTop: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: '#aaa', lineHeight: 1.4 }}>{feat}</span>
                  </div>
                ))}
              </div>

              <button className="app-btn hover-bounce" style={{ background: pkg.badge ? pkg.color : '#222', color: pkg.badge ? '#000' : 'white' }}>
                Pilih {pkg.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(255,179,71,0.05)', border: '1px solid rgba(255,179,71,0.2)', borderRadius: 16, padding: '16px', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#FFB347', marginBottom: 6 }}>Ragu Memilih Paket?</div>
          <p style={{ fontSize: 11, color: '#888', marginBottom: 12 }}>Konsultasikan kondisi Anda secara gratis dengan tim kami via WhatsApp.</p>
          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '10px', borderRadius: 10, border: '1px solid #4ECDC4', background: 'transparent', color: '#4ECDC4', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
            <RiWhatsappLine style={{ fontSize: 18 }} /> Chat Admin RogoRise
          </button>
        </div>
      </div>
    </div>
  )
}
