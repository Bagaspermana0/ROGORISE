import { useState } from 'react'
import { RiArrowLeftLine, RiScanLine, RiAddLine, RiCheckLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { TbBowl, TbMeat, TbLayoutGrid, TbLeaf, TbSquare, TbApple, TbEgg, TbToolsKitchen2, TbSearch, TbFlag } from 'react-icons/tb'

const foodDatabase = [
  { name: 'Nasi Putih', cal: 130, protein: 2.7, carb: 28, fat: 0.3, portion: '100g', icon: <TbBowl style={{ color: '#fff' }} />, local: true },
  { name: 'Ayam Goreng', cal: 246, protein: 29, carb: 4.8, fat: 12, portion: '1 potong (100g)', icon: <TbMeat style={{ color: '#FFB347' }} />, local: true },
  { name: 'Tempe Goreng', cal: 200, protein: 18, carb: 10, fat: 11, portion: '1 potong (60g)', icon: <TbLayoutGrid style={{ color: '#FFB347' }} />, local: true },
  { name: 'Sayur Bayam', cal: 23, protein: 2.9, carb: 3.6, fat: 0.4, portion: '100g', icon: <TbLeaf style={{ color: 'var(--accent-green)' }} />, local: true },
  { name: 'Tahu Goreng', cal: 165, protein: 12, carb: 5, fat: 12, portion: '1 potong (80g)', icon: <TbSquare style={{ color: '#FFB347' }} />, local: true },
  { name: 'Apel', cal: 95, protein: 0.5, carb: 25, fat: 0.3, portion: '1 buah (182g)', icon: <TbApple style={{ color: '#FF6B6B' }} />, local: false },
  { name: 'Telur Rebus', cal: 77, protein: 6.3, carb: 0.6, fat: 5.3, portion: '1 butir (50g)', icon: <TbEgg style={{ color: '#fff' }} />, local: false },
]

export default function ScannerScreen({ navigate, goBack }) {
  const [phase, setPhase] = useState('scan') // scan | scanning | result | added
  const [selected, setSelected] = useState(null)

  const handleScan = () => {
    // Simulate scan → show result
    setTimeout(() => {
      setSelected(foodDatabase[Math.floor(Math.random() * 3)])
      setPhase('result')
    }, 2000)
    setPhase('scanning')
  }

  const handleAdd = () => {
    setPhase('added')
    setTimeout(() => navigate('nutrition'), 1500)
  }

  return (
    <div className="screen">
      <div style={{ padding: '14px 20px 12px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, borderBottom: '1px solid #1a1a1a' }}>
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 17, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>Smart Food Scanner</div>
          <div style={{ fontSize: 11, color: 'var(--accent-green)', fontWeight: 600 }}>AI-Powered · Database Makanan Lokal</div>
        </div>
      </div>

      <div className="screen-body" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

        {/* Scanner viewfinder */}
        <div style={{ position: 'relative', background: '#0a0a0a', borderRadius: 20, overflow: 'hidden', margin: '0 0 16px', aspectRatio: '4/3', flexShrink: 0 }}>
          {/* Simulated camera view */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0f0a, #050a05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {phase === 'scan' && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 50, color: 'var(--accent-green)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                  <TbToolsKitchen2 />
                </div>
                <div style={{ fontSize: 13, color: '#555' }}>Arahkan kamera ke makanan</div>
              </div>
            )}
            {phase === 'scanning' && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 50, color: 'var(--accent-green)', marginBottom: 8, display: 'flex', justifyContent: 'center' }} className="pulse">
                  <TbSearch />
                </div>
                <div style={{ fontSize: 13, color: 'var(--accent-green)' }}>Menganalisis makanan...</div>
              </div>
            )}
            {(phase === 'result' || phase === 'added') && selected && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 60, marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{selected.icon}</div>
                <div style={{ fontSize: 13, color: 'var(--accent-green)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                  <RiCheckLine /> Teridentifikasi!
                </div>
              </div>
            )}
          </div>

          {/* Scanner corners */}
          {phase !== 'added' && ['top-left','top-right','bottom-left','bottom-right'].map(pos => {
            const isTop = pos.includes('top'), isLeft = pos.includes('left')
            return (
              <div key={pos} style={{
                position: 'absolute',
                [isTop ? 'top' : 'bottom']: 16,
                [isLeft ? 'left' : 'right']: 16,
                width: 30, height: 30,
                borderTop: isTop ? '3px solid var(--accent-green)' : 'none',
                borderBottom: !isTop ? '3px solid var(--accent-green)' : 'none',
                borderLeft: isLeft ? '3px solid var(--accent-green)' : 'none',
                borderRight: !isLeft ? '3px solid var(--accent-green)' : 'none',
                borderRadius: pos === 'top-left' ? '6px 0 0 0' : pos === 'top-right' ? '0 6px 0 0' : pos === 'bottom-left' ? '0 0 0 6px' : '0 0 6px 0',
                boxShadow: `0 0 10px rgba(0,255,135,${phase === 'scanning' ? 0.6 : 0.3})`
              }} />
            )
          })}

          {/* Scanning line animation */}
          {phase === 'scanning' && (
            <div style={{
              position: 'absolute', left: 16, right: 16, height: 2, background: 'var(--accent-green)',
              boxShadow: '0 0 10px rgba(0,255,135,0.8)',
              animation: 'scanLine 1.2s ease-in-out infinite',
              top: '30%'
            }} />
          )}
        </div>

        {/* Scan button or Result */}
        {phase === 'scan' && (
          <button className="app-btn app-btn-primary" onClick={handleScan} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 14 }}>
            <RiScanLine style={{ fontSize: 20 }} />
            Mulai Scan
          </button>
        )}

        {phase === 'scanning' && (
          <div style={{ textAlign: 'center', padding: '10px 0 14px' }}>
            <div style={{ fontSize: 13, color: '#555' }}>Mohon tunggu sebentar...</div>
          </div>
        )}

        {(phase === 'result') && selected && (
          <div style={{ background: '#161616', border: '1px solid rgba(0,255,135,0.25)', borderRadius: 18, padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 20, display: 'flex' }}>{selected.icon}</span>
                  <span style={{ fontSize: 17, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>{selected.name}</span>
                  {selected.local && <span style={{ fontSize: 10, background: 'rgba(0,255,135,0.15)', color: 'var(--accent-green)', padding: '2px 7px', borderRadius: 100, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 3 }}><TbFlag style={{ fontSize: 12 }} /> Lokal</span>}
                </div>
                <div style={{ fontSize: 12, color: '#555' }}>{selected.portion}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--accent-green)', fontFamily: 'Space Grotesk, sans-serif' }}>{selected.cal}</div>
                <div style={{ fontSize: 10, color: '#555' }}>kkal</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
              {[
                { label: 'Protein', val: selected.protein, color: '#FF6B6B' },
                { label: 'Karbo', val: selected.carb, color: '#4ECDC4' },
                { label: 'Lemak', val: selected.fat, color: '#FFB347' },
              ].map((m, i) => (
                <div key={i} style={{ background: '#0f0f0f', borderRadius: 10, padding: '8px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 10, color: '#555', marginBottom: 2 }}>{m.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: m.color }}>{m.val}g</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button className="app-btn app-btn-primary" onClick={handleAdd} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <RiAddLine /> Tambah ke Diary
              </button>
              <button className="app-btn app-btn-secondary" onClick={() => setPhase('scan')} style={{ flex: 0.5 }}>
                Scan Lagi
              </button>
            </div>
          </div>
        )}

        {phase === 'added' && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <RiCheckboxCircleFill style={{ fontSize: 50, color: 'var(--accent-green)', marginBottom: 8, display: 'block', margin: '0 auto' }} />
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--accent-green)' }}>Berhasil Ditambahkan!</div>
          </div>
        )}

        {/* Manual search */}
        {phase === 'scan' && (
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: '#555' }}>Atau pilih dari database lokal:</div>
            {foodDatabase.slice(0, 4).map((food, i) => (
              <div
                key={i}
                style={{ background: '#161616', border: '1px solid #1e1e1e', borderRadius: 12, padding: '12px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                onClick={() => { setSelected(food); setPhase('result') }}
              >
                <span style={{ fontSize: 24, display: 'flex' }}>{food.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{food.name}</div>
                  <div style={{ fontSize: 11, color: '#555' }}>{food.portion}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent-green)' }}>{food.cal} kkal</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes scanLine {
          0% { top: 20%; opacity: 1; }
          50% { top: 75%; opacity: 1; }
          100% { top: 20%; opacity: 1; }
        }
      `}</style>
    </div>
  )
}
