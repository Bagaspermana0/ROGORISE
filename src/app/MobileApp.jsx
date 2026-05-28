import { useState } from 'react'
import './MobileApp.css'

// Screens
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import OnboardingScreen from './screens/OnboardingScreen'
import HomeScreen from './screens/HomeScreen'
import WorkoutScreen from './screens/WorkoutScreen'
import NutritionScreen from './screens/NutritionScreen'
import ScannerScreen from './screens/ScannerScreen'
import ProgressScreen from './screens/ProgressScreen'
import ProfileScreen from './screens/ProfileScreen'
import WorkoutDetailScreen from './screens/WorkoutDetailScreen'
import FutureBodyScreen from './screens/FutureBodyScreen'

import JournalDetailScreen from './screens/JournalDetailScreen'
import SettingsScreen from './screens/SettingsScreen'
import PremiumScreen from './screens/PremiumScreen'
import PrivacyScreen from './screens/PrivacyScreen'
import AboutScreen from './screens/AboutScreen'
import FAQScreen from './screens/FAQScreen'
import AIChatScreen from './screens/AIChatScreen'
import CoachingScreen from './screens/CoachingScreen'

// Bottom nav icons
import { RiHome5Fill, RiHome5Line, RiRunLine, RiRunFill, RiRestaurant2Line, RiRestaurant2Fill, RiLineChartLine, RiLineChartFill, RiUser3Line, RiUser3Fill, RiBatteryChargeFill } from 'react-icons/ri'
import { RiArrowLeftLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { RiFlashlightFill } from 'react-icons/ri'
import logoImg from '../assets/rogoriselogo.png'

const SCREENS_WITH_BOTTOM_NAV = ['home', 'workout', 'nutrition', 'progress', 'profile']
const SCREENS_AUTH = ['login', 'register', 'onboarding']

const bottomNavItems = [
  { key: 'home', labelActive: <RiHome5Fill />, labelInactive: <RiHome5Line />, label: 'Home' },
  { key: 'workout', labelActive: <RiRunFill />, labelInactive: <RiRunLine />, label: 'Workout' },
  { key: 'nutrition', labelActive: <RiRestaurant2Fill />, labelInactive: <RiRestaurant2Line />, label: 'Nutrisi' },
  { key: 'progress', labelActive: <RiLineChartFill />, labelInactive: <RiLineChartLine />, label: 'Progres' },
  { key: 'profile', labelActive: <RiUser3Fill />, labelInactive: <RiUser3Line />, label: 'Profil' },
]

export default function MobileApp() {
  const [screen, setScreen] = useState('login')
  const [user, setUser] = useState(null)
  const [prevScreen, setPrevScreen] = useState(null)
  const [screenData, setScreenData] = useState(null)

  const navigate = (to, data = null) => {
    setPrevScreen(screen)
    setScreenData(data)
    setScreen(to)
  }

  const goBack = () => {
    if (prevScreen) setScreen(prevScreen)
    else setScreen('home')
  }

  const showBottomNav = SCREENS_WITH_BOTTOM_NAV.includes(screen)
  const isAuthScreen = SCREENS_AUTH.includes(screen)

  const renderScreen = () => {
    const props = { navigate, user, setUser, goBack, screenData }
    switch (screen) {
      case 'login':     return <LoginScreen {...props} />
      case 'register':  return <RegisterScreen {...props} />
      case 'onboarding': return <OnboardingScreen {...props} />
      case 'home':      return <HomeScreen {...props} />
      case 'workout':   return <WorkoutScreen {...props} />
      case 'workout-detail': return <WorkoutDetailScreen {...props} />
      case 'nutrition': return <NutritionScreen {...props} />
      case 'scanner':   return <ScannerScreen {...props} />
      case 'progress':  return <ProgressScreen {...props} />
      case 'future-body': return <FutureBodyScreen {...props} />
      case 'profile':   return <ProfileScreen {...props} />
      case 'journal-detail': return <JournalDetailScreen {...props} />
      case 'settings':  return <SettingsScreen {...props} />
      case 'premium':   return <PremiumScreen {...props} />
      case 'privacy':   return <PrivacyScreen {...props} />
      case 'about':     return <AboutScreen {...props} />
      case 'faq':       return <FAQScreen {...props} />
      case 'ai-chat':   return <AIChatScreen {...props} />
      case 'coaching':  return <CoachingScreen {...props} />
      default:          return <HomeScreen {...props} />
    }
  }

  return (
    <div className="mobile-app-page">
      {/* Back to landing */}
      <Link to="/" className="back-to-landing">
        <RiArrowLeftLine />
        Kembali ke Website
      </Link>

      {/* Branding */}
      <div className="app-page-brand">
        <div className="app-page-brand-main" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img 
            src={logoImg} 
            alt="RogoRise Logo" 
            style={{ width: '24px', height: '24px', borderRadius: '6px', objectFit: 'contain' }} 
          />
          <span>RogoRise</span>
          <span className="app-page-beta">App Prototype</span>
        </div>
        <p className="app-tip">
          <RiFlashlightFill className="app-tip-icon" />
          Prototype interaktif — klik untuk navigasi antar screen
        </p>
      </div>

      {/* Phone Frame */}
      <div className="phone-frame">
        {/* Dynamic Island / Notch */}
        <div className="phone-island" />

        {/* Status bar */}
        <div className="phone-status">
          <span>9:41</span>
          <div className="phone-status-right" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>5G</span>
            <RiBatteryChargeFill style={{ color: 'var(--accent-green)', fontSize: 16 }} />
          </div>
        </div>

        {/* Screen Content */}
        <div className="phone-screen">
          <div key={screen} className="screen-content slide-up">
            {renderScreen()}
          </div>

          {/* Bottom Nav */}
          {showBottomNav && (
            <nav className="bottom-nav">
              {bottomNavItems.map(item => (
                <button
                  key={item.key}
                  className={`bottom-nav-item ${screen === item.key ? 'bottom-nav-item--active' : ''}`}
                  onClick={() => navigate(item.key)}
                >
                  <span className="bottom-nav-icon">
                    {screen === item.key ? item.labelActive : item.labelInactive}
                  </span>
                  <span className="bottom-nav-label">{item.label}</span>
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Home indicator */}
        <div className="phone-home-indicator" />
      </div>


    </div>
  )
}
