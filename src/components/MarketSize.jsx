import { TbChartPie } from 'react-icons/tb'
import { RiArrowRightUpLine } from 'react-icons/ri'
import './MarketSize.css'

const months = [
  { month: 'Jan', users: 100, rev: 13 },
  { month: 'Feb', users: 114, rev: 14.8 },
  { month: 'Mar', users: 131, rev: 17 },
  { month: 'Apr', users: 150, rev: 19.5 },
  { month: 'Mei', users: 172, rev: 22.4 },
  { month: 'Jun', users: 197, rev: 25.6 },
  { month: 'Jul', users: 226, rev: 29.4 },
  { month: 'Agu', users: 259, rev: 33.7 },
  { month: 'Sep', users: 297, rev: 38.6 },
  { month: 'Okt', users: 341, rev: 44.3 },
  { month: 'Nov', users: 392, rev: 51 },
  { month: 'Des', users: 450, rev: 58.5 },
]

const maxUsers = Math.max(...months.map(m => m.users))

const markets = [
  {
    label: 'TAM',
    val: 'Rp30T',
    desc: 'Total pasar fitness digital Indonesia per tahun',
    size: 100,
    color: '#1a3d2b',
    border: '#00ff8720',
  },
  {
    label: 'SAM',
    val: 'Rp8T',
    desc: 'Pasar urban fitness di kota-kota besar Indonesia',
    size: 70,
    color: '#0d2e1e',
    border: '#00ff8740',
  },
  {
    label: 'SOM',
    val: 'Rp250Jt',
    desc: 'Target realistis dalam 2 tahun pertama operasional',
    size: 40,
    color: '#00ff8715',
    border: '#00ff8780',
  },
]

export default function MarketSize() {
  return (
    <section className="market section" id="market">
      <div className="container">
        <div className="market__header">
          <div className="section-tag">
            <TbChartPie />
            Ukuran Pasar
          </div>
          <h2 className="section-title">
            Pasar yang <span>Sangat Besar</span>
          </h2>
          <p className="section-subtitle">
            Industri fitness digital Indonesia tumbuh 22.1% per tahun. RogoRise hadir di waktu yang tepat.
          </p>
        </div>

        <div className="market__layout">
          {/* TAM SAM SOM */}
          <div className="market__circles">
            <div className="market__circles-label">TAM / SAM / SOM</div>
            <div className="market__circle-wrap">
              {markets.map((m, i) => (
                <div
                  key={m.label}
                  className="market__circle"
                  style={{
                    width: `${m.size}%`,
                    height: `${m.size}%`,
                    background: m.color,
                    border: `2px solid ${m.border}`,
                  }}
                >
                  <div className="market__circle-inner">
                    <div className="market__circle-label">{m.label}</div>
                    <div className="market__circle-val">{m.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="market__circle-legends">
              {markets.map((m) => (
                <div key={m.label} className="market__legend">
                  <div className="market__legend-dot" style={{ background: m.border }} />
                  <div>
                    <strong>{m.label}:</strong> {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Chart */}
          <div className="market__chart">
            <div className="market__chart-header">
              <h3>Proyeksi Pertumbuhan Tahun 1</h3>
              <div className="market__chart-meta">
                <RiArrowRightUpLine />
                <span>+15% MoM | 450 user di Desember</span>
              </div>
            </div>

            <div className="market__bars">
              {months.map((m, i) => (
                <div key={i} className="market__bar-col">
                  <div className="market__bar-wrap">
                    <div
                      className="market__bar-fill"
                      style={{
                        height: `${(m.users / maxUsers) * 100}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                      title={`${m.users} pengguna`}
                    />
                  </div>
                  <div className="market__bar-month">{m.month}</div>
                </div>
              ))}
            </div>

            <div className="market__summary">
              <div className="market__summary-item">
                <div className="market__summary-val">450</div>
                <div className="market__summary-label">User Akhir Tahun</div>
              </div>
              <div className="market__summary-item">
                <div className="market__summary-val">Rp367Jt</div>
                <div className="market__summary-label">Total Pendapatan Tahun 1</div>
              </div>
              <div className="market__summary-item">
                <div className="market__summary-val">Bln 8</div>
                <div className="market__summary-label">Break-even Point</div>
              </div>
            </div>
          </div>
        </div>

        {/* CAGR banner */}
        <div className="market__cagr">
          <div className="market__cagr-num">22.1%</div>
          <div>
            <div className="market__cagr-title">CAGR 2025–2031</div>
            <div className="market__cagr-sub">Tingkat pertumbuhan tahunan pasar fitness digital Indonesia (Sumber: Mobility Foresights 2025)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
