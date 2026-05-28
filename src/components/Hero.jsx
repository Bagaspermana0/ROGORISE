import { RiArrowRightLine, RiPlayCircleFill, RiFlashlightFill, RiLeafLine, RiHeartPulseLine } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { TbFlame } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import logoImg from '../assets/rogoriselogo.png'
import './Hero.css'

const badges = [
  { icon: <RiFlashlightFill />, label: 'AI-Powered Coach' },
  { icon: <RiLeafLine />, label: 'Nutrisi Lokal' },
  { icon: <RiHeartPulseLine />, label: 'Pelacakan Real-time' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="grid-bg" />
      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <div className="section-tag">
            AI Fitness Coach #1 Indonesia
          </div>

          <h1 className="hero__title">
            Rise Above<br />
            <span className="hero__title-accent text-glow">Your Limits.</span>
          </h1>

          <p className="hero__subtitle">
            Platform AI coaching fitness & nutrisi personal yang memahami tubuhmu,
            gaya hidupmu, dan pola makan lokal Indonesia — semua dalam satu aplikasi.
          </p>

          {/* Badges */}
          <div className="hero__badges">
            {badges.map((b, i) => (
              <div key={i} className="hero__badge">
                <span className="hero__badge-icon">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <Link to="/app" className="btn-primary hero__btn-primary">
              Mulai Gratis Sekarang
              <RiArrowRightLine />
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              <RiPlayCircleFill />
              Cara Kerjanya
            </a>
          </div>

          {/* Social proof */}
          <div className="hero__proof">
            <div className="hero__proof-avatars">
              {[1,2,3].map(i => (
                <div key={i} className="hero__proof-avatar" style={{
                  background: `hsl(${i * 40 + 120}, 60%, 30%)`
                }}>
                  {['B','A','G'][i-1]}
                </div>
              ))}
            </div>
            <div className="hero__proof-text">
              <strong>500+</strong> pengguna aktif di kota besar Indonesia
            </div>
          </div>
        </div>

        {/* Right — App mockup */}
        <div className="hero__visual animate-float">
          <div className="hero__phone">
            <div className="hero__phone-header">
              <div className="hero__phone-notch" />
            </div>
            <div className="hero__phone-screen">
              {/* App mockup content */}
              <div className="mockup-top">
                <div className="mockup-logo" style={{ gap: '6px' }}>
                  <img 
                    src={logoImg} 
                    alt="RogoRise Logo" 
                    style={{ width: '18px', height: '18px', borderRadius: '4px', objectFit: 'contain' }} 
                  />
                  <span>RogoRise</span>
                </div>
                <span className="badge">STEP 1 OF 3</span>
              </div>

              <div className="mockup-title">Build your profile</div>
              <div className="mockup-sub">We'll use this to create your personalized plan.</div>

              <div className="mockup-section-label">Physical Metrics</div>
              <div className="mockup-fields">
                <div className="mockup-field">
                  <span className="mockup-field-label">Age</span>
                  <span className="mockup-field-val">23</span>
                </div>
                <div className="mockup-field">
                  <span className="mockup-field-label">Gender</span>
                  <span className="mockup-field-val">Male</span>
                </div>
                <div className="mockup-field">
                  <span className="mockup-field-label">Weight</span>
                  <span className="mockup-field-val">72 kg</span>
                </div>
                <div className="mockup-field">
                  <span className="mockup-field-label">Height</span>
                  <span className="mockup-field-val">175 cm</span>
                </div>
              </div>

              <div className="mockup-section-label">Primary Goal</div>
              <div className="mockup-goals">
                <div className="mockup-goal mockup-goal--active">Lose Weight</div>
                <div className="mockup-goal">Gain Muscle</div>
                <div className="mockup-goal">Maintain</div>
              </div>

              <div className="mockup-progress">
                <div className="mockup-progress-bar">
                  <div className="mockup-progress-fill" style={{ width: '33%' }} />
                </div>
              </div>

              <div className="mockup-btn">Continue to Dashboard →</div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hero__float-card hero__float-card--1">
            <RiHeartPulseLine className="float-card-icon" />
            <div>
              <div className="float-card-label">Kalori Hari Ini</div>
              <div className="float-card-val">1,840 / 2,100</div>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--2">
            <RiFlashlightFill className="float-card-icon" />
            <div>
              <div className="float-card-label">Streak Latihan</div>
              <div className="float-card-val" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <TbFlame style={{ color: '#FFB347', fontSize: 16 }} /> 14 Hari
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="hero__bottom-fade" />
    </section>
  )
}
