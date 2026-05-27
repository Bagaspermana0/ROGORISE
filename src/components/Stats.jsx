import { useRef, useEffect, useState } from 'react'
import { TbChartBar } from 'react-icons/tb'
import './Stats.css'

const statsData = [
  { year: '2007', pct: 10.5, label: '10.5%' },
  { year: '2013', pct: 14.8, label: '14.8%' },
  { year: '2018', pct: 21.8, label: '21.8%' },
]

const metrics = [
  { value: 'Rp30T', label: 'Total Pasar Fitness Digital', sub: 'TAM Indonesia/tahun' },
  { value: '22.1%', label: 'Tingkat Pertumbuhan', sub: 'CAGR 2025–2031' },
  { value: '18-35', label: 'Target Usia', sub: 'Mahasiswa & Pekerja Muda' },
  { value: 'Rp15K', label: 'Mulai Dari', sub: 'Per bulan, terjangkau' },
]

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const end = parseFloat(target)
        const duration = 1500
        const step = end / (duration / 16)
        let cur = 0
        const timer = setInterval(() => {
          cur = Math.min(cur + step, end)
          setCount(cur.toFixed(1))
          if (cur >= end) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__obesity">
          <div className="stats__obesity-header">
            <div className="section-tag">
              <TbChartBar />
              Data Riskesdas 2018
            </div>
            <h2 className="section-title">
              Obesitas di Indonesia <span>Terus Meningkat</span>
            </h2>
            <p className="section-subtitle">
              Prevalensi obesitas dewasa hampir dua kali lipat dalam 11 tahun. Ini bukan hanya angka — ini krisis kesehatan yang nyata.
            </p>
          </div>

          <div className="stats__bars">
            {statsData.map((s, i) => (
              <div key={i} className="stats__bar-item">
                <div className="stats__bar-wrap">
                  <div
                    className="stats__bar-fill"
                    style={{ height: `${(s.pct / 25) * 100}%`, animationDelay: `${i * 0.2}s` }}
                  />
                </div>
                <div className="stats__bar-pct">{s.label}</div>
                <div className="stats__bar-year">{s.year}</div>
              </div>
            ))}
            <div className="stats__trend-arrow">↑ +107% dalam 11 tahun</div>
          </div>
        </div>

        <div className="gradient-line" style={{ margin: '60px 0' }} />

        <div className="stats__metrics">
          {metrics.map((m, i) => (
            <div key={i} className="stats__metric card">
              <div className="stats__metric-val">{m.value}</div>
              <div className="stats__metric-label">{m.label}</div>
              <div className="stats__metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
