import { useState } from 'react'
import { RiArrowRightLine, RiArrowLeftLine, RiFlashlightFill, RiCheckLine } from 'react-icons/ri'
import { TbArmchair, TbWalk, TbRun, TbBarbell, TbTrendingDown, TbTrendingUp, TbScale, TbAward, TbRocket, TbTrendingDown as TbDown, TbTrendingUp as TbUp, TbScale as TbScl, TbAward as TbAwd } from 'react-icons/tb'

const steps = [
  {
    id: 'metrics',
    title: 'Data Tubuhmu',
    subtitle: 'Kami pakai ini untuk menghitung kebutuhan kalori & nutrisi harianmu.',
    step: '1 dari 4',
  },
  {
    id: 'activity',
    title: 'Level Aktivitas',
    subtitle: 'Seberapa aktif kamu dalam keseharianmu?',
    step: '2 dari 4',
  },
  {
    id: 'lifestyle',
    title: 'Gaya Hidup & Preferensi',
    subtitle: 'Bantu AI menyesuaikan rencana dengan kondisi dan budgetmu.',
    step: '3 dari 4',
  },
  {
    id: 'goal',
    title: 'Tujuan Utama',
    subtitle: 'Apa yang ingin kamu capai bersama RogoRise?',
    step: '4 dari 4',
  },
]

const activityLevels = [
  { key: 'sedentary', label: 'Sedentary', desc: 'Kerja kantoran, jarang gerak', icon: <TbArmchair /> },
  { key: 'light', label: 'Ringan', desc: 'Olahraga 1-2x/minggu', icon: <TbWalk /> },
  { key: 'moderate', label: 'Moderat', desc: 'Olahraga 3-4x/minggu', icon: <TbRun /> },
  { key: 'active', label: 'Aktif', desc: 'Olahraga 5-6x/minggu', icon: <TbBarbell /> },
]

const goals = [
  { key: 'lose', label: 'Turunkan Berat', icon: <TbTrendingDown />, desc: 'Kurangi lemak tubuh secara sehat', color: '#FF6B6B' },
  { key: 'muscle', label: 'Bangun Otot', icon: <TbTrendingUp />, desc: 'Tingkatkan massa otot & kekuatan', color: '#4ECDC4' },
  { key: 'maintain', label: 'Jaga Kondisi', icon: <TbScale />, desc: 'Pertahankan berat & kebugaran ideal', color: '#45B7D1' },
  { key: 'endurance', label: 'Tingkatkan Stamina', icon: <TbAward />, desc: 'Daya tahan & performa olahraga', color: '#96CEB4' },
]

export default function OnboardingScreen({ navigate, user, setUser }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    age: '23', gender: 'male', weight: '72', height: '175',
    activity: '', sleep: '', budget: '', preference: '', goal: ''
  })

  const update = (k, v) => setData(d => ({ ...d, [k]: v }))

  const nextStep = () => {
    if (step < steps.length - 1) setStep(s => s + 1)
    else {
      setUser(u => ({ ...u, ...data }))
      navigate('home')
    }
  }

  const progress = ((step + 1) / steps.length) * 100

  return (
    <div className="screen">
      {/* Header */}
      <div style={{ padding: '14px 20px 0', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <button
            onClick={() => step > 0 ? setStep(s => s - 1) : navigate('login')}
            style={{ background: '#1a1a1a', border: 'none', borderRadius: 10, padding: '8px 10px', color: 'white', cursor: 'pointer', display: 'flex' }}
          >
            <RiArrowLeftLine />
          </button>
          <span style={{ fontSize: 12, color: '#555', fontWeight: 600 }}>{steps[step].step}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-green)', fontWeight: 700, fontSize: 14 }}>
            <RiFlashlightFill />
            RogoRise
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: '#1a1a1a', borderRadius: 3, marginBottom: 20 }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent-green)', borderRadius: 3, transition: 'width 0.4s ease', boxShadow: '0 0 10px rgba(0,255,135,0.4)' }} />
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, fontFamily: 'Space Grotesk, sans-serif' }}>
          {steps[step].title}
        </h2>
        <p style={{ fontSize: 13, color: '#666', marginBottom: 20, lineHeight: 1.5 }}>
          {steps[step].subtitle}
        </p>
      </div>

      <div className="screen-body">
        {/* Step 1: Metrics */}
        {step === 0 && (
          <div className="slide-up">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              {[
                { key: 'age', label: 'Usia', unit: 'tahun', type: 'number' },
                { key: 'weight', label: 'Berat Badan', unit: 'kg', type: 'number' },
                { key: 'height', label: 'Tinggi Badan', unit: 'cm', type: 'number' },
              ].map(f => (
                <div key={f.key} style={{ background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '12px 14px' }}>
                  <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{f.label}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <input
                      type={f.type}
                      value={data[f.key]}
                      onChange={e => update(f.key, e.target.value)}
                      style={{ background: 'none', border: 'none', color: 'white', fontSize: 24, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', width: '60%', outline: 'none' }}
                    />
                    <span style={{ fontSize: 12, color: '#555' }}>{f.unit}</span>
                  </div>
                </div>
              ))}

              {/* Gender */}
              <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '12px 14px' }}>
                <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Gender</div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[{k:'male',l:'Pria'},{k:'female',l:'Wanita'}].map(g => (
                    <button
                      key={g.k}
                      onClick={() => update('gender', g.k)}
                      style={{
                        flex: 1, padding: '6px', borderRadius: 8, border: '1px solid',
                        borderColor: data.gender === g.k ? 'var(--accent-green)' : '#333',
                        background: data.gender === g.k ? 'rgba(0,255,135,0.1)' : 'transparent',
                        color: data.gender === g.k ? 'var(--accent-green)' : '#555',
                        fontSize: 12, fontWeight: 600, cursor: 'pointer'
                      }}
                    >
                      {g.l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* BMI Preview */}
            {data.weight && data.height && (
              <div style={{ background: 'rgba(0,255,135,0.06)', border: '1px solid rgba(0,255,135,0.2)', borderRadius: 14, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, color: '#555', marginBottom: 4 }}>Estimasi BMI kamu</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--accent-green)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {(data.weight / ((data.height / 100) ** 2)).toFixed(1)}
                </div>
                <div style={{ fontSize: 12, color: '#555' }}>
                  {(() => {
                    const bmi = data.weight / ((data.height/100)**2)
                    if (bmi < 18.5) return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#45B7D1' }}><TbTrendingDown style={{ fontSize: 16 }} /> Berat kurang</span>
                    if (bmi < 25) return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--accent-green)' }}><RiCheckLine style={{ fontSize: 16 }} /> Ideal</span>
                    if (bmi < 30) return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#FFB347' }}><TbTrendingUp style={{ fontSize: 16, transform: 'rotate(90deg)' }} /> Kelebihan berat</span>
                    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#FF6B6B' }}><TbTrendingUp style={{ fontSize: 16, transform: 'rotate(180deg)' }} /> Obesitas</span>
                  })()}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Activity */}
        {step === 1 && (
          <div className="slide-up">
            {activityLevels.map(a => (
              <div
                key={a.key}
                onClick={() => update('activity', a.key)}
                style={{
                  background: data.activity === a.key ? 'rgba(0,255,135,0.08)' : '#161616',
                  border: `1px solid ${data.activity === a.key ? 'rgba(0,255,135,0.4)' : '#222'}`,
                  borderRadius: 14, padding: '14px 16px', marginBottom: 10,
                  display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <span style={{ fontSize: 26, color: data.activity === a.key ? 'var(--accent-green)' : '#555', display: 'flex' }}>{a.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: data.activity === a.key ? 'var(--accent-green)' : 'white', marginBottom: 2 }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: '#555' }}>{a.desc}</div>
                </div>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', border: `2px solid ${data.activity === a.key ? 'var(--accent-green)' : '#333'}`,
                  background: data.activity === a.key ? 'var(--accent-green)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, color: '#000', fontWeight: 900
                }}>
                  {data.activity === a.key && <RiCheckLine />}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Step 3: Lifestyle */}
        {step === 2 && (
          <div className="slide-up">
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: 'white' }}>Rata-rata Jam Tidur</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {[
                  { k: '<5h', l: '< 5 Jam' },
                  { k: '6-7h', l: '6-7 Jam' },
                  { k: '>8h', l: '8+ Jam' }
                ].map(s => (
                  <button key={s.k} onClick={() => update('sleep', s.k)} style={{ padding: '10px 4px', borderRadius: 12, border: '1px solid', borderColor: data.sleep === s.k ? 'var(--accent-green)' : '#333', background: data.sleep === s.k ? 'rgba(0,255,135,0.1)' : '#161616', color: data.sleep === s.k ? 'var(--accent-green)' : '#888', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>{s.l}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: 'white' }}>Anggaran Tambahan / Bulan (Nutrisi/Alat)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { k: 'low', l: 'Ketat (< Rp500rb)', d: 'Fokus tempe, telur, alat minimalis' },
                  { k: 'med', l: 'Menengah (Rp500rb - Rp1.5jt)', d: 'Dada ayam, whey lokal, barbell basic' },
                  { k: 'high', l: 'Premium (> Rp1.5jt)', d: 'Suplemen premium, variasi diet lengkap' }
                ].map(b => (
                  <div key={b.k} onClick={() => update('budget', b.k)} style={{ padding: 12, borderRadius: 12, border: '1px solid', borderColor: data.budget === b.k ? 'var(--accent-green)' : '#333', background: data.budget === b.k ? 'rgba(0,255,135,0.1)' : '#161616', cursor: 'pointer' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: data.budget === b.k ? 'var(--accent-green)' : 'white' }}>{b.l}</div>
                    <div style={{ fontSize: 11, color: data.budget === b.k ? '#888' : '#555', marginTop: 4 }}>{b.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: 'white' }}>Preferensi Latihan</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { k: 'home', l: 'Home Workout (Tanpa Alat)' },
                  { k: 'gym', l: 'Pergi ke Gym' }
                ].map(p => (
                  <button key={p.k} onClick={() => update('preference', p.k)} style={{ padding: 12, borderRadius: 12, border: '1px solid', borderColor: data.preference === p.k ? 'var(--accent-green)' : '#333', background: data.preference === p.k ? 'rgba(0,255,135,0.1)' : '#161616', color: data.preference === p.k ? 'var(--accent-green)' : '#888', fontSize: 13, fontWeight: 700, cursor: 'pointer', textAlign: 'left' }}>{p.l}</button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Goals */}
        {step === 3 && (
          <div className="slide-up">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {goals.map(g => (
                <div
                  key={g.key}
                  onClick={() => update('goal', g.key)}
                  style={{
                    background: data.goal === g.key ? `${g.color}15` : '#161616',
                    border: `2px solid ${data.goal === g.key ? g.color : '#222'}`,
                    borderRadius: 16, padding: '18px 14px', cursor: 'pointer',
                    textAlign: 'center', transition: 'all 0.2s',
                    transform: data.goal === g.key ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 8, color: data.goal === g.key ? g.color : '#555', display: 'flex', justifyContent: 'center' }}>{g.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: data.goal === g.key ? g.color : 'white', marginBottom: 4 }}>{g.label}</div>
                  <div style={{ fontSize: 11, color: '#555', lineHeight: 1.4 }}>{g.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{ padding: '12px 20px 0', flexShrink: 0 }}>
        <button className="app-btn app-btn-primary" onClick={nextStep}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {step < 3 ? 'Lanjut' : <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><TbRocket /> Buat Program AI-ku</span>}
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  )
}
