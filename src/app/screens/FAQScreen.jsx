import { useState } from 'react'
import { RiArrowLeftLine, RiAddLine, RiSubtractLine } from 'react-icons/ri'

const faqs = [
  { q: 'Bagaimana AI mengukur progres tubuh saya?', a: 'AI RogoRise menganalisis data berat badan, metrik latihan mingguan, dan asupan nutrisi Anda, lalu membandingkannya dengan miliaran data poin untuk memprediksi kurva progres Anda secara realistis.' },
  { q: 'Apakah database makanan mencakup makanan warteg?', a: 'Ya! Database kami dioptimalkan khusus untuk makanan Indonesia, termasuk tempe orek, ayam geprek, hingga sayur lodeh.' },
  { q: 'Bisa dibatalkan jika berlangganan Premium?', a: 'Tentu. Anda dapat membatalkan langganan Premium kapan saja tanpa biaya tersembunyi. Akses premium akan tetap aktif hingga akhir periode penagihan.' },
  { q: 'Saya tidak punya alat gym, apakah bisa?', a: 'Bisa. Saat mengatur profil pertama kali, Anda bisa memilih "Home Workout tanpa alat" dan AI akan menyusun rutinitas bodyweight training.' }
]

export default function FAQScreen({ goBack }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="screen slide-up">
      <div className="screen-header">
        <button className="screen-header-back" onClick={goBack}><RiArrowLeftLine /></button>
        <div className="screen-header-title">Bantuan & FAQ</div>
      </div>

      <div className="screen-body">
        <h2 style={{ fontSize: 20, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16 }}>Pertanyaan Populer</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <div key={i} onClick={() => setOpenIndex(openIndex === i ? null : i)} className="hover-bounce" style={{ background: '#161616', border: '1px solid #222', borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: openIndex === i ? 'var(--accent-green)' : 'white' }}>{faq.q}</div>
                <div style={{ color: openIndex === i ? 'var(--accent-green)' : '#555', fontSize: 18 }}>
                  {openIndex === i ? <RiSubtractLine /> : <RiAddLine />}
                </div>
              </div>
              {openIndex === i && (
                <div style={{ padding: '0 16px 16px', fontSize: 13, color: '#aaa', lineHeight: 1.5 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1a1a1a, #111)', border: '1px solid #333', borderRadius: 16, padding: 20, marginTop: 30, textAlign: 'center' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Masih Butuh Bantuan?</h3>
          <p style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>Tim support RogoRise siap memandu Anda kapan saja.</p>
          <button className="app-btn hover-bounce" style={{ background: 'white', color: 'black' }}>
            Hubungi Customer Service
          </button>
        </div>
      </div>
    </div>
  )
}
