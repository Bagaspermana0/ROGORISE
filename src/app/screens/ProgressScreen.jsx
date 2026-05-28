import { useState } from 'react'
import { RiAddLine, RiCheckLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { TbScale, TbTrendingDown, TbTrendingUp, TbTarget, TbFlame } from 'react-icons/tb'

const weightHistory = [82.3, 82.0, 81.5, 81.2, 80.9, 80.6, 80.4, 80.1, 79.8, 79.5, 79.2, 79.0]
const labels = ['17/4','19/4','21/4','23/4','25/4','27/4','29/4','01/5','03/5','05/5','07/5','09/5']

const weeklyWorkouts = [2, 3, 3, 4, 4, 4, 5]
const weekDays = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
const maxWorkout = 6

export default function ProgressScreen({ navigate }) {
  const [tab, setTab] = useState('Berat')
  const [activeDot, setActiveDot] = useState(null)
  const tabs = ['Berat', 'Kalori', 'Workout']

  const current = weightHistory[weightHistory.length - 1]
  const start = weightHistory[0]
  const change = (current - start).toFixed(1)
  const isLoss = change < 0

  const minW = Math.min(...weightHistory)
  const maxW = Math.max(...weightHistory)
  const chartH = 100
  const chartW = 250
  const startX = 40

  const getY = (w) => chartH - ((w - minW) / (maxW - minW + 0.5)) * (chartH - 10) - 5

  // SVG path with shifted X padding for Y axis labels
  const points = weightHistory.map((w, i) => ({
    x: startX + (i / (weightHistory.length - 1)) * chartW,
    y: getY(w)
  }))

  const pathD = points.reduce((d, p, i) =>
    i === 0 ? `M ${p.x} ${p.y}` : `${d} L ${p.x} ${p.y}`, '')

  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartH} L ${points[0].x} ${chartH} Z`

  const gridYValues = [
    { label: `${maxW.toFixed(1)} kg`, y: getY(maxW) },
    { label: `${((maxW + minW) / 2).toFixed(1)} kg`, y: getY((maxW + minW) / 2) },
    { label: `${minW.toFixed(1)} kg`, y: getY(minW) }
  ]

  return (
    <div className="screen">
      <div style={{ padding: '16px 20px 12px', flexShrink: 0 }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 2 }}>Progres</h1>
        <p style={{ fontSize: 13, color: '#555', marginBottom: 14 }}>Perjalanan 30 hari terakhir</p>

        {/* Key stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 14 }}>
          {[
            { label: 'Berat Skrg', val: `${current} kg`, color: 'white' },
            { label: 'Perubahan', val: `${change} kg`, color: isLoss ? 'var(--accent-green)' : '#FF6B6B' },
            { label: 'Target', val: '74 kg', color: '#4ECDC4' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '16px 10px', textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: s.color, fontFamily: 'Space Grotesk, sans-serif' }}>{s.val}</div>
              <div style={{ fontSize: 10, color: '#555', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', background: '#111', borderRadius: 12, padding: 4, gap: 4 }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: '8px', borderRadius: 9, border: 'none',
              background: tab === t ? '#222' : 'transparent',
              color: tab === t ? 'white' : '#444',
              fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div className="screen-body" style={{ paddingTop: 14 }}>

        {/* Chart */}
        <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 18, padding: '16px', marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ fontSize: 13, fontWeight: 700 }}>{tab === 'Berat' ? 'Berat Badan' : tab === 'Kalori' ? 'Kalori Harian' : 'Workout/Minggu'}</span>
              {tab === 'Berat' && <span style={{ fontSize: 11, color: '#555', marginLeft: 8, fontWeight: 500 }}>(April - Mei 2026)</span>}
            </div>
            <span style={{ fontSize: 12, color: 'var(--accent-green)', fontWeight: 600 }}>30 Hari</span>
          </div>

          {tab === 'Berat' && (
            <>
              <svg width="100%" height={chartH + 22} viewBox={`0 0 300 ${chartH + 22}`} style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,255,135,0.3)" />
                    <stop offset="100%" stopColor="rgba(0,255,135,0)" />
                  </linearGradient>
                </defs>

                {/* Gridlines & Y Axis Ticks */}
                {gridYValues.map((g, idx) => (
                  <g key={idx}>
                    <line
                      x1={startX}
                      y1={g.y}
                      x2={startX + chartW}
                      y2={g.y}
                      stroke="#222"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={startX - 8}
                      y={g.y + 3}
                      fontSize="8"
                      fill="#666"
                      textAnchor="end"
                      fontFamily="Space Grotesk, sans-serif"
                    >
                      {g.label}
                    </text>
                  </g>
                ))}

                {/* X Axis Baseline */}
                <line x1={startX} y1={chartH} x2={startX + chartW} y2={chartH} stroke="#222" strokeWidth="1" />

                <path d={areaD} fill="url(#lineGrad)" />
                <path d={pathD} fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px rgba(0,255,135,0.6))' }} />

                {/* Interactive Dots for ALL points */}
                {points.map((p, i) => {
                  const isActive = activeDot === i
                  return (
                    <g key={i} onClick={() => setActiveDot(activeDot === i ? null : i)} style={{ cursor: 'pointer' }}>
                      {/* Larger hit target for easier clicking */}
                      <circle cx={p.x} cy={p.y} r="12" fill="transparent" />
                      
                      {/* Visual dot */}
                      <circle 
                        cx={p.x} 
                        cy={p.y} 
                        r={isActive ? "5" : "3"} 
                        fill={isActive ? "#fff" : "var(--accent-green)"} 
                        stroke={isActive ? "var(--accent-green)" : "none"}
                        strokeWidth={isActive ? "1.5" : "0"}
                        style={{ transition: 'all 0.2s', filter: isActive ? 'drop-shadow(0 0 6px var(--accent-green))' : 'none' }}
                      />
                    </g>
                  )
                })}

                {/* X Axis Date Labels */}
                {points.map((p, i) => (
                  i % 3 === 0 && (
                    <text key={`lbl-${i}`} x={p.x} y={chartH + 16} fontSize="8" fill="#555" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">
                      {labels[i]}
                    </text>
                  )
                ))}

                {/* Glowing Tooltip */}
                {activeDot !== null && (() => {
                  const pt = points[activeDot];
                  const textVal = `${weightHistory[activeDot]} kg`;
                  const dateVal = labels[activeDot];
                  const tooltipText = `${textVal} (${dateVal})`;
                  const wWidth = 85;
                  const wHeight = 22;
                  let tx = pt.x - wWidth / 2;
                  
                  // Bound checks to ensure tooltip doesn't get clipped on left or right edges
                  if (tx < 35) tx = 35;
                  if (tx + wWidth > 295) tx = 295 - wWidth;
                  
                  return (
                    <g style={{ transition: 'all 0.2s' }}>
                      {/* Tooltip background card with glowing border */}
                      <rect
                        x={tx}
                        y={pt.y - 32}
                        width={wWidth}
                        height={wHeight}
                        rx="6"
                        fill="#1a1a1a"
                        stroke="var(--accent-green)"
                        strokeWidth="1.5"
                        style={{ filter: 'drop-shadow(0 4px 12px rgba(0,255,135,0.25))' }}
                      />
                      {/* Tooltip pointer triangle */}
                      <polygon
                        points={`${pt.x - 4},${pt.y - 10} ${pt.x + 4},${pt.y - 10} ${pt.x},${pt.y - 6}`}
                        fill="var(--accent-green)"
                      />
                      {/* Tooltip text */}
                      <text
                        x={tx + wWidth / 2}
                        y={pt.y - 18}
                        fill="#fff"
                        fontSize="9"
                        fontWeight="800"
                        textAnchor="middle"
                        fontFamily="Space Grotesk, sans-serif"
                      >
                        {tooltipText}
                      </text>
                    </g>
                  );
                })()}
              </svg>
              <div style={{ fontSize: 10, color: '#444', textAlign: 'center', marginTop: 10 }}>
                * Ketuk titik grafik untuk melihat tanggal & berat badan
              </div>
            </>
          )}

          {tab === 'Workout' && (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 90 }}>
              {weeklyWorkouts.map((w, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ width: '100%', height: `${(w / maxWorkout) * 70}px`, background: w >= 4 ? 'var(--accent-green)' : '#333', borderRadius: '6px 6px 0 0', boxShadow: w >= 4 ? '0 0 8px rgba(0,255,135,0.3)' : 'none' }} />
                  <span style={{ fontSize: 9, color: '#555' }}>{weekDays[i]}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'Kalori' && (
            <div style={{ textAlign: 'center', padding: '20px 0', color: '#555', fontSize: 13 }}>
              Rata-rata 1,840 kkal / hari<br />
              <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--accent-green)', fontFamily: 'Space Grotesk, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 8 }}>
                <RiCheckboxCircleFill /> Sesuai Target
              </span>
            </div>
          )}
        </div>

        {/* AI Body Preview teaser */}
        <div
          onClick={() => navigate('future-body')}
          style={{ background: 'linear-gradient(135deg, #0d2e1e, #0a1a10)', border: '1px solid rgba(0,255,135,0.3)', borderRadius: 16, padding: '16px', marginBottom: 14, cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{ width: 36, height: 36, background: 'var(--accent-green)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 18 }}>
              <BsStars />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>AI Future Body Preview</div>
              <div style={{ fontSize: 11, color: 'rgba(0,255,135,0.7)' }}>Prediksi tubuhmu 3-12 bulan ke depan</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 2, height: 6 }}>
            {[30, 50, 65, 80].map((w, i) => (
              <div key={i} style={{ flex: 1, background: `rgba(0,255,135,${w/100})`, borderRadius: 3 }} />
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'rgba(0,255,135,0.6)', marginTop: 6, textAlign: 'right' }}>Tap untuk lihat →</div>
        </div>
      </div>
    </div>
  )
}
