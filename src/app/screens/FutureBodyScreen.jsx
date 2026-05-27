import { useState, useEffect } from 'react'
import { RiArrowLeftLine, RiFlashlightFill, RiUser3Fill, RiCameraLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { TbBarbell, TbFlame, TbDroplet, TbActivity, TbArrowRight, TbSparkles, TbRefresh, TbGenderMale, TbGenderFemale, TbCheck } from 'react-icons/tb'

// Static predictive data matrix for Male and Female
const dataMatrix = {
  pria: [
    { month: 'Sekarang', weight: '82.0 kg', bodyfat: '24%', muscle: '65.0 kg', waist: 1.05, shoulder: 0.95, abs: 0 },
    { month: 'Bulan 1', weight: '80.5 kg', bodyfat: '23%', muscle: '65.5 kg', waist: 0.96, shoulder: 1.00, abs: 0.1 },
    { month: 'Bulan 3', weight: '78.0 kg', bodyfat: '21%', muscle: '67.0 kg', waist: 0.87, shoulder: 1.05, abs: 0.35 },
    { month: 'Bulan 6', weight: '74.0 kg', bodyfat: '18%', muscle: '69.0 kg', waist: 0.78, shoulder: 1.10, abs: 0.7 },
    { month: 'Bulan 12', weight: '70.0 kg', bodyfat: '15%', muscle: '71.0 kg', waist: 0.70, shoulder: 1.15, abs: 1.0 },
  ],
  wanita: [
    { month: 'Sekarang', weight: '68.0 kg', bodyfat: '28%', muscle: '45.0 kg', waist: 1.05, shoulder: 0.95, abs: 0 },
    { month: 'Bulan 1', weight: '66.8 kg', bodyfat: '27%', muscle: '45.5 kg', waist: 0.95, shoulder: 0.98, abs: 0.05 },
    { month: 'Bulan 3', weight: '64.5 kg', bodyfat: '25%', muscle: '46.5 kg', waist: 0.85, shoulder: 1.01, abs: 0.2 },
    { month: 'Bulan 6', weight: '61.0 kg', bodyfat: '22%', muscle: '48.0 kg', waist: 0.75, shoulder: 1.04, abs: 0.5 },
    { month: 'Bulan 12', weight: '58.0 kg', bodyfat: '18%', muscle: '50.0 kg', waist: 0.65, shoulder: 1.08, abs: 0.8 },
  ]
}

const recommendations = [
  "Konsisten catat makanan harian dan lakukan latihan pembuka untuk membentuk kebiasaan aktif.",
  "Pertahankan defisit kalori ringan (~300-500 kkal). Fokus latihan beban compound 3x seminggu untuk memicu metabolisme.",
  "Massa lemak mulai menurun secara signifikan. Tingkatkan asupan protein (1.6g/kg BB) untuk melindungi massa otot yang terbentuk.",
  "Fase transformasi maksimal! Lakukan latihan beban dengan prinsip progressive overload untuk mempertegas definisi otot.",
  "Tubuh idaman tercapai secara proporsional. Mulai beralih ke kalori pemeliharaan (maintenance) dan fokus pada kekuatan fungsional jangka panjang."
]

// Stylized Dynamic SVG Human Body Silhouette
const HumanBodyOutline = ({ waistScale, shoulderScale, absOpacity, color, isFemale }) => {
  const midX = 100
  const shW = 26 * shoulderScale
  const wsW = (isFemale ? 16 : 22) * waistScale
  const hpW = (isFemale ? 25 : 23) * waistScale
  const chW = (isFemale ? 22 : 25) * shoulderScale

  // Visual outline path
  const pathD = `
    M ${midX},30
    L ${midX - 8},42 
    L ${midX - shW},48 
    L ${midX - chW},65
    L ${midX - wsW},90
    L ${midX - hpW},105
    L ${midX - 18},170
    L ${midX - 11},170
    L ${midX - 13},114
    L ${midX},108
    L ${midX + 13},114
    L ${midX + 11},170
    L ${midX + 18},170
    L ${midX + hpW},105
    L ${midX + wsW},90
    L ${midX + chW},65
    L ${midX + shW},48
    L ${midX + 8},42
    Z
  `

  return (
    <svg width="100%" height="200" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
      <defs>
        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid line background inside simulator */}
      <line x1="0" y1="108" x2="200" y2="108" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="100" y1="0" x2="100" y2="200" stroke="#1f1f1f" strokeWidth="1" strokeDasharray="2 2" />

      {/* Styled Head */}
      <circle 
        cx={midX} 
        cy={18} 
        r={9} 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5" 
        style={{ filter: 'drop-shadow(0 0 3px ' + color + ')' }} 
      />

      {/* Main Body Path */}
      <path 
        d={pathD} 
        fill={`${color}0f`}
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ transition: 'all 0.4s ease-out', filter: 'drop-shadow(0 0 5px ' + color + ')' }}
      />

      {/* Futuristic skeletal wireframe lines */}
      <line x1={midX - shW} y1="48" x2={midX + shW} y2="48" stroke={color} strokeWidth="1" opacity="0.3" style={{ transition: 'all 0.4s' }} />
      <line x1={midX - wsW} y1="90" x2={midX + wsW} y2="90" stroke={color} strokeWidth="1" opacity="0.3" style={{ transition: 'all 0.4s' }} />
      <line x1={midX - hpW} y1="105" x2={midX + hpW} y2="105" stroke={color} strokeWidth="1" opacity="0.3" style={{ transition: 'all 0.4s' }} />

      {/* Glowing Abs muscle definition (fades in as fat drops) */}
      <g opacity={absOpacity} style={{ transition: 'all 0.4s ease-out' }}>
        <line x1={midX} y1="65" x2={midX} y2="88" stroke={color} strokeWidth="1.5" />
        <line x1={midX - 7} y1="70" x2={midX + 7} y2="70" stroke={color} strokeWidth="1.2" />
        <line x1={midX - 8} y1="77" x2={midX + 8} y2="77" stroke={color} strokeWidth="1.2" />
        <line x1={midX - 7} y1="84" x2={midX + 7} y2="84" stroke={color} strokeWidth="1.2" />
      </g>
    </svg>
  )
}

export default function FutureBodyScreen({ goBack }) {
  const [step, setStep] = useState('setup') // setup -> scanning -> result
  const [gender, setGender] = useState('pria')
  const [selectedPhoto, setSelectedPhoto] = useState(null) // preset_male, preset_female, custom
  const [scanProgress, setScanProgress] = useState(0)
  const [scanStatus, setScanStatus] = useState('')
  const [activeMonthIdx, setActiveMonthIdx] = useState(0) // 0 to 4 representing [0, 1, 3, 6, 12]

  // Simulator scanning status strings
  useEffect(() => {
    if (step === 'scanning') {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          const next = prev + 2
          if (next >= 100) {
            clearInterval(interval)
            setTimeout(() => setStep('result'), 500)
            return 100
          }
          // Dynamic status updates
          if (next < 20) setScanStatus('INITIALIZING IMAGE SENSOR...')
          else if (next < 40) setScanStatus('SCANNING BODY ANTHROPOMETRICS...')
          else if (next < 60) setScanStatus('MAPPING ADIPOSE & SKELETAL MUSCLE...')
          else if (next < 80) setScanStatus('SIMULATING HYPERTROPHY & DEFICIT...')
          else setScanStatus('GENERATING 3D PREDICTIVE GRAPHIC MODEL...')
          return next
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [step])

  const currentDataset = dataMatrix[gender]
  const currentPrediction = currentDataset[activeMonthIdx]
  const baseData = currentDataset[0]

  return (
    <div className="screen">
      {/* Dynamic CSS animations inside JSX */}
      <style>{`
        @keyframes laserSweep {
          0% { top: 4%; opacity: 0.8; }
          50% { top: 96%; opacity: 1; filter: drop-shadow(0 0 10px var(--accent-green)); }
          100% { top: 4%; opacity: 0.8; }
        }
        @keyframes gridPulse {
          0% { opacity: 0.15; }
          50% { opacity: 0.35; }
          100% { opacity: 0.15; }
        }
        @keyframes textBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .glowing-scanner {
          box-shadow: 0 0 20px rgba(0, 255, 135, 0.15) inset, 0 0 10px rgba(0, 255, 135, 0.1);
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: '14px 20px 12px', borderBottom: '1px solid #1a1a1a', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <BsStars style={{ color: 'var(--accent-green)' }} />
              <span style={{ fontSize: 17, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>AI Future Body Preview</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--accent-green)', fontWeight: 600 }}>Visualisasi Prediksi Tubuh Masa Depan</div>
          </div>
        </div>
      </div>

      <div className="screen-body" style={{ display: 'flex', flexDirection: 'column' }}>

        {/* STEP 1: SETUP SCREEN */}
        {step === 'setup' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 20, padding: 18, textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: 'white', marginBottom: 4, fontFamily: 'Space Grotesk, sans-serif' }}>Pilih Gender & Model Tubuh</div>
              <p style={{ fontSize: 12, color: '#555', marginBottom: 14 }}>AI membutuhkan tipe tubuh dasar untuk kalkulasi target visual</p>
              
              <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
                <button 
                  onClick={() => { setGender('pria'); setSelectedPhoto('preset_male'); }}
                  style={{
                    flex: 1, padding: '12px', borderRadius: 12, border: '1px solid',
                    borderColor: gender === 'pria' ? 'var(--accent-green)' : '#222',
                    background: gender === 'pria' ? 'rgba(0, 255, 135, 0.08)' : '#111',
                    color: gender === 'pria' ? 'white' : '#666',
                    fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, justifyContent: 'center', width: '100%' }}>
                    <TbGenderMale style={{ fontSize: 16 }} /> Pria (82.0 kg)
                  </span>
                </button>
                <button 
                  onClick={() => { setGender('wanita'); setSelectedPhoto('preset_female'); }}
                  style={{
                    flex: 1, padding: '12px', borderRadius: 12, border: '1px solid',
                    borderColor: gender === 'wanita' ? 'var(--accent-green)' : '#222',
                    background: gender === 'wanita' ? 'rgba(0, 255, 135, 0.08)' : '#111',
                    color: gender === 'wanita' ? 'white' : '#666',
                    fontWeight: 700, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s'
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, justifyContent: 'center', width: '100%' }}>
                    <TbGenderFemale style={{ fontSize: 16 }} /> Wanita (68.0 kg)
                  </span>
                </button>
              </div>

              {/* Futuristic Photo Upload Box */}
              <div 
                style={{
                  height: 200, border: '2px dashed #222', borderRadius: 16,
                  background: '#111', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', position: 'relative',
                  overflow: 'hidden', cursor: 'pointer'
                }}
                onClick={() => setSelectedPhoto(gender === 'pria' ? 'preset_male' : 'preset_female')}
              >
                {selectedPhoto ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ opacity: 0.15, position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(var(--accent-green), transparent)' }} />
                    
                    {/* Stylized vector representation of user photo */}
                    <div style={{ width: 100, height: 160, opacity: 0.8 }}>
                      <HumanBodyOutline waistScale={1.05} shoulderScale={0.95} absOpacity={0} color="#FF6B6B" isFemale={gender === 'wanita'} />
                    </div>

                    <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, background: 'rgba(0,0,0,0.85)', padding: '6px 10px', borderRadius: 8, border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 10, color: 'var(--accent-green)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        <TbCheck style={{ fontSize: 12, strokeWidth: 3 }} /> Foto Terunggah (Demo Silhouette)
                      </span>
                      <span style={{ fontSize: 9, color: '#555' }}>Tap untuk ganti</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ padding: 20 }}>
                    <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', color: '#555' }}>
                      <RiCameraLine style={{ fontSize: 24 }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#888', display: 'block', marginBottom: 2 }}>Unggah Foto Fisik Anda</span>
                    <span style={{ fontSize: 10, color: '#444' }}>Dukung format PNG/JPG dari kamera depan/samping</span>
                  </div>
                )}
              </div>
            </div>

            <button
              disabled={!selectedPhoto}
              onClick={() => setStep('scanning')}
              style={{
                background: selectedPhoto ? 'var(--accent-green)' : '#222',
                color: selectedPhoto ? 'black' : '#444',
                padding: '14px', borderRadius: 14, border: 'none',
                fontWeight: 800, fontSize: 14, cursor: selectedPhoto ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'all 0.2s', boxShadow: selectedPhoto ? '0 4px 15px rgba(0, 255, 135, 0.2)' : 'none'
              }}
            >
              <TbSparkles /> Mulai Analisis Masa Depan AI
            </button>

            <div style={{ display: 'flex', gap: 10, background: 'rgba(0,255,135,0.02)', border: '1px solid #222', borderRadius: 14, padding: 12 }}>
              <div style={{ color: 'var(--accent-green)', fontSize: 18, marginTop: 1 }}><RiFlashlightFill /></div>
              <p style={{ fontSize: 11, color: '#666', lineHeight: 1.4 }}>
                <strong>Keamanan Privasi AI:</strong> Foto yang Anda unggah diproses secara lokal di perangkat Anda dan tidak akan pernah disimpan di server mana pun.
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: HIGH-TECH SCANNING ANIMATION */}
        {step === 'scanning' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
            <div 
              className="glowing-scanner"
              style={{
                width: 200, height: 260, border: '2px solid var(--accent-green)',
                borderRadius: 24, background: '#0a0a0a', position: 'relative',
                overflow: 'hidden', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: 24
              }}
            >
              {/* Pulsing Grid background */}
              <div 
                style={{
                  position: 'absolute', width: '100%', height: '100%',
                  background: 'linear-gradient(rgba(0,255,135,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.05) 1px, transparent 1px)',
                  backgroundSize: '15px 15px', animation: 'gridPulse 2s infinite ease-in-out'
                }}
              />

              {/* Sweeping Laser Beam line */}
              <div 
                style={{
                  position: 'absolute', left: '2%', right: '2%', height: 4,
                  background: 'linear-gradient(90deg, transparent, var(--accent-green), transparent)',
                  animation: 'laserSweep 2s infinite ease-in-out', zIndex: 10
                }}
              />

              {/* Skeleton scanning shape */}
              <div style={{ width: 100, height: 160, opacity: 0.6 }}>
                <HumanBodyOutline waistScale={1.05} shoulderScale={0.95} absOpacity={0} color="var(--accent-green)" isFemale={gender === 'wanita'} />
              </div>

              {/* Percent progress inside scanner */}
              <div style={{ position: 'absolute', bottom: 12, background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(0,255,135,0.3)', borderRadius: 100, padding: '3px 12px', fontSize: 11, fontWeight: 'bold', color: 'var(--accent-green)', fontFamily: 'monospace' }}>
                ANALYZING: {scanProgress}%
              </div>
            </div>

            <div style={{ textAlign: 'center', width: '100%', padding: '0 20px' }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: 'white', marginBottom: 6, fontFamily: 'Space Grotesk, sans-serif' }}>Menghitung Visi Masa Depan...</div>
              <div style={{ fontSize: 12, color: 'var(--accent-green)', fontFamily: 'monospace', minHeight: 18, animation: 'textBlink 1.5s infinite' }}>{scanStatus}</div>
              
              <div style={{ width: '80%', height: 6, background: '#111', borderRadius: 4, border: '1px solid #222', margin: '20px auto 0', overflow: 'hidden' }}>
                <div style={{ width: `${scanProgress}%`, height: '100%', background: 'var(--accent-green)', transition: 'width 0.1s linear', boxShadow: '0 0 10px var(--accent-green)' }} />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: HIGH-TECH SIMULATOR RESULT */}
        {step === 'result' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Morphing Visualization Cards (Before vs After) */}
            <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 20, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>Model Komposisi Tubuh AI</span>
                <span style={{ fontSize: 10, background: 'rgba(0,255,135,0.08)', color: 'var(--accent-green)', border: '1px solid rgba(0,255,135,0.2)', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
                  Akurasi Prediksi: ~92%
                </span>
              </div>

              {/* Side-by-side silhouette compare */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
                {/* Before Card */}
                <div style={{ flex: 1, background: '#111', border: '1px solid #222', borderRadius: 14, padding: 12, textAlign: 'center', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 9, background: 'rgba(255,107,107,0.1)', color: '#FF6B6B', border: '1px solid rgba(255,107,107,0.2)', padding: '2px 6px', borderRadius: 6, fontWeight: 700 }}>
                    Sekarang
                  </span>
                  <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HumanBodyOutline waistScale={baseData.waist} shoulderScale={baseData.shoulder} absOpacity={baseData.abs} color="#FF6B6B" isFemale={gender === 'wanita'} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#888', marginTop: 4 }}>{baseData.weight}</div>
                  <div style={{ fontSize: 9, color: '#444' }}>Fat: {baseData.bodyfat} | Otot: {baseData.muscle}</div>
                </div>

                {/* After Card (Morphs Live with slider) */}
                <div style={{ flex: 1, background: '#0e1d15', border: '1px solid rgba(0, 255, 135, 0.15)', borderRadius: 14, padding: 12, textAlign: 'center', position: 'relative', boxShadow: '0 0 15px rgba(0, 255, 135, 0.03)' }}>
                  <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 9, background: 'rgba(0,255,135,0.12)', color: 'var(--accent-green)', border: '1px solid rgba(0,255,135,0.2)', padding: '2px 6px', borderRadius: 6, fontWeight: 700 }}>
                    Prediksi {currentPrediction.month}
                  </span>
                  
                  <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HumanBodyOutline 
                      waistScale={currentPrediction.waist} 
                      shoulderScale={currentPrediction.shoulder} 
                      absOpacity={currentPrediction.abs} 
                      color="var(--accent-green)" 
                      isFemale={gender === 'wanita'} 
                    />
                  </div>
                  
                  <div style={{ fontSize: 12, fontWeight: 900, color: 'var(--accent-green)', marginTop: 4, fontFamily: 'Space Grotesk, sans-serif' }}>
                    {currentPrediction.weight}
                  </div>
                  <div style={{ fontSize: 9, color: 'rgba(0,255,135,0.6)' }}>
                    Fat: {currentPrediction.bodyfat} | Otot: {currentPrediction.muscle}
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Dynamic Slider */}
            <div style={{ background: '#161616', border: '1px solid #222', borderRadius: 20, padding: '16px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#888' }}>Simulasi Garis Waktu Latihan:</span>
                <span style={{ fontSize: 13, fontWeight: 900, color: 'var(--accent-green)', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {currentPrediction.month}
                </span>
              </div>

              {/* Beautiful range slider */}
              <div style={{ position: 'relative', padding: '10px 0' }}>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  value={activeMonthIdx}
                  onChange={(e) => setActiveMonthIdx(parseInt(e.target.value))}
                  style={{
                    width: '100%', accentColor: 'var(--accent-green)', height: 6,
                    background: '#222', borderRadius: 3, outline: 'none', cursor: 'pointer'
                  }}
                />
                
                {/* Markers under slider */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                  {currentDataset.map((item, idx) => (
                    <span 
                      key={idx} 
                      onClick={() => setActiveMonthIdx(idx)}
                      style={{ 
                        fontSize: 9, 
                        fontWeight: activeMonthIdx === idx ? 800 : 500, 
                        color: activeMonthIdx === idx ? 'var(--accent-green)' : '#444',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {item.month === 'Sekarang' ? 'Skrg' : item.month.replace('Bulan ', 'M')}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Comparison Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {[
                { 
                  label: 'Target Berat', 
                  val: currentPrediction.weight, 
                  diff: `${(parseFloat(currentPrediction.weight) - parseFloat(baseData.weight)).toFixed(1)} kg`, 
                  isGreen: parseFloat(currentPrediction.weight) < parseFloat(baseData.weight) 
                },
                { 
                  label: 'Kadar Lemak', 
                  val: currentPrediction.bodyfat, 
                  diff: `-${parseInt(baseData.bodyfat) - parseInt(currentPrediction.bodyfat)}%`, 
                  isGreen: true 
                },
                { 
                  label: 'Massa Otot', 
                  val: currentPrediction.muscle, 
                  diff: `+${(parseFloat(currentPrediction.muscle) - parseFloat(baseData.muscle)).toFixed(1)} kg`, 
                  isGreen: parseFloat(currentPrediction.muscle) > parseFloat(baseData.muscle) 
                },
              ].map((stat, i) => (
                <div key={i} style={{ background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '12px 10px', textAlign: 'center' }}>
                  <div style={{ fontSize: 10, color: '#555', marginBottom: 4 }}>{stat.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>{stat.val}</div>
                  {activeMonthIdx > 0 ? (
                    <div style={{ fontSize: 9, color: stat.isGreen ? 'var(--accent-green)' : '#FF6B6B', fontWeight: 700, marginTop: 2 }}>
                      {stat.diff}
                    </div>
                  ) : (
                    <div style={{ fontSize: 9, color: '#333', fontWeight: 700, marginTop: 2 }}>-</div>
                  )}
                </div>
              ))}
            </div>

            {/* AI Recommendation dynamic box */}
            <div style={{ background: 'rgba(0,255,135,0.03)', border: '1px solid rgba(0,255,135,0.12)', borderRadius: 16, padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <RiFlashlightFill style={{ color: 'var(--accent-green)', fontSize: 16 }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent-green)' }}>Saran Rencana Latihan & Makan AI</span>
              </div>
              <p style={{ fontSize: 12, color: '#888', lineHeight: 1.5, margin: 0 }}>
                {recommendations[activeMonthIdx]}
              </p>
            </div>

            {/* Reset / Rescan button */}
            <div style={{ display: 'flex', gap: 10 }}>
              <button 
                onClick={() => { setStep('setup'); setActiveMonthIdx(0); }}
                style={{
                  flex: 1, background: '#161616', border: '1px solid #333', color: '#888',
                  padding: '12px', borderRadius: 12, fontWeight: 700, fontSize: 12,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  transition: 'all 0.2s'
                }}
              >
                <TbRefresh /> Rescan / Ulangi Foto
              </button>
              <button 
                onClick={goBack}
                style={{
                  flex: 1.5, background: 'var(--accent-green)', border: 'none', color: 'black',
                  padding: '12px', borderRadius: 12, fontWeight: 800, fontSize: 12,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(0,255,135,0.15)'
                }}
              >
                <RiCheckboxCircleFill /> Simpan Prediksi AI
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

