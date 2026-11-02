import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Chapter from './pages/Chapter'
import Deck from './pages/Deck'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter/:chapterId" element={<Chapter />} />
      <Route path="/deck/:topicId" element={<Deck />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
