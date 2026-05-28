import { useState } from 'react'
import { RiCheckLine, RiFlashlightFill, RiRobotLine, RiScanLine, RiLineChartLine, RiCustomerServiceLine } from 'react-icons/ri'
import { BiCrown } from 'react-icons/bi'
import './Pricing.css'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 'Gratis',
    priceNum: null,
    period: 'selamanya',
    desc: 'Coba RogoRise tanpa biaya. Fitur dasar untuk memulai perjalanan sehatmu.',
    highlight: false,
    cta: 'Mulai Gratis',
    features: [
      { icon: <RiFlashlightFill />, text: 'Profil tubuh dasar', active: true },
      { icon: <RiLineChartLine />, text: 'Tracking kalori (7 hari)', active: true },
      { icon: <RiRobotLine />, text: 'Program workout (3/minggu)', active: true },
      { icon: <RiScanLine />, text: 'Food Scanner (10x/bulan)', active: true },
      { icon: <RiRobotLine />, text: 'AI Future Body Preview', active: false },
      { icon: <RiCustomerServiceLine />, text: 'Customer support', active: false },
    ]
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 'Rp15.000',
    priceNum: '15K',
    period: 'per bulan',
    desc: 'Untuk yang serius memulai gaya hidup sehat dengan panduan yang lebih lengkap.',
    highlight: false,
    cta: 'Pilih Basic',
    features: [
      { icon: <RiFlashlightFill />, text: 'Semua fitur Free', active: true },
      { icon: <RiLineChartLine />, text: 'Tracking tak terbatas', active: true },
      { icon: <RiRobotLine />, text: 'AI Coach personal', active: true },
      { icon: <RiScanLine />, text: 'Food Scanner tak terbatas', active: true },
      { icon: <RiRobotLine />, text: 'Meal plan mingguan', active: true },
      { icon: <RiCustomerServiceLine />, text: 'Customer support', active: false },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'Rp45.000',
    priceNum: '45K',
    period: 'per bulan',
    desc: 'Pengalaman coaching AI terlengkap dengan semua fitur eksklusif dan support prioritas.',
    highlight: true,
    cta: 'Pilih Premium',
    badge: 'Terpopuler',
    features: [
      { icon: <RiFlashlightFill />, text: 'Semua fitur Basic', active: true },
      { icon: <RiRobotLine />, text: 'AI Future Body Preview', active: true },
      { icon: <RiLineChartLine />, text: 'Analytics mendalam', active: true },
      { icon: <RiScanLine />, text: 'Rekomendasi resep lokal', active: true },
      { icon: <RiRobotLine />, text: 'Program workout adaptif AI', active: true },
      { icon: <RiCustomerServiceLine />, text: 'Priority customer support', active: true },
    ]
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <div className="section-tag">

            Harga Terjangkau
          </div>
          <h2 className="section-title">
            Investasi Terkecil untuk <span>Hidup Terbaik</span>
          </h2>
          <p className="section-subtitle">
            Lebih murah dari secangkir kopi kekinian. Dimulai dari Rp15.000/bulan — tidak ada alasan untuk tidak mulai sekarang.
          </p>

          {/* Toggle */}
          <div className="pricing__toggle">
            <span className={!isAnnual ? 'pricing__toggle-active' : ''}>Bulanan</span>
            <button
              className={`pricing__toggle-btn ${isAnnual ? 'pricing__toggle-btn--on' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className="pricing__toggle-thumb" />
            </button>
            <span className={isAnnual ? 'pricing__toggle-active' : ''}>
              Tahunan
              <span className="badge" style={{ marginLeft: 8 }}>Hemat 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing__grid">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`pricing__card card ${plan.highlight ? 'pricing__card--highlight' : ''}`}
            >
              {plan.badge && (
                <div className="pricing__badge">
                  <BiCrown /> {plan.badge}
                </div>
              )}

              <div className="pricing__plan-name">{plan.name}</div>

              <div className="pricing__price-wrap">
                {plan.priceNum ? (
                  <>
                    <span className="pricing__currency">Rp</span>
                    <span className="pricing__amount">
                      {isAnnual
                        ? Math.round(parseInt(plan.priceNum) * 0.8) + 'K'
                        : plan.priceNum}
                    </span>
                    <span className="pricing__period">/{isAnnual ? 'bln (bayar tahunan)' : plan.period}</span>
                  </>
                ) : (
                  <span className="pricing__amount pricing__amount--free">Gratis</span>
                )}
              </div>

              <p className="pricing__desc">{plan.desc}</p>

              <a
                href="#"
                className={plan.highlight ? 'btn-primary pricing__cta' : 'btn-secondary pricing__cta'}
              >
                {plan.cta}
              </a>

              <div className="pricing__divider" />

              <ul className="pricing__features">
                {plan.features.map((f, i) => (
                  <li key={i} className={`pricing__feature ${!f.active ? 'pricing__feature--inactive' : ''}`}>
                    <span className={`pricing__feature-icon ${f.active ? 'pricing__feature-icon--active' : ''}`}>
                      {f.active ? <RiCheckLine /> : <span style={{ fontSize: 18, opacity: 0.3 }}>—</span>}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing__note">
          <RiFlashlightFill />
          Tidak ada kontrak jangka panjang. Batalkan kapan saja. Data pribadimu aman bersama kami.
        </div>
      </div>
    </section>
  )
}
