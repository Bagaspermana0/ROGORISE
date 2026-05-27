import { RiCheckLine, RiCloseLine, RiShieldCheckLine } from 'react-icons/ri'
import { BiTrophy } from 'react-icons/bi'
import { TbFlag, TbWorld, TbToolsKitchen2, TbRobot, TbCash, TbBarbell } from 'react-icons/tb'
import './Competitors.css'

const competitors = [
  { name: 'Fita', country: 'ID', type: 'Lokal' },
  { name: 'Noom', country: 'GLOBAL', type: 'Global' },
  { name: 'Fitbod', country: 'GLOBAL', type: 'Global' },
  { name: 'Apple Fitness+', country: 'GLOBAL', type: 'Global' },
]

const features = [
  { label: 'Program Workout Personal', rogoRise: true, fita: true, noom: false, fitbod: true, apple: false },
  { label: 'Program Nutrisi Personal', rogoRise: true, fita: true, noom: true, fitbod: false, apple: false },
  { label: 'Pola Makan Lokal Indonesia', rogoRise: true, fita: false, noom: false, fitbod: false, apple: false },
  { label: 'AI Future Body Preview', rogoRise: true, fita: false, noom: false, fitbod: false, apple: false },
  { label: 'Smart Food Scanner', rogoRise: true, fita: false, noom: false, fitbod: false, apple: false },
  { label: 'Harga Terjangkau (< Rp50K)', rogoRise: true, fita: false, noom: false, fitbod: false, apple: false },
  { label: 'UX Ramah Pemula', rogoRise: true, fita: true, noom: true, fitbod: true, apple: true },
  { label: 'Komunitas Fitness Lokal', rogoRise: true, fita: false, noom: false, fitbod: false, apple: false },
]

const Check = () => <RiCheckLine className="comp-check" />
const Cross = () => <RiCloseLine className="comp-cross" />

export default function Competitors() {
  return (
    <section className="comp section" id="competitors">
      <div className="container">
        <div className="comp__header">
          <div className="section-tag">
            <BiTrophy />
            Keunggulan Kompetitif
          </div>
          <h2 className="section-title">
            Mengapa Pilih <span>RogoRise</span>?
          </h2>
          <p className="section-subtitle">
            Satu-satunya platform yang menggabungkan AI personal, pemahaman budaya lokal Indonesia, dan harga yang benar-benar terjangkau.
          </p>
        </div>

        <div className="comp__table-wrap">
          <table className="comp__table">
            <thead>
              <tr>
                <th className="comp__th comp__th--feature">Fitur</th>
                <th className="comp__th comp__th--rogorise">
                  <div className="comp__rogorise-head">
                    <RiShieldCheckLine />
                    RogoRise
                    <span className="badge">Kita</span>
                  </div>
                </th>
                {competitors.map(c => (
                  <th key={c.name} className="comp__th">
                    <div className="comp__competitor-head">
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                        {c.country === 'ID' ? <TbFlag style={{ color: '#FF4D4D', fontSize: 13 }} /> : <TbWorld style={{ color: '#666', fontSize: 13 }} />}
                        {c.name}
                      </span>
                      <span className="comp__competitor-type">{c.type}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="comp__row">
                  <td className="comp__td comp__td--feature">{f.label}</td>
                  <td className="comp__td comp__td--rogorise">{f.rogoRise ? <Check /> : <Cross />}</td>
                  <td className="comp__td">{f.fita ? <Check /> : <Cross />}</td>
                  <td className="comp__td">{f.noom ? <Check /> : <Cross />}</td>
                  <td className="comp__td">{f.fitbod ? <Check /> : <Cross />}</td>
                  <td className="comp__td">{f.apple ? <Check /> : <Cross />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Unfair advantages */}
        <div className="comp__advantages">
          <h3 className="comp__adv-title">Unfair Advantages Kami</h3>
          <div className="comp__adv-grid">
            {[
              { icon: <TbFlag style={{ color: '#FF4D4D' }} />, title: 'Lokal Mindset', desc: 'Dibangun khusus untuk pengguna Indonesia — bahasa, budaya, dan kebiasaan makan lokal' },
              { icon: <TbToolsKitchen2 style={{ color: 'var(--accent-primary)' }} />, title: 'Database Makanan Lokal', desc: 'Nasi, tempe, rendang, gado-gado — semua ada. Aplikasi global tidak mengerti ini.' },
              { icon: <TbRobot style={{ color: '#4ECDC4' }} />, title: 'AI Data Moat', desc: 'Semakin banyak pengguna, AI semakin cerdas dan personal — kompetitor sulit mengejar' },
              { icon: <TbCash style={{ color: '#FFD700' }} />, title: 'Harga Paling Kompetitif', desc: 'Mulai Rp15.000/bulan — lebih murah dari secangkir kopi di kafe' },
              { icon: <TbBarbell style={{ color: '#FF6B6B' }} />, title: 'Komunitas Organik', desc: 'Jaringan gym lokal, komunitas olahraga, dan trainer yang dibangun dari akar' },
            ].map((adv, i) => (
              <div key={i} className="comp__adv-card card">
                <div className="comp__adv-emoji" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, marginBottom: 12 }}>{adv.icon}</div>
                <h4 className="comp__adv-name">{adv.title}</h4>
                <p className="comp__adv-desc">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
