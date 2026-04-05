import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import StudySession from './components/StudySession'
import ProgressView from './components/ProgressView'

export default function App() {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-[#faf8f0]">
      {view === 'home' && (
        <HomeScreen
          onStudy={() => setView('study')}
          onProgress={() => setView('progress')}
        />
      )}
      {view === 'study' && (
        <StudySession onHome={() => setView('home')} />
      )}
      {view === 'progress' && (
        <ProgressView onHome={() => setView('home')} />
      )}
    </div>
  )
}
