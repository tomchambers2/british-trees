import { TREES } from '../data/trees'
import { loadProgress } from '../lib/storage'
import { isDue } from '../lib/sm2'

export default function HomeScreen({ onStudy, onProgress }) {
  const progress = loadProgress()

  const known = TREES.filter(t => progress[t.id]?.interval > 21).length
  const learning = TREES.filter(t => {
    const p = progress[t.id]
    return p && p.interval >= 1 && p.interval <= 21
  }).length
  const newCount = TREES.filter(t => !progress[t.id]).length

  const dueCards = TREES.filter(t => {
    const p = progress[t.id]
    if (!p) return true
    return isDue(p)
  })
  const hasDueCards = dueCards.length > 0

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="text-center max-w-sm w-full">
        <div className="mb-2 text-5xl">🌳</div>
        <h1 className="text-3xl font-bold text-[#1a3a2a] mb-2">British Trees</h1>
        <p className="text-[#5d4037] mb-8">Learn to identify native British trees</p>

        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-green-100 border border-green-300 rounded-xl px-4 py-3 text-center min-w-[80px]">
            <div className="text-2xl font-bold text-green-700">{known}</div>
            <div className="text-xs text-green-600 font-medium">Known</div>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded-xl px-4 py-3 text-center min-w-[80px]">
            <div className="text-2xl font-bold text-yellow-700">{learning}</div>
            <div className="text-xs text-yellow-600 font-medium">Learning</div>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-center min-w-[80px]">
            <div className="text-2xl font-bold text-gray-500">{newCount}</div>
            <div className="text-xs text-gray-500 font-medium">New</div>
          </div>
        </div>

        {hasDueCards ? (
          <button
            onClick={onStudy}
            className="w-full bg-[#2d5a3f] hover:bg-[#1a3a2a] text-white font-semibold py-4 px-6 rounded-xl text-lg transition-colors mb-4 cursor-pointer"
          >
            Study Now ({Math.min(dueCards.length, 10)} cards)
          </button>
        ) : (
          <div className="w-full bg-gray-200 text-gray-500 font-semibold py-4 px-6 rounded-xl text-lg mb-4">
            All caught up! Come back later.
          </div>
        )}

        <button
          onClick={onProgress}
          className="w-full border-2 border-[#2d5a3f] text-[#2d5a3f] hover:bg-[#2d5a3f] hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors cursor-pointer"
        >
          Browse All Trees
        </button>
      </div>
    </div>
  )
}
