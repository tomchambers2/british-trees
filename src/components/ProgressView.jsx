import { TREES } from '../data/trees'
import { loadProgress } from '../lib/storage'

function getStatus(cardState) {
  if (!cardState) return 'new'
  if (cardState.interval > 21) return 'known'
  return 'learning'
}

function getNextReview(cardState) {
  if (!cardState?.dueDate) return null
  const due = new Date(cardState.dueDate)
  const now = new Date()
  const diffMs = due - now
  if (diffMs <= 0) return 'Due now'
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 1) return 'Due tomorrow'
  return `Due in ${diffDays} days`
}

const statusColors = {
  known: { bg: 'bg-green-100', border: 'border-green-300', dot: 'bg-green-500', text: 'text-green-700' },
  learning: { bg: 'bg-yellow-50', border: 'border-yellow-300', dot: 'bg-yellow-500', text: 'text-yellow-700' },
  new: { bg: 'bg-gray-50', border: 'border-gray-300', dot: 'bg-gray-400', text: 'text-gray-500' },
}

export default function ProgressView({ onHome }) {
  const progress = loadProgress()

  const known = TREES.filter(t => getStatus(progress[t.id]) === 'known').length
  const learning = TREES.filter(t => getStatus(progress[t.id]) === 'learning').length
  const newCount = TREES.filter(t => getStatus(progress[t.id]) === 'new').length

  return (
    <div className="min-h-screen pb-8">
      <div className="sticky top-0 bg-[#1a3a2a] text-white px-4 py-3 flex items-center z-10">
        <button onClick={onHome} className="mr-3 text-xl cursor-pointer">←</button>
        <h1 className="text-lg font-bold">All Trees</h1>
      </div>

      <div className="flex justify-center gap-3 px-4 py-4">
        <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">{known} known</span>
        <span className="text-sm font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">{learning} learning</span>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{newCount} new</span>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4">
        {TREES.map(tree => {
          const status = getStatus(progress[tree.id])
          const colors = statusColors[status]
          const review = getNextReview(progress[tree.id])

          return (
            <div
              key={tree.id}
              className={`${colors.bg} border ${colors.border} rounded-xl p-3 relative`}
            >
              <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${colors.dot}`} />
              <h3 className="font-semibold text-sm text-[#1a3a2a] pr-4">{tree.commonName}</h3>
              <p className="text-xs italic text-[#5d4037] mb-1">{tree.latinName}</p>
              <p className={`text-xs ${colors.text}`}>
                {status === 'new' ? 'Not yet studied' : status === 'known' ? 'Mastered' : review}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
