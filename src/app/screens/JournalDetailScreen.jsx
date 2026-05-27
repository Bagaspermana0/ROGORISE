import { RiArrowLeftLine, RiBookmarkLine, RiShareForwardLine } from 'react-icons/ri'
import { TbClock } from 'react-icons/tb'

export default function JournalDetailScreen({ goBack, screenData }) {
  // Use dummy data if no screenData is provided
  const journal = screenData || {
    title: '10 Makanan Tinggi Protein',
    desc: 'Daftar makanan lokal untuk bantu bangun otot',
    type: 'Tips Gym',
    premium: false
  }

  return (
    <div className="screen slide-up" style={{ background: '#0c0c0c' }}>
      {/* Header Image Area */}
      <div style={{ position: 'relative', width: '100%', height: 240, background: 'linear-gradient(135deg, #111, #1a1a1a)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(0,255,135,0.1) 0%, transparent 70%)' }} />
        
        {/* Top Navbar overlapping image */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
          <button onClick={goBack} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 18 }}>
            <RiArrowLeftLine />
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 18 }}>
              <RiBookmarkLine />
            </button>
            <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 18 }}>
              <RiShareForwardLine />
            </button>
          </div>
        </div>

        {/* Floating Category Tag */}
        <div style={{ position: 'absolute', bottom: -12, left: 20, background: 'var(--accent-green)', color: '#000', padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 800, zIndex: 5, boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
          {journal.type}
        </div>
      </div>

      <div className="screen-body" style={{ paddingTop: 30, paddingBottom: 40 }}>
        <h1 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.3, marginBottom: 12 }}>
          {journal.title}
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid #1a1a1a' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 14, fontWeight: 700 }}>
            R
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>RogoRise Editorial</div>
            <div style={{ fontSize: 11, color: '#666', display: 'flex', alignItems: 'center', gap: 4 }}>
              27 Mei 2026 • <TbClock /> 3 mnt baca
            </div>
          </div>
        </div>

        {/* Content Dummy */}
        <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.6 }}>
          <p style={{ marginBottom: 16 }}>
            {journal.desc}. Memenuhi kebutuhan protein harian seringkali menjadi tantangan terbesar bagi mereka yang sedang mencoba membangun massa otot. Apalagi di tengah kesibukan sehari-hari, kita butuh solusi yang praktis dan murah.
          </p>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'white', marginTop: 24, marginBottom: 10 }}>Mengapa Protein Penting?</h3>
          <p style={{ marginBottom: 16 }}>
            Protein adalah balok pembangun otot Anda. Tanpa asupan protein yang cukup, latihan sekeras apapun tidak akan membuahkan hasil yang maksimal karena tubuh tidak memiliki bahan baku untuk memperbaiki sel otot yang rusak setelah latihan.
          </p>

          {journal.premium && (
            <div style={{ background: 'linear-gradient(135deg, rgba(255, 179, 71, 0.1), rgba(255, 179, 71, 0.05))', border: '1px solid rgba(255, 179, 71, 0.3)', borderRadius: 12, padding: 16, marginTop: 20, marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#FFB347', marginBottom: 8 }}>⭐ Konten Premium Eksklusif</div>
              <p style={{ fontSize: 13, color: 'white', lineHeight: 1.5 }}>
                Dalam artikel eksklusif ini, kami juga membagikan rahasia menghitung rasio makro secara presisi yang digunakan oleh atlet profesional.
              </p>
            </div>
          )}

          <div style={{ width: '100%', height: 160, background: '#111', borderRadius: 12, marginTop: 24, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #333' }}>
            <span style={{ fontSize: 12, color: '#555' }}>Ilustrasi Makanan</span>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'white', marginTop: 24, marginBottom: 10 }}>Pilihan Lokal</h3>
          <p style={{ marginBottom: 16 }}>
            Anda tidak perlu selalu membeli suplemen mahal. Tempe, telur, dan dada ayam lokal adalah sumber protein yang sangat baik dengan profil asam amino yang lengkap.
          </p>
        </div>
      </div>
    </div>
  )
}
