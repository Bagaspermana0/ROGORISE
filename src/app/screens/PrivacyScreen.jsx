import { RiArrowLeftLine, RiShieldCheckLine, RiLockPasswordLine, RiDatabase2Line } from 'react-icons/ri'

export default function PrivacyScreen({ goBack }) {
  return (
    <div className="screen slide-up">
      <div className="screen-header">
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div className="screen-header-title">Privasi & Keamanan</div>
      </div>

      <div className="screen-body">
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ width: 64, height: 64, borderRadius: 20, background: 'rgba(78,205,196,0.1)', color: '#4ECDC4', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>
            <RiShieldCheckLine />
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>Data Anda Aman</h2>
          <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>Kami menerapkan standar keamanan enkripsi tertinggi untuk melindungi data personal Anda.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <RiLockPasswordLine style={{ color: '#4ECDC4', fontSize: 20 }} />
              <div style={{ fontSize: 15, fontWeight: 700 }}>Enkripsi End-to-End</div>
            </div>
            <p style={{ fontSize: 12, color: '#aaa', lineHeight: 1.5 }}>
              Semua data biometrik, log nutrisi, dan progres latihan Anda dienkripsi dan hanya dapat diakses oleh Anda dan AI Coach Anda.
            </p>
          </div>

          <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <RiDatabase2Line style={{ color: '#4ECDC4', fontSize: 20 }} />
              <div style={{ fontSize: 15, fontWeight: 700 }}>Tidak Dijual ke Pihak Ketiga</div>
            </div>
            <p style={{ fontSize: 12, color: '#aaa', lineHeight: 1.5 }}>
              Kami berkomitmen untuk tidak pernah menjual data kesehatan dan kebugaran pengguna kepada pengiklan atau pihak ketiga manapun.
            </p>
          </div>
        </div>

        <button className="app-btn hover-bounce" style={{ background: '#1a1a1a', border: '1px solid #333', color: 'white', marginTop: 30 }}>
          Baca Kebijakan Privasi Penuh
        </button>
      </div>
    </div>
  )
}
