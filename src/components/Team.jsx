import { RiMedalLine, RiCodeSSlashLine, RiSearchLine, RiLinkedinBoxFill, RiGithubFill, RiInstagramLine } from 'react-icons/ri'
import { MdSchool } from 'react-icons/md'
import { TbTarget, TbTrophy } from 'react-icons/tb'
import './Team.css'

const team = [
  {
    name: 'Bagas Permana',
    role: 'Product Developer',
    university: 'UNNES — Computer Science',
    skills: ['UI/UX Design', 'Web Development'],
    icon: <RiCodeSSlashLine />,
    color: '#00ff87',
    initial: 'B',
    socials: { github: '#', instagram: '#', linkedin: '#' },
    quote: '"Saya percaya teknologi yang baik harus terasa natural dan mudah digunakan oleh siapapun."',
  },
  {
    name: 'Erlang Dewangga',
    role: 'Project Coordinator',
    university: 'UNNES — Computer Science',
    skills: ['Research', 'Project Planning'],
    icon: <RiSearchLine />,
    color: '#00c96b',
    initial: 'E',
    socials: { github: '#', instagram: '#', linkedin: '#' },
    quote: '"Riset yang kuat adalah fondasi dari setiap produk yang berhasil menjawab masalah nyata."',
  },
]

const advisorNeeds = [
  'Strategi bisnis & go-to-market',
  'UI/UX & product design',
  'Validasi pengguna & user research',
  'Pemasaran digital & growth hacking',
]

export default function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="team__header">
          <div className="section-tag">
            <RiMedalLine />
            Tim RogoRise
          </div>
          <h2 className="section-title">
            Dibangun oleh <span>Orang yang Peduli</span>
          </h2>
          <p className="section-subtitle">
            Dua mahasiswa Computer Science UNNES Semarang yang ingin memecahkan masalah nyata dengan teknologi.
          </p>
        </div>

        <div className="team__grid">
          {team.map((member, i) => (
            <div key={i} className="team__card card">
              <div className="team__card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${member.color}15, transparent 60%)` }} />

              {/* Avatar */}
              <div className="team__avatar" style={{ borderColor: member.color, boxShadow: `0 0 30px ${member.color}30` }}>
                <span className="team__avatar-initial">{member.initial}</span>
                <div className="team__avatar-icon" style={{ background: member.color }}>
                  {member.icon}
                </div>
              </div>

              {/* Info */}
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <div className="team__role" style={{ color: member.color }}>{member.role}</div>

                <div className="team__university">
                  <MdSchool />
                  {member.university}
                </div>

                <div className="team__skills">
                  {member.skills.map(s => (
                    <span key={s} className="badge" style={{ borderColor: `${member.color}40`, color: member.color }}>
                      {s}
                    </span>
                  ))}
                </div>

                <blockquote className="team__quote">{member.quote}</blockquote>

                {/* Socials */}
                <div className="team__socials">
                  <a href={member.socials.github} className="team__social"><RiGithubFill /></a>
                  <a href={member.socials.linkedin} className="team__social"><RiLinkedinBoxFill /></a>
                  <a href={member.socials.instagram} className="team__social"><RiInstagramLine /></a>
                </div>
              </div>
            </div>
          ))}

          {/* Looking for mentor */}
          <div className="team__mentor card">
            <div className="team__mentor-header">
              <div className="team__mentor-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TbTarget style={{ color: 'var(--accent-green)', fontSize: 24 }} />
              </div>
              <div>
                <h3 className="team__mentor-title">Kami Mencari Mentor</h3>
                <p className="team__mentor-sub">Saat ini belum memiliki mentor tetap</p>
              </div>
            </div>
            <p className="team__mentor-desc">
              RogoRise membuka peluang kolaborasi dengan mentor berpengalaman di bidang:
            </p>
            <ul className="team__mentor-needs">
              {advisorNeeds.map(need => (
                <li key={need}>
                  <span className="team__mentor-dot" />
                  {need}
                </li>
              ))}
            </ul>
            <a href="mailto:rogorise@gmail.com" className="btn-secondary team__mentor-cta">
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* University badge */}
        <div className="team__university-banner">
          <div className="team__univ-left">
            <div className="team__univ-logo">UNNES</div>
            <div>
              <div className="team__univ-name">Universitas Negeri Semarang</div>
              <div className="team__univ-sub">Semarang, Jawa Tengah · Program Wadhwani Foundation</div>
            </div>
          </div>
          <div className="team__univ-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <TbTrophy style={{ color: '#FFD700', fontSize: 16 }} /> Wadhwani Foundation Venture Journey
          </div>
        </div>
      </div>
    </section>
  )
}
