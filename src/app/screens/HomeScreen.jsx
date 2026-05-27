import { RiFlashlightFill, RiFireLine, RiHeartPulseLine, RiRunLine, RiScanLine, RiArrowRightLine, RiNotificationLine, RiCheckboxBlankCircleLine, RiCheckLine, RiCheckboxCircleFill, RiMessage3Line } from 'react-icons/ri'
import { BsStars, BsLightningChargeFill } from 'react-icons/bs'
import { TbFlame, TbDroplet, TbBarbell, TbMoodSmile, TbTarget } from 'react-icons/tb'
const todayMeals = [
  { name: 'Sarapan', items: 'Nasi + Telur Goreng', cal: 420, done: true },
  { name: 'Makan Siang', items: 'Nasi Ayam Geprek', cal: 650, done: true },
  { name: 'Camilan', items: 'Belum dicatat', cal: 0, done: false },
  { name: 'Makan Malam', items: 'Belum dicatat', cal: 0, done: false },
]

const workoutToday = {
  name: 'Upper Body Strength',
  exercises: 6,
  duration: '45 mnt',
  done: false,
}

export default function HomeScreen({ navigate, user }) {
  const name = user?.name?.split(' ')[0] || 'User'
  const calorieTarget = 2100
  const calorieConsumed = 1070
  const caloriePercent = Math.round((calorieConsumed / calorieTarget) * 100)

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Selamat Pagi' : hour < 17 ? 'Selamat Siang' : 'Selamat Malam'

  return (
    <div className="screen">
      <div className="screen-body" style={{ paddingTop: 14 }}>

        {/* Greeting */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <p style={{ fontSize: 13, color: '#555', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
              {greeting} <TbMoodSmile style={{ color: 'var(--accent-green)', display: 'inline' }} />
            </p>
            <h1 style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Halo, <span style={{ color: 'var(--accent-green)' }}>{name}!</span>
            </h1>
          </div>
          <div style={{ position: 'relative' }}>
            <button onClick={() => {}} style={{ background: '#161616', border: '1px solid #222', borderRadius: 12, padding: 10, color: '#888', fontSize: 20, cursor: 'pointer', display: 'flex' }}>
              <RiNotificationLine />
            </button>
            <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, background: 'var(--accent-green)', borderRadius: '50%', border: '2px solid #0c0c0c' }} />
          </div>
        </div>

        {/* AI Smart Suggestion */}
        <div className="hover-bounce bounce-in stagger-item stagger-1" style={{ background: 'linear-gradient(135deg, rgba(255, 179, 71, 0.1), rgba(255, 179, 71, 0.02))', border: '1px solid rgba(255, 179, 71, 0.3)', borderRadius: 18, padding: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255, 179, 71, 0.15)', color: '#FFB347', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>
            <BsStars className="pulse" />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#FFB347', marginBottom: 2 }}>Saran AI Hari Ini</div>
            <div style={{ fontSize: 12, color: 'white', lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: 4 }}>
              Sepertinya kamu masih kurang minum 1 Liter air hari ini. Yuk cukupi hidrasimu! <TbDroplet style={{ color: '#4ECDC4', fontSize: 13, flexShrink: 0 }} />
            </div>
          </div>
        </div>
 
        {/* Progres Hari Ini */}
        <div className="stagger-item stagger-2" style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>Progres Hari Ini</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {/* Calorie ring */}
            <div className="hover-bounce" style={{ background: '#161616', border: '1px solid #222', borderRadius: 18, padding: '16px', flex: 1.2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ position: 'relative', width: 90, height: 90 }}>
                <svg width="90" height="90" viewBox="0 0 90 90">
                  <circle cx="45" cy="45" r="38" fill="none" stroke="#1a1a1a" strokeWidth="8" />
                  <circle cx="45" cy="45" r="38" fill="none" stroke="var(--accent-green)" strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 38}`}
                    strokeDashoffset={`${2 * Math.PI * 38 * (1 - caloriePercent/100)}`}
                    strokeLinecap="round"
                    transform="rotate(-90 45 45)"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,135,0.5))', transition: 'stroke-dashoffset 1s ease' }}
                  />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif', color: 'white' }}>{caloriePercent}%</div>
                  <div style={{ fontSize: 9, color: '#555' }}>Kalori</div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--accent-green)' }}>{calorieConsumed.toLocaleString()}</div>
                <div style={{ fontSize: 10, color: '#555' }}>dari {calorieTarget.toLocaleString()} kkal</div>
              </div>
            </div>
 
            {/* Stats */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="hover-bounce" onClick={() => navigate('workout')} style={{ background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '12px 14px', flex: 1, cursor: 'pointer' }}>
                <div style={{ fontSize: 11, color: '#555', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <TbTarget style={{ color: '#FFB347', fontSize: 14 }} /> Target
                </div>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#FFB347', fontFamily: 'Space Grotesk, sans-serif' }}>Turun BB</div>
              </div>
              <div className="hover-bounce" style={{ background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '12px 14px', flex: 1 }}>
                <div style={{ fontSize: 11, color: '#555', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <TbDroplet style={{ color: '#4ECDC4', fontSize: 14 }} /> Air
                </div>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#4ECDC4', fontFamily: 'Space Grotesk, sans-serif' }}>1.6 L</div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Today's Workout */}
        <div className="stagger-item stagger-3" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Workout Hari Ini</span>
            <span onClick={() => navigate('workout')} style={{ fontSize: 12, color: 'var(--accent-green)', cursor: 'pointer', fontWeight: 600 }}>Lihat semua →</span>
          </div>
          <div
            className="hover-bounce"
            onClick={() => navigate('workout-detail')}
            style={{ background: 'linear-gradient(135deg, #1a1010, #100a0a)', border: '1px solid #2a1515', borderRadius: 16, padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}
          >
            <div style={{ width: 48, height: 48, background: '#FF6B6B22', border: '1px solid #FF6B6B44', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: '#FF6B6B' }}>
              <TbBarbell style={{ fontSize: 26 }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>{workoutToday.name}</div>
              <div style={{ fontSize: 12, color: '#555' }}>{workoutToday.exercises} latihan · {workoutToday.duration}</div>
            </div>
            <div style={{ background: 'var(--accent-green)', color: '#000', fontSize: 11, fontWeight: 700, padding: '6px 12px', borderRadius: 100, flexShrink: 0 }}>Mulai</div>
          </div>
        </div>
 
        {/* Food Log Today */}
        <div className="stagger-item stagger-4" style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Makanan Hari Ini</span>
            <span onClick={() => navigate('nutrition')} style={{ fontSize: 12, color: 'var(--accent-green)', cursor: 'pointer', fontWeight: 600 }}>Tambah +</span>
          </div>
          <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, overflow: 'hidden' }}>
            {todayMeals.map((meal, i) => (
              <div
                key={i}
                className="hover-bounce"
                onClick={() => navigate('nutrition')}
                style={{
                  display: 'flex', alignItems: 'center', padding: '12px 16px', cursor: 'pointer',
                  borderBottom: i < todayMeals.length - 1 ? '1px solid #1a1a1a' : 'none'
                }}
              >
                <div style={{ width: 32, height: 32, borderRadius: 8, background: meal.done ? 'rgba(0,255,135,0.1)' : '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                  {meal.done ? <RiCheckboxCircleFill style={{ color: 'var(--accent-green)', fontSize: 18 }} /> : <RiCheckboxBlankCircleLine style={{ color: '#444', fontSize: 18 }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: meal.done ? 'white' : '#444' }}>{meal.name}</div>
                  <div style={{ fontSize: 11, color: '#555' }}>{meal.items}</div>
                </div>
                <div style={{ fontSize: 12, color: meal.done ? 'var(--accent-green)' : '#333', fontWeight: 600 }}>
                  {meal.done ? `${meal.cal} kkal` : '+ Catat'}
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Quick Actions */}
        <div className="stagger-item stagger-5" style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>Aksi Cepat</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { label: 'Tanya Ahli AI', icon: <RiMessage3Line />, color: '#FFB347', screen: 'ai-chat', desc: 'Konsultasi program latihan & pola makan dengan AI Coach' },
              { label: 'Scan Makanan', icon: <RiScanLine />, color: '#4ECDC4', screen: 'scanner', desc: 'Scan foto makanan untuk hitung nutrisi & kalori instan' },
              { label: 'AI Prediksi', icon: <BsStars />, color: 'var(--accent-green)', screen: 'future-body', desc: 'Lihat simulasi visual bentuk tubuh idealmu ke depan' },
            ].map((action, i) => (
              <div
                key={i}
                className="hover-bounce"
                onClick={() => navigate(action.screen)}
                style={{
                  background: '#161616', border: '1px solid #222', borderRadius: 16,
                  padding: '12px 14px', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: `${action.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: action.color, fontSize: 18, flexShrink: 0
                  }}>
                    {action.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{action.label}</div>
                    <div style={{ fontSize: 10, color: '#555', marginTop: 1 }}>{action.desc}</div>
                  </div>
                </div>
                <div style={{ fontSize: 14, color: '#444', marginRight: 4 }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
