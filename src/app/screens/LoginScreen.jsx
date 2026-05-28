import { useState } from 'react'
import { RiFlashlightFill, RiEyeLine, RiEyeOffLine, RiGoogleFill } from 'react-icons/ri'
import { BsApple } from 'react-icons/bs'
import { TbRocket, TbMoodSmile } from 'react-icons/tb'
import logoImg from '../../assets/rogoriselogo.png'

export default function LoginScreen({ navigate, setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleLogin = () => {
    if (email && password) {
      setUser({ name: 'Bagas Putra', email })
      navigate('onboarding')
    }
  }

  const handleDemo = () => {
    setUser({ name: 'Bagas Putra', email: 'bagas@rogorise.id' })
    navigate('home')
  }

  return (
    <div className="screen" style={{ padding: '0 0 20px' }}>
      {/* Hero Top */}
      <div className="login-hero">
        <div className="login-logo" style={{ background: 'none', border: 'none', width: 'auto', height: 'auto' }}>
          <img 
            src={logoImg} 
            alt="RogoRise Logo" 
            style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'contain' }} 
          />
        </div>
        <h1 className="login-title">RogoRise</h1>
        <p className="login-sub">AI Coach Fitness & Nutrisi Personalmu</p>
      </div>

      <div style={{ padding: '0 20px', flex: 1 }}>
        {/* Welcome */}
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4, fontFamily: 'Space Grotesk, sans-serif' }}>
          Selamat Datang
        </h2>
        <p style={{ fontSize: 13, color: '#666', marginBottom: 24 }}>
          Masuk untuk melanjutkan perjalanan sehatmu
        </p>

        {/* Email */}
        <div className="app-field">
          <label className="app-label">Email</label>
          <input
            className="app-input"
            type="email"
            placeholder="kamu@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="app-field">
          <label className="app-label">Password</label>
          <div style={{ position: 'relative' }}>
            <input
              className="app-input"
              type={showPass ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ paddingRight: 44 }}
            />
            <button
              onClick={() => setShowPass(!showPass)}
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#555', fontSize: 18, cursor: 'pointer', display: 'flex' }}
            >
              {showPass ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </div>
          <div style={{ textAlign: 'right', marginTop: 6 }}>
            <span style={{ fontSize: 12, color: 'var(--accent-green)', fontWeight: 600 }}>Lupa password?</span>
          </div>
        </div>

        {/* Login Button */}
        <button className="app-btn app-btn-primary" onClick={handleLogin} style={{ marginBottom: 12 }}>
          Masuk
        </button>

        {/* Demo bypass */}
        <button className="app-btn app-btn-secondary" onClick={handleDemo} style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <TbRocket style={{ color: 'var(--accent-green)', fontSize: 18 }} /> Coba Demo Langsung
        </button>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ flex: 1, height: 1, background: '#222' }} />
          <span style={{ fontSize: 12, color: '#444' }}>atau</span>
          <div style={{ flex: 1, height: 1, background: '#222' }} />
        </div>

        {/* Social */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          <button className="app-btn app-btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14 }}>
            <RiGoogleFill style={{ color: '#EA4335', fontSize: 18 }} /> Google
          </button>
          <button className="app-btn app-btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14 }}>
            <BsApple style={{ fontSize: 18 }} /> Apple
          </button>
        </div>

        {/* Register */}
        <p style={{ textAlign: 'center', fontSize: 13, color: '#555' }}>
          Belum punya akun?{' '}
          <span
            style={{ color: 'var(--accent-green)', fontWeight: 700, cursor: 'pointer' }}
            onClick={() => navigate('register')}
          >
            Daftar Sekarang
          </span>
        </p>
      </div>
    </div>
  )
}
