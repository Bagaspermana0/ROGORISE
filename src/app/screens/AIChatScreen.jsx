import { useState, useEffect, useRef } from 'react'
import { RiArrowLeftLine, RiSendPlaneFill } from 'react-icons/ri'
import { BsStars } from 'react-icons/bs'
import { TbBarbell, TbWalk, TbDroplet, TbStethoscope } from 'react-icons/tb'

const experts = [
  { id: 'gym', label: 'Coach Gym', icon: <TbBarbell /> },
  { id: 'calisthenics', label: 'Ahli Kalistenik', icon: <TbWalk /> },
  { id: 'nutrition', label: 'Nutrisi & Suplemen', icon: <TbDroplet /> },
  { id: 'medical', label: 'Konsultan Medis', icon: <TbStethoscope /> }
]

export default function AIChatScreen({ goBack }) {
  const [activeExpert, setActiveExpert] = useState('gym')
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // Reset messages when expert changes
    setMessages([
      { sender: 'ai', text: `Halo! Saya ${experts.find(e => e.id === activeExpert)?.label} AI Anda. Ada yang bisa saya bantu hari ini?` }
    ])
  }, [activeExpert])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMsg = input
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let reply = ''
      if (activeExpert === 'gym') {
        reply = 'Fokus pada progressive overload dan pastikan asupan protein Anda cukup, sekitar 1.6g per kg berat badan. Istirahat juga kuncinya!'
      } else if (activeExpert === 'calisthenics') {
        reply = 'Untuk kalistenik, kuasai gerakan dasar seperti push-up, pull-up, dan dips terlebih dahulu dengan form yang sempurna sebelum mencoba skill sulit.'
      } else if (activeExpert === 'nutrition') {
        reply = 'Kreatin sangat aman dan terbukti efektif. Minum 5g setiap hari. Tidak perlu fase loading jika Anda bisa bersabar menunggu 3-4 minggu.'
      } else if (activeExpert === 'medical') {
        reply = 'Jika nyeri sendi Anda berlanjut lebih dari 3 hari meski sudah istirahat, saya sarankan konsultasi langsung dengan dokter ortopedi.'
      } else {
        reply = 'Baik, saya catat. Tetap semangat dan konsisten!'
      }
      
      setMessages(prev => [...prev, { sender: 'ai', text: reply }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="screen slide-up" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="screen-header" style={{ paddingBottom: 10, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <button className="screen-header-back" onClick={goBack} style={{ marginRight: 8 }}><RiArrowLeftLine /></button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#FFB347', fontSize: 16, fontWeight: 800 }}>
            <BsStars /> RogoRise AI Expert
          </div>
        </div>

        {/* Expert Selector */}
        <div className="hide-scrollbar" style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, margin: '0 -20px', paddingLeft: 20, paddingRight: 20 }}>
          {experts.map(e => (
            <button
              key={e.id}
              onClick={() => setActiveExpert(e.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 12px', borderRadius: 100, border: '1px solid',
                borderColor: activeExpert === e.id ? '#FFB347' : '#333',
                background: activeExpert === e.id ? 'rgba(255,179,71,0.1)' : '#161616',
                color: activeExpert === e.id ? '#FFB347' : '#888',
                fontSize: 12, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s', flexShrink: 0
              }}
            >
              <span style={{ fontSize: 16 }}>{e.icon}</span> {e.label}
            </button>
          ))}
        </div>
      </div>

      <div className="screen-body hide-scrollbar" style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '85%', padding: '12px 16px', borderRadius: 18,
              borderBottomRightRadius: msg.sender === 'user' ? 4 : 18,
              borderBottomLeftRadius: msg.sender === 'ai' ? 4 : 18,
              background: msg.sender === 'user' ? 'var(--accent-green)' : '#161616',
              color: msg.sender === 'user' ? '#000' : 'white',
              border: msg.sender === 'ai' ? '1px solid #222' : 'none',
              fontSize: 13, lineHeight: 1.5, fontWeight: msg.sender === 'user' ? 600 : 400
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ padding: '12px 16px', borderRadius: 18, borderBottomLeftRadius: 4, background: '#161616', border: '1px solid #222', display: 'flex', gap: 4 }}>
              <div style={{ width: 6, height: 6, background: '#555', borderRadius: '50%', animation: 'typing 1s infinite alternate' }} />
              <div style={{ width: 6, height: 6, background: '#555', borderRadius: '50%', animation: 'typing 1s infinite alternate 0.2s' }} />
              <div style={{ width: 6, height: 6, background: '#555', borderRadius: '50%', animation: 'typing 1s infinite alternate 0.4s' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} style={{ height: 1 }} />
      </div>

      {/* Input Area */}
      <div style={{ padding: '12px 20px 24px', background: '#0a0a0a', borderTop: '1px solid #1a1a1a', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#161616', border: '1px solid #222', borderRadius: 100, padding: '4px 4px 4px 16px' }}>
          <input
            type="text"
            placeholder={`Tanya ${experts.find(e => e.id === activeExpert)?.label}...`}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontSize: 14, outline: 'none' }}
          />
          <button
            onClick={handleSend}
            style={{ width: 36, height: 36, borderRadius: '50%', background: input.trim() ? 'var(--accent-green)' : '#222', color: input.trim() ? '#000' : '#555', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, cursor: input.trim() ? 'pointer' : 'default', transition: 'all 0.2s' }}
          >
            <RiSendPlaneFill />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes typing {
          0% { transform: translateY(0); opacity: 0.5; }
          100% { transform: translateY(-4px); opacity: 1; }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  )
}
