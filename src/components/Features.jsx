import { useState } from 'react'
import { RiFlashlightFill, RiScanLine, RiLineChartLine, RiUserHeartLine, RiRobotLine } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { TbFlame } from 'react-icons/tb'
import './Features.css'

const features = [
  {
    id: 'ai-coach',
    icon: <RiRobotLine />,
    label: 'AI Personal Coach',
    title: 'Program yang Benar-Benar Personal',
    desc: 'Algoritma AI kami menganalisis data tubuh, aktivitas, tujuan, dan preferensi makanmu untuk membuat program nutrisi dan workout yang benar-benar cocok — bukan template generik.',
    highlights: ['Analisis BMI & TDEE otomatis', 'Program workout adaptif', 'Rekomendasi nutrisi harian', 'Penyesuaian berdasarkan progres'],
    preview: {
      title: 'AI Coach Analysis',
      items: [
        { label: 'Kalori Target', val: '1,840 kkal', bar: 75 },
        { label: 'Protein', val: '142g', bar: 60 },
        { label: 'Karbohidrat', val: '230g', bar: 85 },
        { label: 'Lemak', val: '58g', bar: 45 },
      ]
    }
  },
  {
    id: 'future-body',
    icon: <BsStars />,
    label: 'AI Future Body Preview',
    title: 'Lihat Tubuhmu di Masa Depan',
    desc: 'Fitur motivasional unik yang memperlihatkan prediksi bentuk tubuhmu berdasarkan progress saat ini. Jadikan visi itu nyata dan tetap termotivasi setiap harinya.',
    highlights: ['Prediksi berat 3/6/12 bulan', 'Visualisasi perubahan tubuh', 'Analisis komposisi tubuh', 'Goal tracker visual'],
    preview: {
      title: 'Body Preview',
      timeline: [
        { label: 'Sekarang', val: '82 kg', color: '#555' },
        { label: '3 Bulan', val: '78 kg', color: '#00c96b' },
        { label: '6 Bulan', val: '74 kg', color: '#00ff87' },
      ]
    }
  },
  {
    id: 'food-scanner',
    icon: <RiScanLine />,
    label: 'Smart Food Scanner',
    title: 'Scan Makanan, Langsung Tahu Gizinya',
    desc: 'Cukup foto atau scan makananmu dan RogoRise langsung mendeteksi kandungan nutrisi — termasuk makanan lokal seperti nasi padang, gado-gado, tempe goreng, dan lainnya.',
    highlights: ['Database 10K+ makanan lokal', 'Scan via kamera real-time', 'Hitung kalori otomatis', 'Catat ke diary nutrisi'],
    preview: {
      title: 'Food Scanner',
      foods: [
        { name: 'Nasi Putih', cal: '130 kkal', protein: '2.7g' },
        { name: 'Tempe Goreng', cal: '200 kkal', protein: '18g' },
        { name: 'Sayur Bayam', cal: '23 kkal', protein: '2.2g' },
      ]
    }
  },
  {
    id: 'tracker',
    icon: <RiLineChartLine />,
    label: 'Progress Tracker',
    title: 'Pantau Setiap Progres Harianmu',
    desc: 'Dashboard visual yang jelas menampilkan seluruh perkembanganmu — berat badan, workout selesai, kalori, streak, dan tren jangka panjang yang membuatmu tetap on track.',
    highlights: ['Dashboard interaktif', 'Grafik tren mingguan/bulanan', 'Streak & achievement', 'Export laporan progres'],
    preview: null
  },
  {
    id: 'plan',
    icon: <RiUserHeartLine />,
    label: 'Personalized Plan',
    title: 'Rencana Hidup Sehat yang Nyata',
    desc: 'Bukan hanya latihan. RogoRise merancang rencana holistik yang mencakup jadwal workout, meal plan, waktu istirahat, dan tips gaya hidup sehat yang bisa langsung dijalankan.',
    highlights: ['Jadwal workout mingguan', 'Meal plan harian', 'Pengingat otomatis', 'Tips & edukasi kesehatan'],
    preview: null
  },
]

export default function Features() {
  const [active, setActive] = useState(0)
  const f = features[active]

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features__header">
          <div className="section-tag">

            Fitur Unggulan
          </div>
          <h2 className="section-title">
            Semua yang Kamu Butuhkan <span>dalam Satu App</span>
          </h2>
          <p className="section-subtitle">
            Lima pilar utama yang membuat RogoRise berbeda dari aplikasi fitness lainnya — dirancang khusus untuk gaya hidup orang Indonesia.
          </p>
        </div>

        <div className="features__layout">
          {/* Tabs */}
          <div className="features__tabs">
            {features.map((feat, i) => (
              <button
                key={feat.id}
                className={`features__tab ${active === i ? 'features__tab--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="features__tab-icon">{feat.icon}</span>
                <span className="features__tab-label">{feat.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="features__content">
            <div className="features__content-icon">{f.icon}</div>
            <h3 className="features__content-title">{f.title}</h3>
            <p className="features__content-desc">{f.desc}</p>

            <ul className="features__highlights">
              {f.highlights.map((h, i) => (
                <li key={i}>
                  <span className="features__highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Preview card */}
          <div className="features__preview">
            {f.id === 'ai-coach' && (
              <div className="preview-card">
                <div className="preview-card__header">
                  <RiRobotLine /> AI Analysis
                </div>
                {f.preview.items.map((item, i) => (
                  <div key={i} className="preview-nutrient">
                    <div className="preview-nutrient__top">
                      <span>{item.label}</span>
                      <span className="preview-nutrient__val">{item.val}</span>
                    </div>
                    <div className="preview-bar">
                      <div className="preview-bar__fill" style={{ width: `${item.bar}%`, animationDelay: `${i * 0.1}s` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {f.id === 'future-body' && (
              <div className="preview-card">
                <div className="preview-card__header">
                  <BsStars /> Body Timeline
                </div>
                <div className="preview-timeline">
                  {f.preview.timeline.map((t, i) => (
                    <div key={i} className="preview-timeline__item">
                      <div className="preview-timeline__dot" style={{ background: t.color }} />
                      <div>
                        <div className="preview-timeline__label">{t.label}</div>
                        <div className="preview-timeline__val" style={{ color: t.color }}>{t.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="preview-goal-bar">
                  <div className="preview-goal-label">Progress ke Target (74 kg)</div>
                  <div className="preview-bar" style={{ marginTop: 8 }}>
                    <div className="preview-bar__fill" style={{ width: '30%' }} />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>30% tercapai</div>
                </div>
              </div>
            )}
            {f.id === 'food-scanner' && (
              <div className="preview-card">
                <div className="preview-card__header">
                  <RiScanLine /> Scan Result
                </div>
                <div className="preview-scan-frame">
                  <RiScanLine className="preview-scan-icon" />
                  <span>Scanning...</span>
                </div>
                {f.preview.foods.map((food, i) => (
                  <div key={i} className="preview-food">
                    <div>
                      <div className="preview-food__name">{food.name}</div>
                      <div className="preview-food__macro">Protein: {food.protein}</div>
                    </div>
                    <div className="preview-food__cal">{food.cal}</div>
                  </div>
                ))}
              </div>
            )}
            {(f.id === 'tracker' || f.id === 'plan') && (
              <div className="preview-card preview-card--placeholder">
                <div className="preview-card__header">
                  {f.icon} {f.label}
                </div>
                <div className="preview-streak">
                  <div className="preview-streak__fire">
                    <TbFlame style={{ color: '#FFB347', fontSize: 32, filter: 'drop-shadow(0 0 5px rgba(255,179,71,0.5))' }} />
                  </div>
                  <div className="preview-streak__num">14</div>
                  <div className="preview-streak__label">Hari Streak</div>
                </div>
                <div className="preview-weeks">
                  {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map((d, i) => (
                    <div key={d} className={`preview-week-day ${i < 5 ? 'preview-week-day--done' : ''}`}>
                      <div className="preview-week-dot" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
