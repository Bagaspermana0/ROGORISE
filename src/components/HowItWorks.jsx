import { RiUserAddLine, RiFlashlightFill, RiTrophyLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { TbRocket } from 'react-icons/tb'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: <RiUserAddLine />,
    title: 'Buat Profil & Set Tujuan',
    desc: 'Isi data tubuhmu — tinggi, berat, usia, dan tujuan utama (turun berat, naik massa otot, atau menjaga kondisi). Semua diproses oleh AI kami dalam hitungan detik.',
    tags: ['Onboarding', 'Profil Tubuh', 'Goal Setting'],
  },
  {
    number: '02',
    icon: <RiFlashlightFill />,
    title: 'Dapatkan Program Personal AI',
    desc: 'Berdasarkan datamu, RogoRise AI membuat program workout mingguan, meal plan harian, dan panduan nutrisi yang disesuaikan — termasuk makanan lokal Indonesia.',
    tags: ['AI Coach', 'Workout Plan', 'Meal Plan'],
  },
  {
    number: '03',
    icon: <RiTrophyLine />,
    title: 'Jalankan & Pantau Progresmu',
    desc: 'Ikuti jadwal, scan makanan yang kamu konsumsi, dan lihat progresmu di dashboard. AI terus menyesuaikan program berdasarkan hasil nyata dan feedbackmu.',
    tags: ['Tracking', 'Progress', 'Achievement'],
  },
]

export default function HowItWorks() {
  return (
    <section className="how section" id="how-it-works">
      <div className="container">
        <div className="how__header">
          <div className="section-tag">
            <RiFlashlightFill />
            Cara Kerja
          </div>
          <h2 className="section-title">
            Mulai dalam <span>3 Langkah Mudah</span>
          </h2>
          <p className="section-subtitle">
            Tidak perlu jadi ahli fitness. Cukup jawab beberapa pertanyaan dan biarkan AI RogoRise merancang perjalanan sehatmu.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((step, i) => (
            <div key={i} className="how__step-wrapper">
              <div className="how__step card">
                <div className="how__step-num">{step.number}</div>
                <div className="how__step-icon">{step.icon}</div>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.desc}</p>
                <div className="how__step-tags">
                  {step.tags.map(tag => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="how__connector">
                  <BsArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result banner */}
        <div className="how__result">
          <div className="how__result-left">
            <span className="how__result-emoji" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 255, 135, 0.1)', color: 'var(--accent-green)', padding: 10, borderRadius: 10 }}>
              <TbRocket style={{ fontSize: 20 }} />
            </span>
            <div>
              <h3>Siap dalam 5 Menit</h3>
              <p>Program personalmu langsung aktif setelah onboarding. Tidak ada waktu yang terbuang.</p>
            </div>
          </div>
          <a href="#pricing" className="btn-primary">
            Coba Sekarang
            <BsArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
