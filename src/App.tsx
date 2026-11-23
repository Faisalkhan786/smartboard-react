import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Chapter from './pages/Chapter'
import Deck from './pages/Deck'
import Quiz from './pages/Quiz'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/studio" element={<Home />} />
      {/* Student view — reserved. Falls through to the studio for now. */}
      <Route path="/learn" element={<Navigate to="/studio" replace />} />
      <Route path="/chapter/:chapterId" element={<Chapter />} />
      <Route path="/deck/:topicId" element={<Deck />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
