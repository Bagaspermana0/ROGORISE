import { useState } from 'react'
import { RiFlashlightFill, RiArrowLeftLine, RiCheckLine } from 'react-icons/ri'
import { TbRocket } from 'react-icons/tb'

export default function RegisterScreen({ navigate, setUser }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleRegister = () => {
    if (form.name && form.email) {
      setUser({ name: form.name, email: form.email })
      navigate('onboarding')
    }
  }

  return (
    <div className="screen" style={{ padding: '0 0 20px' }}>
      {/* Header */}
      <div style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button className="screen-header-back" onClick={() => navigate('login')}>
          <RiArrowLeftLine />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <RiFlashlightFill style={{ color: 'var(--accent-green)', fontSize: 20 }} />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18 }}>RogoRise</span>
        </div>
      </div>

      <div style={{ padding: '10px 20px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6, fontFamily: 'Space Grotesk, sans-serif' }}>
          Buat Akun
        </h2>
        <p style={{ fontSize: 13, color: '#666', marginBottom: 28 }}>
          Bergabung dan mulai perjalanan hidup sehatmu hari ini
        </p>

        <div className="app-field">
          <label className="app-label">Nama Lengkap</label>
          <input className="app-input" placeholder="Nama kamu" value={form.name} onChange={e => update('name', e.target.value)} />
        </div>

        <div className="app-field">
          <label className="app-label">Email</label>
          <input className="app-input" type="email" placeholder="kamu@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
        </div>

        <div className="app-field">
          <label className="app-label">Password</label>
          <input className="app-input" type="password" placeholder="Minimal 8 karakter" value={form.password} onChange={e => update('password', e.target.value)} />
        </div>

        {/* Terms */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: 'var(--accent-green)', flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
            <RiCheckLine style={{ fontSize: 14, fontWeight: 'bold' }} />
          </div>
          <p style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>
            Saya setuju dengan <span style={{ color: 'var(--accent-green)' }}>Syarat & Ketentuan</span> dan <span style={{ color: 'var(--accent-green)' }}>Kebijakan Privasi</span> RogoRise
          </p>
        </div>

        <button className="app-btn app-btn-primary" onClick={handleRegister} style={{ marginBottom: 16 }}>
          Daftar Sekarang
        </button>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#555' }}>
          Sudah punya akun?{' '}
          <span style={{ color: 'var(--accent-green)', fontWeight: 700, cursor: 'pointer' }} onClick={() => navigate('login')}>
            Masuk
          </span>
        </p>
      </div>
    </div>
  )
}
