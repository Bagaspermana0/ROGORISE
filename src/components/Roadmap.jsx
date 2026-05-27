import { RiMapLine, RiCheckDoubleLine } from 'react-icons/ri'
import { BsCircleFill, BsCircle } from 'react-icons/bs'
import { TbCoin, TbUsers, TbCheck } from 'react-icons/tb'
import './Roadmap.css'

const roadmap = [
  {
    quarter: 'Q1 — Bulan 1–3',
    phase: 'Foundation',
    status: 'done',
    title: 'Prototype & Validasi Awal',
    goal: 'Selesaikan prototype & validasi pengguna pertama',
    items: ['Finalisasi Figma prototype', 'User interview (14 responden)', 'Validasi problem-solution fit', 'Setup tech stack Flutter + Laravel'],
    budget: 'Rp5 Juta',
    team: 'UI/UX Designer',
    resources: 'Laptop, Figma',
  },
  {
    quarter: 'Q2 — Bulan 4–6',
    phase: 'Build',
    status: 'current',
    title: 'Pengembangan & Alpha Testing',
    goal: 'Bangun MVP dan uji ke pengguna awal',
    items: ['Develop MVP mobile app (Flutter)', 'Setup backend Laravel + MySQL', 'Integrasi AI coach dasar', 'Alpha testing (50 users)'],
    budget: 'Rp8 Juta',
    team: 'Developer',
    resources: 'Cloud Server, API',
  },
  {
    quarter: 'Q3 — Bulan 7–9',
    phase: 'Grow',
    status: 'upcoming',
    title: 'Fitur Lengkap & Branding',
    goal: 'Tambah fitur unggulan dan bangun brand awareness',
    items: ['Implementasi Smart Food Scanner', 'AI Future Body Preview', 'Strategi konten Instagram & TikTok', 'Kolaborasi influencer fitness'],
    budget: 'Rp10 Juta',
    team: 'Marketer + Developer',
    resources: 'Figma Lisensi, Ads Budget',
  },
  {
    quarter: 'Q4 — Bulan 10–12',
    phase: 'Launch',
    status: 'upcoming',
    title: 'Beta Launch & Monetisasi',
    goal: 'Rilis ke Play Store & App Store, mulai revenue',
    items: ['Beta launch di Play Store & App Store', 'Aktivasi model subscription', 'Target 450 pengguna aktif', 'Mulai kemitraan gym lokal'],
    budget: 'Rp15 Juta',
    team: 'Full Team + Marketing',
    resources: 'Hosting, App Store fee',
  },
]

const statusConfig = {
  done: { label: 'Selesai', color: 'var(--accent-primary)' },
  current: { label: 'Dalam Proses', color: '#FFB347' },
  upcoming: { label: 'Akan Datang', color: 'var(--text-muted)' },
}

export default function Roadmap() {
  return (
    <section className="roadmap section" id="roadmap">
      <div className="container">
        <div className="roadmap__header">
          <div className="section-tag">
            <RiMapLine />
            Roadmap
          </div>
          <h2 className="section-title">
            Rencana <span>12 Bulan</span> ke Depan
          </h2>
          <p className="section-subtitle">
            Dari prototype ke launch — timeline realistis dengan budget total Rp38 juta untuk tahun pertama.
          </p>
        </div>

        <div className="roadmap__timeline">
          {roadmap.map((item, i) => {
            const sc = statusConfig[item.status]
            return (
              <div key={i} className="roadmap__item">
                {/* Connector line */}
                {i < roadmap.length - 1 && (
                  <div className="roadmap__line">
                    <div
                      className="roadmap__line-fill"
                      style={{
                        width: item.status === 'done' ? '100%' : item.status === 'current' ? '40%' : '0%'
                      }}
                    />
                  </div>
                )}

                {/* Dot */}
                <div
                  className="roadmap__dot"
                  style={{ borderColor: sc.color, color: sc.color }}
                >
                  {item.status === 'done'
                    ? <RiCheckDoubleLine />
                    : item.status === 'current'
                    ? <BsCircleFill style={{ fontSize: 8 }} />
                    : <BsCircle style={{ fontSize: 8 }} />
                  }
                </div>

                {/* Card */}
                <div className={`roadmap__card card ${item.status === 'current' ? 'roadmap__card--current' : ''}`}>
                  <div className="roadmap__card-top">
                    <div>
                      <div className="roadmap__quarter">{item.quarter}</div>
                      <div
                        className="roadmap__status"
                        style={{ color: sc.color }}
                      >
                        ● {sc.label}
                      </div>
                    </div>
                    <span className="roadmap__phase badge">{item.phase}</span>
                  </div>

                  <h3 className="roadmap__title">{item.title}</h3>
                  <p className="roadmap__goal">{item.goal}</p>

                  <ul className="roadmap__items">
                    {item.items.map((it, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6 }}>
                        <span className="roadmap__check" style={{ display: 'inline-flex', alignItems: 'center', marginTop: 3 }}>
                          <TbCheck style={{ fontSize: 10, strokeWidth: 3 }} />
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="roadmap__footer">
                    <div className="roadmap__meta" style={{ display: 'flex', gap: 12 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11 }}>
                        <TbCoin style={{ color: '#FFD700', fontSize: 13 }} /> {item.budget}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11 }}>
                        <TbUsers style={{ color: '#4ECDC4', fontSize: 13 }} /> {item.team}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Total budget */}
        <div className="roadmap__total">
          <div>
            <div className="roadmap__total-label">Total Kebutuhan Dana</div>
            <div className="roadmap__total-val">Rp38 Juta</div>
          </div>
          <div className="roadmap__total-breakdown">
            {roadmap.map(r => (
              <div key={r.quarter} className="roadmap__total-item">
                <span className="roadmap__total-q">{r.phase}</span>
                <span className="roadmap__total-b">{r.budget}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
