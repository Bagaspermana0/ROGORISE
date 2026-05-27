import { useState } from 'react'
import { RiArrowLeftLine, RiMoonLine, RiNotification3Line, RiFingerprintLine, RiEarthLine } from 'react-icons/ri'

export default function SettingsScreen({ goBack }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    biometrics: false,
    language: 'id'
  })

  const toggle = (key) => setSettings(s => ({ ...s, [key]: !s[key] }))

  return (
    <div className="screen slide-up">
      <div className="screen-header">
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div className="screen-header-title">Pengaturan Akun</div>
      </div>

      <div className="screen-body">
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#888', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Preferensi Aplikasi</div>
          <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, overflow: 'hidden' }}>
            
            {/* Notification Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #1a1a1a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  <RiNotification3Line />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Notifikasi Pengingat</div>
              </div>
              <div onClick={() => toggle('notifications')} style={{ width: 44, height: 24, borderRadius: 12, background: settings.notifications ? 'var(--accent-green)' : '#333', position: 'relative', cursor: 'pointer', transition: '0.3s' }}>
                <div style={{ position: 'absolute', top: 2, left: settings.notifications ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: 'white', transition: '0.3s', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #1a1a1a' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(0,255,135,0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  <RiMoonLine />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Tema Gelap</div>
              </div>
              <div onClick={() => toggle('darkMode')} style={{ width: 44, height: 24, borderRadius: 12, background: settings.darkMode ? 'var(--accent-green)' : '#333', position: 'relative', cursor: 'pointer', transition: '0.3s' }}>
                <div style={{ position: 'absolute', top: 2, left: settings.darkMode ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: 'white', transition: '0.3s', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
              </div>
            </div>

            {/* Biometrics Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(78,205,196,0.1)', color: '#4ECDC4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  <RiFingerprintLine />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Login Biometrik</div>
              </div>
              <div onClick={() => toggle('biometrics')} style={{ width: 44, height: 24, borderRadius: 12, background: settings.biometrics ? 'var(--accent-green)' : '#333', position: 'relative', cursor: 'pointer', transition: '0.3s' }}>
                <div style={{ position: 'absolute', top: 2, left: settings.biometrics ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: 'white', transition: '0.3s', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#888', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bahasa</div>
          <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,179,71,0.1)', color: '#FFB347', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  <RiEarthLine />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Bahasa Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        <button className="app-btn hover-bounce" style={{ background: '#1a1010', border: '1px solid #331515', color: '#FF6B6B', marginTop: 20 }}>
          Hapus Akun
        </button>
      </div>
    </div>
  )
}
