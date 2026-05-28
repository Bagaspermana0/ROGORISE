import { useState } from 'react'
import { RiArrowLeftLine, RiCheckLine, RiPlayFill } from 'react-icons/ri'
import { TbBarbell, TbFlame, TbClock, TbTarget, TbAward } from 'react-icons/tb'

const exercises = [
  { name: 'Push-Up', sets: 3, reps: '12-15 rep', rest: '60 det', done: true, muscle: 'Dada & Trisep', icon: <TbBarbell />, desc: 'Turunkan badan secara perlahan hingga dada hampir menyentuh lantai, lalu dorong kembali ke atas.' },
  { name: 'Pull-Up', sets: 3, reps: '8-10 rep', rest: '90 det', done: true, muscle: 'Punggung & Bisep', icon: <TbBarbell style={{ transform: "rotate(45deg)" }} />, desc: 'Tarik tubuh ke atas hingga dagu melewati palang, gunakan otot punggung sebagai penggerak utama.' },
  { name: 'Dumbbell Row', sets: 3, reps: '12 rep/sisi', rest: '60 det', done: false, muscle: 'Punggung Tengah', icon: <TbBarbell />, desc: 'Tarik dumbbell ke arah pinggul dengan siku dekat ke badan, rasakan kontraksi di punggung.' },
  { name: 'Shoulder Press', sets: 3, reps: '10-12 rep', rest: '60 det', done: false, muscle: 'Bahu', icon: <TbBarbell style={{ transform: "rotate(45deg)" }} />, desc: 'Dorong beban ke atas kepala hingga lengan lurus, lalu turunkan perlahan ke posisi awal.' },
  { name: 'Tricep Dips', sets: 3, reps: '12 rep', rest: '60 det', done: false, muscle: 'Trisep', icon: <TbBarbell />, desc: 'Turunkan badan dengan menekuk siku hingga 90 derajat, dorong kembali ke atas.' },
  { name: 'Bicep Curl', sets: 3, reps: '12 rep/sisi', rest: '60 det', done: false, muscle: 'Bisep', icon: <TbBarbell />, desc: 'Angkat beban ke arah bahu dengan mengontraksikan bisep, pastikan siku tetap di tempat.' },
]

export default function WorkoutDetailScreen({ goBack, navigate }) {
  const [done, setDone] = useState(exercises.map(e => e.done))
  const [expandedIndex, setExpandedIndex] = useState(null)
  const completedCount = done.filter(Boolean).length

  return (
    <div className="screen">
      {/* Header */}
      <div style={{ padding: '14px 20px 12px', borderBottom: '1px solid #1a1a1a', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--accent-green)', fontWeight: 600, marginBottom: 2 }}>HARI INI · KAMIS</div>
            <div style={{ fontSize: 17, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>Lower Body Power</div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { val: '50 mnt', label: 'Durasi' },
            { val: '360 kkal', label: 'Kalori' },
            { val: `${completedCount}/${exercises.length}`, label: 'Selesai' },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: '#161616', borderRadius: 12, padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>{s.val}</div>
              <div style={{ fontSize: 10, color: '#555', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ padding: '10px 20px 0', flexShrink: 0 }}>
        <div style={{ height: 4, background: '#1a1a1a', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${(completedCount / exercises.length) * 100}%`, height: '100%', background: 'var(--accent-green)', borderRadius: 3, transition: 'width 0.4s ease', boxShadow: '0 0 8px rgba(0,255,135,0.4)' }} />
        </div>
      </div>

      <div className="screen-body" style={{ paddingTop: 14 }}>
        {exercises.map((ex, i) => (
          <div key={i} className="hover-bounce" style={{ background: '#161616', border: `1px solid ${done[i] ? 'rgba(0,255,135,0.25)' : '#1e1e1e'}`, borderRadius: 14, marginBottom: 10, overflow: 'hidden', transition: 'all 0.3s' }}>
            
            {/* Main Card Header */}
            <div onClick={() => setExpandedIndex(expandedIndex === i ? null : i)} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', background: done[i] ? 'rgba(0,255,135,0.04)' : 'transparent' }}>
              {/* Checkbox (independent toggle) */}
              <div onClick={(e) => { e.stopPropagation(); setDone(d => d.map((v, j) => j === i ? !v : v)); }} style={{ width: 28, height: 28, borderRadius: 8, border: `2px solid ${done[i] ? 'var(--accent-green)' : '#333'}`, background: done[i] ? 'var(--accent-green)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#000', fontWeight: 900, flexShrink: 0, transition: 'all 0.2s' }}>
                {done[i] && <RiCheckLine />}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: done[i] ? '#888' : 'white', textDecoration: done[i] ? 'line-through' : 'none', marginBottom: 3 }}>{ex.name}</div>
                <div style={{ fontSize: 11, color: '#666' }}>{ex.sets} set · {ex.reps} · {ex.rest} istirahat</div>
              </div>
              <div style={{ fontSize: 22, color: done[i] ? '#444' : 'white', display: 'flex' }}>{ex.icon}</div>
            </div>

            {/* Expanded Content (Video + Desc) */}
            {expandedIndex === i && (
              <div className="slide-up" style={{ padding: '0 16px 16px', borderTop: '1px solid #1a1a1a', marginTop: 4 }}>
                <div style={{ width: '100%', height: 160, background: '#0a0a0a', borderRadius: 12, border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '12px 0', position: 'relative', overflow: 'hidden' }}>
                  <RiPlayFill className="pulse" style={{ fontSize: 44, color: 'rgba(255,255,255,0.8)', zIndex: 2, cursor: 'pointer' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, #111, #1a1a1a)' }} />
                  <div style={{ position: 'absolute', bottom: 8, left: 10, fontSize: 10, color: '#aaa', fontWeight: 600, zIndex: 2, background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: 4 }}>► Tonton Panduan</div>
                </div>
                <div style={{ fontSize: 12, color: '#ccc', lineHeight: 1.5, marginBottom: 8 }}>{ex.desc}</div>
                <div style={{ fontSize: 11, color: '#555' }}>
                  Target: <span style={{ color: 'white', fontWeight: 600 }}>{ex.muscle}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {completedCount === exercises.length && (
          <div style={{ background: 'linear-gradient(135deg, #0d2e1e, #0a2010)', border: '1px solid rgba(0,255,135,0.4)', borderRadius: 16, padding: 20, textAlign: 'center' }}>
            <TbAward style={{ color: '#FFB347', fontSize: 44, margin: '0 auto 8px', display: 'block' }} />
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--accent-green)', marginBottom: 6 }}>Workout Selesai!</div>
            <div style={{ fontSize: 13, color: '#555', marginBottom: 14 }}>Kerja bagus! 360 kalori terbakar hari ini.</div>
            <button className="app-btn app-btn-primary" onClick={() => navigate('home')}>Kembali ke Home</button>
          </div>
        )}
      </div>
    </div>
  )
}
