import { useState } from 'react'
import { RiAddLine, RiScanLine, RiSearchLine, RiCloseLine, RiCheckLine, RiDropLine, RiDropFill, RiCupLine, RiLightbulbLine, RiStarFill } from 'react-icons/ri'
import { TbToolsKitchen2, TbCookie, TbAlertTriangle } from 'react-icons/tb'

const foodDatabase = [
  { name: 'Nasi Goreng', portion: '1 piring (250g)', cal: 450, protein: 12, carb: 65, fat: 15 },
  { name: 'Dada Ayam Panggang', portion: '1 potong (120g)', cal: 195, protein: 37, carb: 0, fat: 4 },
  { name: 'Tempe Goreng Tepung', portion: '2 biji', cal: 160, protein: 8, carb: 14, fat: 9 },
  { name: 'Tahu Goreng', portion: '2 biji', cal: 120, protein: 10, carb: 4, fat: 8 },
  { name: 'Susu Low Fat', portion: '1 gelas (250ml)', cal: 120, protein: 8, carb: 12, fat: 3 },
  { name: 'Roti Gandum', portion: '2 lembar', cal: 150, protein: 6, carb: 28, fat: 2 },
  { name: 'Pisang Ambon', portion: '1 buah', cal: 105, protein: 1.2, carb: 27, fat: 0.3 },
  { name: 'Gado-Gado', portion: '1 porsi', cal: 350, protein: 12, carb: 40, fat: 16 },
  { name: 'Bubur Ayam', portion: '1 mangkok', cal: 290, protein: 14, carb: 45, fat: 6 },
  { name: 'Protein Shake Whey', portion: '1 scoop', cal: 120, protein: 25, carb: 3, fat: 1.5 },
  { name: 'Alpukat', portion: '1 buah sedang', cal: 160, protein: 2, carb: 9, fat: 15 },
  { name: 'Salad Sayur', portion: '1 porsi', cal: 85, protein: 2, carb: 8, fat: 5 },
  { name: 'Tahu Bacem', portion: '2 biji (80g)', cal: 90, protein: 6.5, carb: 9.5, fat: 3.5 },
  { name: 'Tempe Orek', portion: '3 sdm (50g)', cal: 145, protein: 8, carb: 11, fat: 8.5 },
  { name: 'Telur Rebus', portion: '1 butir (50g)', cal: 77, protein: 6.3, carb: 0.6, fat: 5.3 },
  { name: 'Ayam Bakar Taliwang', portion: '1 potong (120g)', cal: 210, protein: 28, carb: 3.5, fat: 9.5 },
  { name: 'Daging Sapi Panggang', portion: '1 potong (100g)', cal: 240, protein: 26, carb: 0, fat: 15 },
  { name: 'Ikan Kembung Bakar', portion: '1 ekor sedang', cal: 180, protein: 22, carb: 0, fat: 10 },
  { name: 'Sate Ayam (Tanpa Lemak)', portion: '5 tusuk', cal: 165, protein: 22, carb: 4, fat: 6.8 },
  { name: 'Soto Ayam (Tanpa Nasi)', portion: '1 mangkok', cal: 150, protein: 16, carb: 5, fat: 7.5 },
  { name: 'Ubi Cilembu Bakar', portion: '1 buah (120g)', cal: 130, protein: 1.5, carb: 31, fat: 0.2 },
  { name: 'Oatmeal Instan', portion: '1 mangkok (40g)', cal: 150, protein: 5.5, carb: 27, fat: 2.5 },
  { name: 'Kacang Almond', portion: '1 genggam (15 biji)', cal: 100, protein: 3.7, carb: 3.5, fat: 8.5 },
  { name: 'Apel Merah', portion: '1 buah sedang', cal: 95, protein: 0.5, carb: 25, fat: 0.3 },
  { name: 'Bakso Sapi', portion: '1 porsi (5 biji)', cal: 320, protein: 18, carb: 22, fat: 18 },
]

const nutrientColors = {
  protein: '#FF6B6B',
  carb: '#4ECDC4',
  fat: '#FFB347',
}

const journals = [
  { title: '10 Makanan Tinggi Protein', desc: 'Daftar makanan lokal untuk bantu bangun otot', premium: false, type: 'Tips Gym' },
  { title: 'Resep Ayam Dada Juicy', desc: 'Cara masak dada ayam agar tidak kering', premium: false, type: 'Resep' },
  { title: 'Rahasia Otot Cepat Besar', desc: 'Metode latihan rahasia dari pro bodybuilder', premium: true, type: 'Tips Gym' },
  { title: 'Meal Prep Seminggu', desc: 'Panduan lengkap meal prep murah 200rb', premium: true, type: 'Panduan' },
  { title: 'Berapa Liter Air Sehari?', desc: 'Pentingnya hidrasi untuk metabolisme', premium: false, type: 'Tips Sehat' },
  { title: 'Resep Smoothie Bulking', desc: '1000 kalori dalam satu gelas yang enak', premium: false, type: 'Resep' },
  { title: 'Cutting Tanpa Kehilangan Otot', desc: 'Atur defisit kalori dengan cerdas', premium: true, type: 'Panduan' },
  { title: 'Telur Utuh vs Putih Telur', desc: 'Mana yang lebih baik untuk otot?', premium: false, type: 'Tips Sehat' },
  { title: 'Cheat Meal: Kapan Boleh?', desc: 'Panduan cheat meal tanpa merusak diet', premium: false, type: 'Tips Gym' },
  { title: 'Resep Oats Cokelat', desc: 'Sarapan pre-workout mantap', premium: false, type: 'Resep' },
  { title: 'Suplemen Wajib vs Sunah', desc: 'Whey, Creatine, atau BCAA?', premium: true, type: 'Tips Gym' },
  { title: 'Cara Baca Label Nutrisi', desc: 'Jangan tertipu trik marketing makanan', premium: false, type: 'Panduan' },
  { title: 'Tidur: Kunci Recovery', desc: 'Hubungan tidur 8 jam dengan otot', premium: false, type: 'Tips Sehat' },
  { title: 'Resep Dada Ayam Bakar Madu', desc: 'Rasa resto, kalori defisit', premium: false, type: 'Resep' },
  { title: 'Intermittent Fasting & Gym', desc: 'Latihan saat puasa, amankah?', premium: true, type: 'Panduan' },
  { title: 'Camilan Sehat di Minimarket', desc: 'Pilihan ngemil saat sedang di jalan', premium: false, type: 'Tips Sehat' },
  { title: 'Mitos Lemak Bikin Gemuk', desc: 'Kenali lemak baik vs lemak jahat', premium: false, type: 'Tips Sehat' },
  { title: 'Resep Protein Pancake', desc: 'Sarapan 30g protein tanpa bubuk whey', premium: true, type: 'Resep' },
  { title: 'Atasi Plateau Berat Badan', desc: 'Apa yang harus dilakukan saat berat stagnan', premium: true, type: 'Panduan' },
  { title: 'Kopi untuk Pre-Workout', desc: 'Dosis kafein yang pas sebelum latihan', premium: false, type: 'Tips Gym' },
]

const storeItems = [
  { id: 1, name: 'Evolene Whey Protein', desc: 'Isolate murni lokal, 27g protein/serving', originalPrice: 350000, discountPrice: 299000, tag: 'Rekomendasi AI', category: 'Suplemen' },
  { id: 2, name: 'RimbaLife Creatine Matrix', desc: 'Meningkatkan power dan volume otot', originalPrice: 150000, discountPrice: 125000, tag: '', category: 'Suplemen' },
  { id: 3, name: 'Dumbbell Set Kettler 10kg', desc: 'Cocok untuk home workout pemula', originalPrice: 250000, discountPrice: 199000, tag: 'Rekomendasi AI', category: 'Alat' },
  { id: 4, name: 'Matras Yoga Anti-Slip', desc: 'Tebal 8mm, aman untuk persendian', originalPrice: 120000, discountPrice: 85000, tag: '', category: 'Alat' },
]

export default function NutritionScreen({ navigate }) {
  const [loggedMeals, setLoggedMeals] = useState({
    'Sarapan': [
      { name: 'Nasi Putih', portion: '1 piring (150g)', cal: 195, protein: 4.1, carb: 43, fat: 0.3 },
      { name: 'Telur Goreng', portion: '2 butir', cal: 185, protein: 12.6, carb: 0.8, fat: 14 },
    ],
    'Makan Siang': [
      { name: 'Nasi Ayam Geprek', portion: '1 porsi', cal: 620, protein: 32, carb: 68, fat: 22 },
      { name: 'Es Teh Manis', portion: '1 gelas', cal: 80, protein: 0, carb: 20, fat: 0 },
    ],
    'Makan Malam': [],
    'Camilan': [],
  })

  const [activeTab, setActiveTab] = useState('Sarapan')
  const [viewMode, setViewMode] = useState('makanan')
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [targetMeal, setTargetMeal] = useState('Sarapan')
  const [successToast, setSuccessToast] = useState('')
  const [waterIntake, setWaterIntake] = useState(1250)
  const [sugarIntake, setSugarIntake] = useState(18)

  // Custom Form State
  const [showCustomForm, setShowCustomForm] = useState(false)
  const [customName, setCustomName] = useState('')
  const [customPortion, setCustomPortion] = useState('1 porsi')
  const [customCal, setCustomCal] = useState('')
  const [customProtein, setCustomProtein] = useState('')
  const [customCarb, setCustomCarb] = useState('')
  const [customFat, setCustomFat] = useState('')

  const totalCal = Object.values(loggedMeals).flat().reduce((s, f) => s + f.cal, 0)
  const totalProtein = Object.values(loggedMeals).flat().reduce((s, f) => s + f.protein, 0)
  const totalCarb = Object.values(loggedMeals).flat().reduce((s, f) => s + f.carb, 0)
  const totalFat = Object.values(loggedMeals).flat().reduce((s, f) => s + f.fat, 0)

  const targetCal = 2100
  const calPct = Math.min((totalCal / targetCal) * 100, 100)

  const filteredFoods = foodDatabase.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const remainingCal = targetCal - totalCal
  const remainingProtein = 142 - totalProtein
  const remainingCarb = 230 - totalCarb
  const remainingFat = 58 - totalFat

  // Generate dynamic AI recommendations based on current logs
  const getAiRecommendations = () => {
    const recs = []
    
    // 1. Protein recommendation
    if (remainingProtein > 50) {
      const dadaAyam = foodDatabase.find(f => f.name === 'Dada Ayam Panggang') || foodDatabase[1]
      recs.push({
        food: dadaAyam,
        reason: `Protein Anda baru ${totalProtein.toFixed(0)}g / 142g. Butuh asupan tinggi protein untuk otot.`
      })
    } else {
      const whey = foodDatabase.find(f => f.name === 'Protein Shake Whey') || foodDatabase[9]
      recs.push({
        food: whey,
        reason: 'Sangat cocok untuk memenuhi sisa target protein tanpa lemak berlebih.'
      })
    }

    // 2. Calorie gap recommendation
    if (remainingCal > 800) {
      const kembung = foodDatabase.find(f => f.name === 'Ikan Kembung Bakar') || foodDatabase[17]
      recs.push({
        food: kembung,
        reason: `Sisa kalori cukup besar (${remainingCal.toFixed(0)} kkal). Main course bersih & kaya Omega-3 ini ideal.`
      })
    } else if (remainingCal > 300) {
      const gadoGado = foodDatabase.find(f => f.name === 'Gado-Gado') || foodDatabase[7]
      recs.push({
        food: gadoGado,
        reason: 'Porsi sedang sehat dengan serat tinggi untuk menjaga stamina hari ini.'
      })
    } else {
      const apel = foodDatabase.find(f => f.name === 'Apel Merah') || foodDatabase[23]
      recs.push({
        food: apel,
        reason: 'Sisa kalori menipis. Camilan rendah kalori & kaya serat agar tetap kenyang.'
      })
    }

    // 3. Energy / healthy fats recommendation
    if (remainingFat > 20) {
      const alpukat = foodDatabase.find(f => f.name === 'Alpukat') || foodDatabase[10]
      recs.push({
        food: alpukat,
        reason: 'Asupan lemak sehat harian Anda masih rendah. Baik untuk regulasi hormon tubuh.'
      })
    } else {
      const pisang = foodDatabase.find(f => f.name === 'Pisang Ambon') || foodDatabase[6]
      recs.push({
        food: pisang,
        reason: 'Karbohidrat bersih & Kalium tinggi untuk tambahan energi latihan.'
      })
    }

    return recs
  }

  const aiRecs = getAiRecommendations()

  const handleOpenSearch = () => {
    setTargetMeal(activeTab)
    setSearchQuery('')
    setShowCustomForm(false)
    setShowSearchModal(true)
  }

  const addFoodToMeal = (food, mealName) => {
    setLoggedMeals(prev => ({
      ...prev,
      [mealName]: [...prev[mealName], food]
    }))

    // Show toast feedback
    setSuccessToast(`Ditambahkan ke ${mealName}!`)
    setTimeout(() => {
      setSuccessToast('')
    }, 1500)
  }

  const handleSaveCustom = (e) => {
    e.preventDefault()
    if (!customName || !customCal) return

    const customFood = {
      name: customName,
      portion: customPortion || '1 porsi',
      cal: parseInt(customCal) || 0,
      protein: parseFloat(customProtein) || 0,
      carb: parseFloat(customCarb) || 0,
      fat: parseFloat(customFat) || 0
    }

    addFoodToMeal(customFood, targetMeal)

    // Reset form
    setCustomName('')
    setCustomPortion('1 porsi')
    setCustomCal('')
    setCustomProtein('')
    setCustomCarb('')
    setCustomFat('')
    setShowCustomForm(false)
  }

  return (
    <div className="screen" style={{ position: 'relative', height: 'auto', minHeight: '100%' }}>
      <div style={{ padding: '16px 20px 12px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 2 }}>Nutrisi & Tips</h1>
        <p style={{ fontSize: 13, color: '#555', marginBottom: 14 }}>Hari ini · Rabu, 27 Mei 2026</p>

        {/* Mode Switcher */}
        <div style={{ display: 'flex', background: '#161616', borderRadius: 12, padding: 4, marginBottom: viewMode === 'makanan' ? 14 : 0 }}>
          <button onClick={() => setViewMode('makanan')} style={{ flex: 1, padding: '10px 4px', borderRadius: 10, border: 'none', background: viewMode === 'makanan' ? '#2a2a2a' : 'transparent', color: viewMode === 'makanan' ? 'white' : '#666', fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
            Makanan
          </button>
          <button onClick={() => setViewMode('jurnal')} style={{ flex: 1, padding: '10px 4px', borderRadius: 10, border: 'none', background: viewMode === 'jurnal' ? '#2a2a2a' : 'transparent', color: viewMode === 'jurnal' ? 'white' : '#666', fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
            Jurnal
          </button>
          <button onClick={() => setViewMode('toko')} style={{ flex: 1, padding: '10px 4px', borderRadius: 10, border: 'none', background: viewMode === 'toko' ? '#2a2a2a' : 'transparent', color: viewMode === 'toko' ? 'white' : '#666', fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}>
            Toko
          </button>
        </div>

        {viewMode === 'makanan' && (
          <>
            {/* Summary card */}
            <div className="slide-up" style={{ background: '#161616', border: '1px solid #222', borderRadius: 18, padding: '16px', marginBottom: 12 }}>
              {/* Calorie bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Total Kalori</span>
                <span style={{ fontSize: 13, color: '#555' }}>{totalCal} / {targetCal} kkal</span>
              </div>
              <div style={{ height: 8, background: '#1a1a1a', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ width: `${calPct}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-green), #00c96b)', borderRadius: 4, boxShadow: '0 0 8px rgba(0,255,135,0.3)' }} />
              </div>

              {/* Macros */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {[
                  { label: 'Protein', val: totalProtein.toFixed(0), unit: 'g', target: 142, color: nutrientColors.protein },
                  { label: 'Karbo', val: totalCarb.toFixed(0), unit: 'g', target: 230, color: nutrientColors.carb },
                  { label: 'Lemak', val: totalFat.toFixed(0), unit: 'g', target: 58, color: nutrientColors.fat },
                ].map((m, i) => (
                  <div key={i} style={{ background: '#0f0f0f', borderRadius: 12, padding: '10px 12px' }}>
                    <div style={{ fontSize: 10, color: '#555', marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: m.color, fontFamily: 'Space Grotesk, sans-serif' }}>{m.val}<span style={{ fontSize: 11, color: '#555', fontWeight: 400 }}>{m.unit}</span></div>
                    <div style={{ height: 3, background: '#1a1a1a', borderRadius: 3, marginTop: 6 }}>
                      <div style={{ width: `${Math.min((Number(m.val)/m.target)*100, 100)}%`, height: '100%', background: m.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Minimalist Water Tracker (Symmetrical Full-Width Card) */}
            <div className="slide-up" style={{ background: '#161616', border: '1px solid rgba(0, 191, 255, 0.2)', borderRadius: 18, padding: '12px 16px', marginBottom: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <RiDropFill style={{ color: '#00BFFF', fontSize: 16 }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'white', whiteSpace: 'nowrap' }}>Air Minum</span>
                  <span style={{ fontSize: 10, color: '#555', whiteSpace: 'nowrap' }}>· Target 2.5L</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#00BFFF', fontFamily: 'Space Grotesk, sans-serif', whiteSpace: 'nowrap' }}>
                  {waterIntake} <span style={{ fontSize: 10, color: '#555', fontWeight: 400 }}>ml</span>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ height: 4, background: '#171c22', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                <div style={{
                  width: `${Math.min((waterIntake / 2500) * 100, 100)}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #00BFFF, #00F5FF)',
                  borderRadius: 2,
                  transition: 'width 0.4s cubic-bezier(0.1, 0.8, 0.3, 1)',
                  boxShadow: '0 0 6px rgba(0, 191, 255, 0.3)'
                }} />
              </div>

              {/* Action buttons row */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                <button
                  onClick={() => setWaterIntake(prev => prev + 250)}
                  style={{
                    background: 'rgba(0, 191, 255, 0.08)',
                    border: '1px solid rgba(0, 191, 255, 0.2)',
                    borderRadius: 6,
                    color: '#00BFFF',
                    padding: '4px 10px',
                    fontSize: 10,
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                  className="hover-bounce"
                >
                  + Gelas <span style={{ fontSize: 8, opacity: 0.5 }}>(250ml)</span>
                </button>
                <button
                  onClick={() => setWaterIntake(prev => prev + 600)}
                  style={{
                    background: 'rgba(0, 191, 255, 0.08)',
                    border: '1px solid rgba(0, 191, 255, 0.2)',
                    borderRadius: 6,
                    color: '#00BFFF',
                    padding: '4px 10px',
                    fontSize: 10,
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                  className="hover-bounce"
                >
                  + Botol <span style={{ fontSize: 8, opacity: 0.5 }}>(600ml)</span>
                </button>
                {waterIntake > 0 && (
                  <button
                    onClick={() => setWaterIntake(0)}
                    style={{
                      background: 'rgba(255, 107, 107, 0.08)',
                      border: '1px solid rgba(255, 107, 107, 0.2)',
                      borderRadius: 6,
                      color: '#FF6B6B',
                      padding: '4px 10px',
                      fontSize: 10,
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                    className="hover-bounce"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Minimalist Sugar Tracker (Symmetrical Full-Width Card) */}
            <div className="slide-up" style={{ background: '#161616', border: `1px solid ${sugarIntake > 50 ? 'rgba(255, 77, 77, 0.3)' : 'rgba(255, 107, 129, 0.2)'}`, borderRadius: 18, padding: '12px 16px', marginBottom: 12, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <TbCookie style={{ color: sugarIntake > 50 ? '#FF4D4D' : '#FF6B81', fontSize: 16 }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'white', whiteSpace: 'nowrap' }}>Batas Gula</span>
                  <span style={{ fontSize: 10, color: sugarIntake > 50 ? '#FF4D4D' : '#555', whiteSpace: 'nowrap', fontWeight: sugarIntake > 50 ? 700 : 400, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                    {sugarIntake > 50 ? (
                      <>
                        <TbAlertTriangle style={{ fontSize: 11 }} /> LEBIH LIMIT
                      </>
                    ) : '· Limit 50g'}
                  </span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: sugarIntake > 50 ? '#FF4D4D' : '#FF6B81', fontFamily: 'Space Grotesk, sans-serif', whiteSpace: 'nowrap' }}>
                  {sugarIntake} <span style={{ fontSize: 10, color: '#555', fontWeight: 400 }}>g</span>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ height: 4, background: '#1c1214', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                <div style={{
                  width: `${Math.min((sugarIntake / 50) * 100, 100)}%`,
                  height: '100%',
                  background: sugarIntake > 50 ? 'linear-gradient(90deg, #FF4D4D, #FF6B6B)' : 'linear-gradient(90deg, #FF6B81, #FF82AB)',
                  borderRadius: 2,
                  transition: 'width 0.4s cubic-bezier(0.1, 0.8, 0.3, 1)',
                  boxShadow: sugarIntake > 50 ? '0 0 6px rgba(255, 77, 77, 0.4)' : '0 0 6px rgba(255, 107, 129, 0.3)'
                }} />
              </div>

              {/* Action buttons row */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                <button
                  onClick={() => setSugarIntake(prev => prev + 5)}
                  style={{
                    background: 'rgba(255, 107, 129, 0.08)',
                    border: '1px solid rgba(255, 107, 129, 0.2)',
                    borderRadius: 6,
                    color: '#FF6B81',
                    padding: '4px 10px',
                    fontSize: 10,
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                  className="hover-bounce"
                >
                  + Sendok <span style={{ fontSize: 8, opacity: 0.5 }}>(5g)</span>
                </button>
                <button
                  onClick={() => setSugarIntake(prev => prev + 15)}
                  style={{
                    background: 'rgba(255, 107, 129, 0.08)',
                    border: '1px solid rgba(255, 107, 129, 0.2)',
                    borderRadius: 6,
                    color: '#FF6B81',
                    padding: '4px 10px',
                    fontSize: 10,
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                  className="hover-bounce"
                >
                  + Soda/Manis <span style={{ fontSize: 8, opacity: 0.5 }}>(15g)</span>
                </button>
                {sugarIntake > 0 && (
                  <button
                    onClick={() => setSugarIntake(0)}
                    style={{
                      background: 'rgba(255, 107, 107, 0.08)',
                      border: '1px solid rgba(255, 107, 107, 0.2)',
                      borderRadius: 6,
                      color: '#FF6B6B',
                      padding: '4px 10px',
                      fontSize: 10,
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                    className="hover-bounce"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="slide-up" style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <button
                onClick={() => navigate('scanner')}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'var(--accent-green)', color: '#000', border: 'none', borderRadius: 12, padding: '11px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
                className="hover-bounce"
              >
                <RiScanLine /> Scan Makanan
              </button>
              <button
                onClick={handleOpenSearch}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#161616', color: 'white', border: '1px solid #222', borderRadius: 12, padding: '11px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
                className="hover-bounce"
              >
                <RiSearchLine /> Cari Manual
              </button>
            </div>

            {/* Meal tabs */}
            <div className="slide-up hide-scrollbar" style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
              {Object.keys(loggedMeals).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  padding: '7px 14px', borderRadius: 100, border: '1px solid',
                  borderColor: activeTab === tab ? 'var(--accent-green)' : '#222',
                  background: activeTab === tab ? 'rgba(0,255,135,0.1)' : '#161616',
                  color: activeTab === tab ? 'var(--accent-green)' : '#555',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0
                }}>
                  {tab}
                  {loggedMeals[tab].length > 0 && <span style={{ marginLeft: 4, background: 'var(--accent-green)', color: '#000', borderRadius: '50%', fontSize: 9, padding: '1px 5px', fontWeight: 900 }}>{loggedMeals[tab].length}</span>}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="screen-body" style={{ flex: 'none', overflowY: 'visible', paddingTop: 10, paddingBottom: 24 }}>
        {viewMode === 'makanan' ? (
          <>
            {loggedMeals[activeTab].length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <TbToolsKitchen2 style={{ color: 'var(--accent-green)', fontSize: 44, margin: '0 auto 12px', display: 'block' }} />
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Belum ada makanan</div>
                <div style={{ fontSize: 12, color: '#555', marginBottom: 20 }}>Tap tombol di atas untuk mencatat makananmu</div>
                <button onClick={() => navigate('scanner')} style={{ background: 'var(--accent-green)', color: '#000', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                  Scan Makanan
                </button>
              </div>
            ) : (
              loggedMeals[activeTab].map((food, i) => (
                <div key={i} className="slide-up" style={{ background: '#161616', border: '1px solid #1e1e1e', borderRadius: 14, padding: '14px 16px', marginBottom: 10, animationDelay: `${i * 0.1}s` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{food.name}</div>
                      <div style={{ fontSize: 11, color: '#555' }}>{food.portion}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--accent-green)', fontFamily: 'Space Grotesk, sans-serif' }}>{food.cal}</div>
                      <div style={{ fontSize: 10, color: '#555' }}>kkal</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {[
                      { label: 'Protein', val: food.protein, color: nutrientColors.protein },
                      { label: 'Karbo', val: food.carb, color: nutrientColors.carb },
                      { label: 'Lemak', val: food.fat, color: nutrientColors.fat },
                    ].map((m, j) => (
                      <div key={j} style={{ fontSize: 11, color: m.color }}>
                        <span style={{ color: '#555' }}>{m.label} </span>{m.val}g
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

          </>
        ) : viewMode === 'jurnal' ? (
          <div className="slide-up" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {journals.map((j, i) => (
              <div key={i} onClick={() => navigate('journal-detail', j)} className="hover-bounce" style={{ background: '#161616', border: '1px solid #1e1e1e', borderRadius: 16, padding: '16px', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent-green)', background: 'rgba(0,255,135,0.1)', padding: '4px 8px', borderRadius: 6 }}>{j.type}</span>
                  {j.premium && <span style={{ fontSize: 10, fontWeight: 700, color: '#FFB347', background: 'rgba(255,179,71,0.1)', border: '1px solid rgba(255,179,71,0.3)', padding: '2px 8px', borderRadius: 100, display: 'inline-flex', alignItems: 'center', gap: 4 }}><RiStarFill /> Premium</span>}
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>{j.title}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{j.desc}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="slide-up" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,179,71,0.1), rgba(255,179,71,0.05))', border: '1px solid rgba(255,179,71,0.3)', borderRadius: 12, padding: 12, marginBottom: 4 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#FFB347', marginBottom: 4 }}>Diskon Khusus Premium!</div>
              <p style={{ fontSize: 11, color: 'white', lineHeight: 1.4 }}>Harga spesial member untuk brand lokal pilihan yang direkomendasikan oleh AI RogoRise.</p>
            </div>
            
            {storeItems.map((item, i) => (
              <div key={i} className="hover-bounce" style={{ background: '#161616', border: '1px solid #1e1e1e', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'row', cursor: 'pointer' }}>
                <div style={{ width: 100, background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 10, color: '#555' }}>IMG</span>
                </div>
                <div style={{ flex: 1, padding: '12px' }}>
                  {item.tag && <div style={{ fontSize: 9, fontWeight: 800, background: 'var(--accent-green)', color: 'black', padding: '2px 6px', borderRadius: 4, display: 'inline-block', marginBottom: 6 }}>{item.tag}</div>}
                  <div style={{ fontSize: 14, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 2 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: '#888', marginBottom: 8, lineHeight: 1.3 }}>{item.desc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, color: '#666', textDecoration: 'line-through' }}>Rp{item.originalPrice.toLocaleString('id-ID')}</span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#FFB347' }}>Rp{item.discountPrice.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Manual Search Modal */}
      {showSearchModal && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          {/* Modal Overlay Touch Area */}
          <div onClick={() => setShowSearchModal(false)} style={{ flex: 1 }} />

          {/* Bottom Sheet Container */}
          <div className="bounce-in" style={{
            background: '#0f0f0f',
            borderTop: '2px solid #222',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: '20px 20px 30px',
            maxHeight: '85%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 -10px 45px rgba(0, 255, 135, 0.08)',
          }}>
            {/* Handlebar indicator */}
            <div style={{ width: 40, height: 4, background: '#333', borderRadius: 2, margin: '0 auto 16px', flexShrink: 0 }} />

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexShrink: 0 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>
                  {showCustomForm ? 'Tambah Kustom' : 'Cari Makanan Manual'}
                </h3>
                <p style={{ fontSize: 11, color: '#555', marginTop: 2 }}>
                  {showCustomForm ? 'Masukkan detail nutrisi kustom' : 'Alternatif jika scan kamera sedang mati/tidak bisa'}
                </p>
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                style={{ width: 32, height: 32, borderRadius: '50%', background: '#222', border: 'none', color: '#aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <RiCloseLine size={20} />
              </button>
            </div>

            {/* Success Toast */}
            {successToast && (
              <div style={{
                background: 'rgba(0, 255, 135, 0.15)',
                border: '1px solid rgba(0, 255, 135, 0.3)',
                borderRadius: 10,
                padding: '10px 14px',
                color: 'var(--accent-green)',
                fontSize: 12,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 14,
                animation: 'bounceIn 0.3s forwards',
              }}>
                <RiCheckLine size={16} /> {successToast}
              </div>
            )}

            {!showCustomForm ? (
              <>
                {/* Search Inputs */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexShrink: 0 }}>
                  <div style={{ flex: 1, position: 'relative' }}>
                    <input
                      type="text"
                      className="app-input"
                      placeholder="Cari nasi goreng, dada ayam..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ paddingLeft: 40 }}
                    />
                    <RiSearchLine style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#444' }} />
                  </div>
                  
                  {/* Target Meal Selector inside search */}
                  <select
                    value={targetMeal}
                    onChange={(e) => setTargetMeal(e.target.value)}
                    style={{
                      background: '#161616',
                      border: '1px solid #2a2a2a',
                      borderRadius: 12,
                      color: 'white',
                      padding: '0 12px',
                      fontSize: 12,
                      fontWeight: 700,
                      outline: 'none',
                    }}
                  >
                    <option value="Sarapan">Sarapan</option>
                    <option value="Makan Siang">Makan Siang</option>
                    <option value="Makan Malam">Makan Malam</option>
                    <option value="Camilan">Camilan</option>
                  </select>
                </div>

                {/* Scrollable Content (Recommendations and General List scroll together) */}
                <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16, paddingRight: 4 }}>
                  {/* AI Recommendations Section */}
                  {searchQuery === '' && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                        <span style={{ fontSize: 10, fontWeight: 900, color: 'var(--accent-green)', background: 'rgba(0, 255, 135, 0.1)', border: '1px solid rgba(0, 255, 135, 0.25)', padding: '2px 8px', borderRadius: 100, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <RiLightbulbLine style={{ fontSize: 11 }} /> REKOMENDASI AI ROGORISE
                        </span>
                        <span style={{ fontSize: 10, color: '#555' }}>Sisa makro Anda</span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {aiRecs.slice(0, 2).map((rec, i) => (
                          <div
                            key={i}
                            style={{
                              background: 'linear-gradient(135deg, rgba(0, 255, 135, 0.05), #111)',
                              border: '1px solid rgba(0, 255, 135, 0.2)',
                              borderRadius: 12,
                              padding: '10px 12px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div style={{ flex: 1, paddingRight: 8 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                                <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{rec.food.name}</span>
                                <span style={{ fontSize: 9, color: '#666' }}>({rec.food.portion})</span>
                              </div>
                              <div style={{ fontSize: 10, color: '#aaa', lineHeight: 1.3 }}>{rec.reason}</div>
                              <div style={{ display: 'flex', gap: 6, marginTop: 4, fontSize: 9 }}>
                                <span style={{ color: nutrientColors.protein }}>P: {rec.food.protein}g</span>
                                <span style={{ color: nutrientColors.carb }}>K: {rec.food.carb}g</span>
                                <span style={{ color: nutrientColors.fat }}>L: {rec.food.fat}g</span>
                              </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--accent-green)' }}>{rec.food.cal}</div>
                                <div style={{ fontSize: 8, color: '#555' }}>kkal</div>
                              </div>
                              
                              <button
                                onClick={() => addFoodToMeal(rec.food, targetMeal)}
                                style={{
                                  background: 'var(--accent-green)',
                                  border: 'none',
                                  borderRadius: 6,
                                  color: 'black',
                                  padding: '4px 8px',
                                  fontSize: 10,
                                  fontWeight: 800,
                                  cursor: 'pointer',
                                }}
                                className="hover-bounce"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Database Food Search Title */}
                  {searchQuery === '' && (
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#555', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Daftar Semua Makanan
                    </div>
                  )}

                  {/* Results List */}
                  {filteredFoods.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                      <div style={{ fontSize: 13, color: '#666', marginBottom: 14 }}>Makanan tidak ditemukan di database</div>
                      <button
                        onClick={() => setShowCustomForm(true)}
                        style={{
                          background: 'rgba(0, 255, 135, 0.1)',
                          border: '1px solid var(--accent-green-border)',
                          color: 'var(--accent-green)',
                          borderRadius: 12,
                          padding: '10px 20px',
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          Buat Makanan Kustom <RiAddLine style={{ fontSize: 13 }} />
                        </span>
                      </button>
                    </div>
                  ) : (
                    filteredFoods.map((food, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '12px 14px',
                          background: '#141414',
                          border: '1px solid #1f1f1f',
                          borderRadius: 12,
                          marginBottom: 8,
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{food.name}</div>
                          <div style={{ fontSize: 11, color: '#555', display: 'flex', gap: 6, marginTop: 4 }}>
                            <span>{food.portion}</span>
                            <span style={{ color: '#333' }}>|</span>
                            <span style={{ color: nutrientColors.protein }}>P: {food.protein}g</span>
                            <span style={{ color: nutrientColors.carb }}>K: {food.carb}g</span>
                            <span style={{ color: nutrientColors.fat }}>L: {food.fat}g</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--accent-green)' }}>{food.cal}</div>
                            <div style={{ fontSize: 9, color: '#555' }}>kkal</div>
                          </div>
                          
                          <button
                            onClick={() => addFoodToMeal(food, targetMeal)}
                            style={{
                              background: 'var(--accent-green)',
                              border: 'none',
                              borderRadius: 8,
                              color: 'black',
                              padding: '6px 12px',
                              fontSize: 11,
                              fontWeight: 800,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                            className="hover-bounce"
                          >
                            <RiAddLine size={14} /> Tambah
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Persistent Custom Food Trigger */}
                <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 14, textAlign: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 12, color: '#444', marginRight: 8 }}>Punya resep sendiri?</span>
                  <button
                    onClick={() => setShowCustomForm(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-green)',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      Tambah Kustom <RiAddLine style={{ fontSize: 13 }} />
                    </span>
                  </button>
                </div>
              </>
            ) : (
              /* Custom Food Form */
              <form onSubmit={handleSaveCustom} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div className="app-field" style={{ margin: 0, gridColumn: 'span 2' }}>
                    <label className="app-label">Nama Makanan</label>
                    <input
                      type="text"
                      className="app-input"
                      placeholder="e.g. Nasi Ayam Padang"
                      required
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                    />
                  </div>

                  <div className="app-field" style={{ margin: 0 }}>
                    <label className="app-label">Porsi / Ukuran</label>
                    <input
                      type="text"
                      className="app-input"
                      placeholder="e.g. 1 piring (300g)"
                      value={customPortion}
                      onChange={(e) => setCustomPortion(e.target.value)}
                    />
                  </div>

                  <div className="app-field" style={{ margin: 0 }}>
                    <label className="app-label">Kalori (kkal)</label>
                    <input
                      type="number"
                      className="app-input"
                      placeholder="0"
                      required
                      value={customCal}
                      onChange={(e) => setCustomCal(e.target.value)}
                    />
                  </div>

                  <div className="app-field" style={{ margin: 0 }}>
                    <label className="app-label" style={{ color: nutrientColors.protein }}>Protein (g)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="app-input"
                      placeholder="0"
                      value={customProtein}
                      onChange={(e) => setCustomProtein(e.target.value)}
                    />
                  </div>

                  <div className="app-field" style={{ margin: 0 }}>
                    <label className="app-label" style={{ color: nutrientColors.carb }}>Karbohidrat (g)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="app-input"
                      placeholder="0"
                      value={customCarb}
                      onChange={(e) => setCustomCarb(e.target.value)}
                    />
                  </div>

                  <div className="app-field" style={{ margin: 0, gridColumn: 'span 2' }}>
                    <label className="app-label" style={{ color: nutrientColors.fat }}>Lemak (g)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="app-input"
                      placeholder="0"
                      value={customFat}
                      onChange={(e) => setCustomFat(e.target.value)}
                    />
                  </div>

                  <div className="app-field" style={{ margin: 0, gridColumn: 'span 2' }}>
                    <label className="app-label">Masukkan Ke Jadwal</label>
                    <select
                      value={targetMeal}
                      onChange={(e) => setTargetMeal(e.target.value)}
                      style={{
                        background: '#161616',
                        border: '1px solid #2a2a2a',
                        borderRadius: 12,
                        color: 'white',
                        padding: '12px',
                        fontSize: 13,
                        fontWeight: 700,
                        width: '100%',
                        outline: 'none',
                      }}
                    >
                      <option value="Sarapan">Sarapan</option>
                      <option value="Makan Siang">Makan Siang</option>
                      <option value="Makan Malam">Makan Malam</option>
                      <option value="Camilan">Camilan</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: 14, flexShrink: 0 }}>
                  <button
                    type="button"
                    className="app-btn app-btn-secondary"
                    style={{ flex: 1, padding: 12 }}
                    onClick={() => setShowCustomForm(false)}
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="app-btn app-btn-primary"
                    style={{ flex: 1, padding: 12 }}
                  >
                    Simpan Makanan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
