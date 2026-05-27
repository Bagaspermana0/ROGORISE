import { BiBody, BiRestaurant, BiTargetLock } from 'react-icons/bi'
import { MdOutlineWarning } from 'react-icons/md'
import { RiEmotionUnhappyLine, RiMoneyDollarBoxLine, RiSmartphoneLine } from 'react-icons/ri'
import { TbBrain } from 'react-icons/tb'
import './Problem.css'

const problems = [
  {
    icon: <BiBody />,
    title: 'Kurang Panduan Personal',
    desc: 'Program fitness yang ada tidak menyesuaikan kondisi tubuh, aktivitas, dan kebutuhan kalori individual.'
  },
  {
    icon: <RiMoneyDollarBoxLine />,
    title: 'Personal Trainer Mahal',
    desc: 'Akses ke trainer profesional tidak terjangkau bagi mayoritas mahasiswa dan pekerja muda Indonesia.'
  },
  {
    icon: <RiSmartphoneLine />,
    title: 'Informasi Tidak Terarah',
    desc: 'Konten fitness di media sosial sering bertentangan, tidak terstruktur, bahkan berpotensi menyesatkan.'
  },
  {
    icon: <BiRestaurant />,
    title: 'Tidak Sesuai Pola Makan Lokal',
    desc: 'Aplikasi global tidak memahami pola makan Indonesia — nasi, tempe, rendang, dan makanan lokal lainnya.'
  },
  {
    icon: <BiTargetLock />,
    title: 'Sulit Konsisten',
    desc: 'Tanpa akuntabilitas dan sistem pelacakan yang jelas, sebagian besar orang menyerah dalam minggu pertama.'
  },
  {
    icon: <RiEmotionUnhappyLine />,
    title: 'Risiko Cedera',
    desc: 'Latihan tanpa panduan yang tepat meningkatkan risiko cedera, terutama bagi pemula yang tidak memiliki pengalaman gym.'
  },
]

export default function Problem() {
  return (
    <section className="problem section" id="problem">
      <div className="container">
        <div className="problem__header">
          <div className="section-tag">
            <MdOutlineWarning />
            Masalah yang Kami Pecahkan
          </div>
          <h2 className="section-title">
            Kenapa Kebanyakan Orang <span>Gagal</span> Hidup Sehat?
          </h2>
          <p className="section-subtitle">
            Bukan karena malas. Tapi karena tidak ada panduan yang benar-benar personal, terjangkau, dan relevan dengan kehidupan mereka.
          </p>
        </div>

        <div className="problem__grid">
          {problems.map((p, i) => (
            <div key={i} className="problem__card card">
              <div className="problem__card-icon">{p.icon}</div>
              <h3 className="problem__card-title">{p.title}</h3>
              <p className="problem__card-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Root cause callout */}
        <div className="problem__callout">
          <TbBrain className="problem__callout-icon" />
          <div>
            <h3>Akar Masalahnya:</h3>
            <p>Tidak ada solusi yang menggabungkan <strong>personalisasi AI</strong>, <strong>pemahaman pola makan lokal</strong>, dan <strong>harga yang terjangkau</strong> — semuanya dalam satu platform yang mudah digunakan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
