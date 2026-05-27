import { useState } from 'react'
import { RiPlayCircleFill, RiCheckLine } from 'react-icons/ri'
import { TbBarbell, TbRun, TbHeart, TbTarget, TbFlame, TbClock } from 'react-icons/tb'

const plans = [
  {
    day: 'Senin',
    name: 'Upper Body Strength',
    type: 'Kekuatan',
    duration: '45 mnt',
    calories: 320,
    exercises: 6,
    icon: <TbBarbell />,
    done: true,
    color: '#FF6B6B',
  },
  {
    day: 'Selasa',
    name: 'Cardio HIIT',
    type: 'Kardio',
    duration: '30 mnt',
    calories: 380,
    exercises: 8,
    icon: <TbRun />,
    done: true,
    color: '#4ECDC4',
  },
  {
    day: 'Rabu',
    name: 'Istirahat Aktif',
    type: 'Recovery',
    duration: '20 mnt',
    calories: 120,
    exercises: 4,
    icon: <TbHeart />,
    done: false,
    skipped: true, // Ditandai terlewat karena hari ini Kamis
    color: '#96CEB4',
    isToday: false,
  },
  {
    day: 'Kamis',
    name: 'Lower Body Power',
    type: 'Kekuatan',
    duration: '50 mnt',
    calories: 360,
    exercises: 7,
    icon: <TbBarbell style={{ transform: 'rotate(90deg)' }} />,
    done: false,
    color: '#45B7D1',
    isToday: true,
  },
  {
    day: "Jum'at",
    name: 'Core & Flexibility',
    type: 'Recovery',
    duration: '35 mnt',
    calories: 220,
    exercises: 5,
    icon: <TbTarget />,
    done: false,
    color: '#FFB347',
  },
  {
    day: 'Sabtu',
    name: 'Full Body Circuit',
    type: 'Kardio',
    duration: '60 mnt',
    calories: 450,
    exercises: 10,
    icon: <TbFlame />,
    done: false,
    color: '#FF6B6B',
  },
]

export default function WorkoutScreen({ navigate }) {
  // Mencari hari hari ini
  const todayDay = plans.find(p => p.isToday)?.day || 'Kamis'
  const [selectedDay, setSelectedDay] = useState(todayDay)

  const activePlan = plans.find(p => p.day === selectedDay)

  // Menghitung statistik mingguan secara dinamis dan spesifik
  const completedPlans = plans.filter(p => p.done)
  const totalCompleted = completedPlans.length
  const totalMinutes = completedPlans.reduce((acc, p) => acc + parseInt(p.duration), 0)
  const totalCalories = completedPlans.reduce((acc, p) => acc + p.calories, 0)
  const completionPercent = Math.round((totalCompleted / plans.length) * 100)

  return (
    <div className="screen">
      {/* Header */}
      <div style={{ padding: '16px 20px 12px', flexShrink: 0 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 2 }}>Program Workout</h1>
        <p style={{ fontSize: 13, color: '#555', marginBottom: 14 }}>Jadwal Latihan Mingguan terpersonalisasi AI</p>
      </div>

      {/* Screen Body */}
      <div className="screen-body" style={{ paddingTop: 0 }}>
        <div>
          {/* Day Selector Bar (Senin - Sabtu) */}
          <div className="stagger-item stagger-1 hide-scrollbar" style={{ display: 'flex', justifyContent: 'space-between', gap: 6, marginBottom: 18, overflowX: 'auto', paddingBottom: 2 }}>
            {plans.map(plan => {
              const isSelected = selectedDay === plan.day;
              const isToday = plan.isToday;
              return (
                <button
                  key={plan.day}
                  onClick={() => setSelectedDay(plan.day)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px 4px',
                    borderRadius: 12,
                    border: '1px solid',
                    borderColor: isSelected 
                      ? 'var(--accent-green)' 
                      : isToday 
                        ? 'rgba(0, 255, 135, 0.3)' 
                        : '#222',
                    background: isSelected 
                      ? 'rgba(0, 255, 135, 0.1)' 
                      : '#161616',
                    color: isSelected 
                      ? 'var(--accent-green)' 
                      : '#888',
                    cursor: 'pointer',
                    minWidth: 46,
                    transition: 'all 0.2s'
                  }}
                >
                  <span style={{ fontSize: 9, color: isSelected ? 'var(--accent-green)' : '#555', textTransform: 'uppercase', marginBottom: 6, fontWeight: 700 }}>
                    {plan.day.slice(0, 3)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {plan.done ? (
                      <RiCheckLine style={{ color: 'var(--accent-green)', fontSize: 14, fontWeight: 'bold' }} />
                    ) : plan.skipped ? (
                      <span style={{ color: '#FF6B6B', fontSize: 10 }}>●</span>
                    ) : (
                      <span style={{ color: isSelected ? 'var(--accent-green)' : '#333', fontSize: 10 }}>○</span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Selected Workout Detail Card */}
          {activePlan && (
            <div key={selectedDay} className="slide-up stagger-item stagger-2" style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: activePlan.isToday ? 'var(--accent-green)' : '#888', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="pulse" style={{ width: 6, height: 6, background: activePlan.isToday ? 'var(--accent-green)' : '#555', borderRadius: '50%' }} />
                {activePlan.isToday ? `Target Hari Ini (${activePlan.day})` : `Rencana Hari ${activePlan.day.toUpperCase()}`}
              </div>
              
              <div
                className="hover-bounce"
                onClick={() => navigate('workout-detail')}
                style={{
                  background: activePlan.isToday 
                    ? 'linear-gradient(135deg, #0d2e1e, #05140d)' 
                    : 'linear-gradient(135deg, #161616, #0e0e0e)',
                  border: activePlan.isToday 
                    ? '1px solid rgba(0, 255, 135, 0.35)' 
                    : '1px solid #222',
                  borderRadius: 20,
                  padding: '20px',
                  cursor: 'pointer',
                  boxShadow: activePlan.isToday ? '0 8px 32px rgba(0, 255, 135, 0.05)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', color: 'white', marginBottom: 4 }}>
                      {activePlan.name}
                    </h3>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, background: `${activePlan.color}20`, color: activePlan.color, padding: '3px 10px', borderRadius: 100, fontWeight: 700 }}>
                        Fokus: {activePlan.type}
                      </span>
                      {activePlan.done && (
                        <span style={{ fontSize: 10, background: 'rgba(0, 255, 135, 0.15)', color: 'var(--accent-green)', padding: '3px 10px', borderRadius: 100, fontWeight: 700 }}>
                          SELESAI
                        </span>
                      )}
                      {activePlan.skipped && (
                        <span style={{ fontSize: 10, background: 'rgba(255, 107, 107, 0.15)', color: '#FF6B6B', padding: '3px 10px', borderRadius: 100, fontWeight: 700 }}>
                          TERLEWAT
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: activePlan.color, color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                    {activePlan.icon}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, borderTop: '1px solid #222', borderColor: activePlan.isToday ? 'rgba(0, 255, 135, 0.15)' : '#222', paddingTop: 14, marginBottom: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', marginBottom: 2 }}>Durasi</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <TbClock style={{ color: activePlan.color }} /> {activePlan.duration}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', marginBottom: 2 }}>Kalori</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <TbFlame style={{ color: '#FFB347' }} /> {activePlan.calories} kkal
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', marginBottom: 2 }}>Latihan</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: 'white', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <TbBarbell style={{ color: '#45B7D1' }} /> {activePlan.exercises} Set
                    </div>
                  </div>
                </div>

                <button className="app-btn app-btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px', background: activePlan.done ? '#222' : 'var(--accent-green)', color: activePlan.done ? 'white' : '#000' }}>
                  {activePlan.done ? (
                    <>Lihat Detail Selesai</>
                  ) : activePlan.skipped ? (
                    <>Ulangi Workout Terlewat</>
                  ) : (
                    <><RiPlayCircleFill style={{ fontSize: 18 }} /> Mulai Latihan Sekarang</>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Quick status report box (Weekly Stats Dashboard) */}
          <div className="stagger-item stagger-3" style={{ background: '#161616', border: '1px solid #222', borderRadius: 18, padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#888' }}>Pencapaian Minggu Ini</span>
              <span style={{ fontSize: 12, color: 'var(--accent-green)', fontWeight: 800 }}>{totalCompleted}/{plans.length} SELESAI</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {/* Durasi Stat */}
              <div style={{ background: '#0c0c0c', border: '1px solid #1a1a1a', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ color: 'var(--accent-green)', fontSize: 20, display: 'flex' }}>
                  <TbClock />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>{totalMinutes} mnt</div>
                  <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Total Durasi</div>
                </div>
              </div>

              {/* Kalori Stat */}
              <div style={{ background: '#0c0c0c', border: '1px solid #1a1a1a', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ color: '#FFB347', fontSize: 20, display: 'flex' }}>
                  <TbFlame />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>{totalCalories} kkal</div>
                  <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Kalori Terbakar</div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 6, background: '#1a1a1a', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${completionPercent}%`, height: '100%', background: 'var(--accent-green)', borderRadius: 3, boxShadow: '0 0 8px rgba(0,255,135,0.4)', transition: 'width 0.4s ease' }} />
              </div>
              <span style={{ fontSize: 11, color: '#555', fontWeight: 700, minWidth: 28, textAlign: 'right' }}>{completionPercent}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
