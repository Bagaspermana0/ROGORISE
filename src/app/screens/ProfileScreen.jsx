import { RiFlashlightFill, RiSettings3Line, RiLogoutBoxLine, RiShieldCheckLine, RiQuestionLine, RiHeartLine, RiArrowRightSLine, RiInstagramLine, RiTiktokFill, RiWhatsappLine, RiVipCrown2Line } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { TbScale, TbRuler, TbActivity, TbTarget, TbFlame, TbRun, TbTrendingDown, TbBarbell, TbFlag } from 'react-icons/tb'

const menuItems = [
  { icon: <RiSettings3Line />, label: 'Pengaturan Akun', color: '#888', action: 'settings' },
  { icon: <BsStars />, label: 'Upgrade ke Premium', color: '#FFB347', action: 'premium', badge: 'HOT' },
  { icon: <RiVipCrown2Line />, label: 'Online Coaching', color: '#B19CD9', action: 'coaching' },
  { icon: <RiShieldCheckLine />, label: 'Privasi & Keamanan', color: '#4ECDC4', action: 'privacy' },
  { icon: <RiHeartLine />, label: 'Tentang RogoRise', color: '#FF6B6B', action: 'about' },
  { icon: <RiQuestionLine />, label: 'Bantuan & FAQ', color: '#45B7D1', action: 'faq' },
  { icon: <RiLogoutBoxLine />, label: 'Keluar', color: '#FF4444', action: 'logout' },
]

export default function ProfileScreen({ navigate, user, setUser }) {
  const name = user?.name || 'Bagas Putra'
  const email = user?.email || 'bagas@rogorise.id'

  const handleAction = (action) => {
    if (action === 'logout') {
      setUser(null)
      navigate('login')
    } else if (action) {
      navigate(action)
    }
  }

  return (
    <div className="screen">
      <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>Profil</h1>
          <button style={{ background: '#161616', border: '1px solid #222', borderRadius: 10, padding: '8px 10px', color: '#888', fontSize: 18, cursor: 'pointer', display: 'flex' }}>
            <RiSettings3Line />
          </button>
        </div>
      </div>

      <div className="screen-body" style={{ paddingTop: 0 }}>

        {/* Profile card */}
        <div style={{ background: 'linear-gradient(135deg, #0d2e1e, #0a1a10)', border: '1px solid rgba(0,255,135,0.25)', borderRadius: 20, padding: '20px', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            {/* Avatar */}
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,255,135,0.15)', border: '2px solid rgba(0,255,135,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, color: 'var(--accent-green)', boxShadow: '0 0 20px rgba(0,255,135,0.2)' }}>
              {name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 2 }}>{name}</div>
              <div style={{ fontSize: 12, color: 'rgba(0,255,135,0.7)', marginBottom: 4 }}>{email}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(0,255,135,0.1)', border: '1px solid rgba(0,255,135,0.25)', borderRadius: 100, padding: '3px 10px' }}>
                <BsStars style={{ color: 'var(--accent-green)', fontSize: 10 }} />
                <span style={{ fontSize: 10, color: 'var(--accent-green)', fontWeight: 700 }}>Basic Plan</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            {[
              { label: 'Workout', val: <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>28 <TbBarbell style={{ color: 'var(--accent-green)', fontSize: 16 }} /></span>, color: 'var(--accent-green)' },
              { label: 'Turun', val: <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>3.3 kg</span>, color: '#4ECDC4' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 12, padding: '10px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: s.color, fontFamily: 'Space Grotesk, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.val}</div>
                <div style={{ fontSize: 10, color: '#555', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Body Stats */}
        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 18, padding: '16px', marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Data Tubuh</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            {[
              { label: 'Berat Badan', val: '82 kg', icon: <TbScale style={{ color: '#FF6B6B' }} /> },
              { label: 'Tinggi Badan', val: '175 cm', icon: <TbRuler style={{ color: '#4ECDC4' }} /> },
              { label: 'BMI', val: '26.8', icon: <TbActivity style={{ color: '#FFB347' }} /> },
              { label: 'Target', val: '74 kg', icon: <TbTarget style={{ color: 'var(--accent-green)' }} /> },
              { label: 'Kalori Target', val: '2,100 kkal', icon: <TbFlame style={{ color: '#FFB347' }} /> },
              { label: 'Level Aktivitas', val: 'Moderat', icon: <TbRun style={{ color: '#45B7D1' }} /> },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0f0f0f', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18, display: 'flex' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 10, color: '#555' }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, padding: '14px 16px', marginBottom: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Tujuan Utama</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 24, display: 'flex', color: '#FF6B6B' }}><TbTrendingDown style={{ fontSize: 28 }} /></span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>Turunkan Berat Badan</div>
              <div style={{ fontSize: 12, color: '#555' }}>Target: -8 kg dalam 6 bulan</div>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 18, overflow: 'hidden', marginBottom: 20 }}>
          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={() => item.action && handleAction(item.action)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                borderBottom: i < menuItems.length - 1 ? '1px solid #1a1a1a' : 'none',
                cursor: 'pointer', transition: 'background 0.15s'
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: item.color }}>
                {item.icon}
              </div>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: item.action === 'logout' ? '#FF4444' : 'white' }}>{item.label}</span>
              {item.badge && <span style={{ fontSize: 10, background: '#FFB347', color: '#000', padding: '2px 7px', borderRadius: 100, fontWeight: 800 }}>{item.badge}</span>}
              {!item.badge && <RiArrowRightSLine style={{ color: '#333', fontSize: 18 }} />}
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
          <a href="https://www.instagram.com/rogorise/" target="_blank" rel="noopener noreferrer" className="hover-bounce" style={{ color: '#555', fontSize: 24, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-green)'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}><RiInstagramLine /></a>
          <a href="https://www.tiktok.com/@rogorise" target="_blank" rel="noopener noreferrer" className="hover-bounce" style={{ color: '#555', fontSize: 24, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-green)'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}><RiTiktokFill /></a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover-bounce" style={{ color: '#555', fontSize: 24, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-green)'} onMouseOut={(e) => e.currentTarget.style.color = '#555'}><RiWhatsappLine /></a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginBottom: 8, color: '#333', fontSize: 11 }}>
          <RiFlashlightFill style={{ color: 'var(--accent-green)', opacity: 0.5 }} />
          RogoRise v1.0.0 · Made with <TbFlag style={{ color: 'var(--accent-green)', display: 'inline' }} /> in Semarang 🇮🇩
        </div>
      </div>
    </div>
  )
}
