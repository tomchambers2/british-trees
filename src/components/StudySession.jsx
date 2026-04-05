import { useState, useMemo } from 'react'
import { TREES } from '../data/trees'
import { loadProgress, updateCardState, getDefaultCardState } from '../lib/storage'
import { calculateNextReview, isDue } from '../lib/sm2'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function PhotoPlaceholder({ treeName, photoType }) {
  return (
    <div className="w-full aspect-[4/3] bg-[#e8e0d0] flex flex-col items-center justify-center rounded-xl">
      <div className="text-4xl mb-2">🌿</div>
      <div className="text-sm text-[#5d4037] font-medium">Photo unavailable</div>
      <div className="text-xs text-[#8d6e63] mt-1">{treeName} — {photoType}</div>
    </div>
  )
}

function CompletionScreen({ results, onHome }) {
  const correct = results.filter(r => r.correct).length
  const incorrect = results.length - correct

  const progress = loadProgress()
  const nextDue = Object.values(progress)
    .filter(p => p.dueDate)
    .map(p => new Date(p.dueDate))
    .sort((a, b) => a - b)[0]

  let nextReviewText = 'No reviews scheduled'
  if (nextDue) {
    const diffMs = nextDue - new Date()
    if (diffMs <= 0) {
      nextReviewText = 'More cards due now!'
    } else {
      const diffHours = Math.ceil(diffMs / (1000 * 60 * 60))
      if (diffHours < 24) nextReviewText = `Next review in ${diffHours} hours`
      else nextReviewText = `Next review in ${Math.ceil(diffHours / 24)} days`
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="text-center max-w-sm w-full">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-[#1a3a2a] mb-2">Session Complete!</h2>
        <div className="flex justify-center gap-6 mb-6">
          <div>
            <div className="text-3xl font-bold text-green-600">{correct}</div>
            <div className="text-sm text-gray-500">Correct</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">{incorrect}</div>
            <div className="text-sm text-gray-500">Incorrect</div>
          </div>
        </div>
        <p className="text-[#5d4037] mb-8">{nextReviewText}</p>
        <button
          onClick={onHome}
          className="w-full bg-[#2d5a3f] hover:bg-[#1a3a2a] text-white font-semibold py-4 px-6 rounded-xl text-lg transition-colors cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default function StudySession({ onHome }) {
  const cards = useMemo(() => {
    const progress = loadProgress()
    const dueCards = []
    const newCards = []

    for (const tree of TREES) {
      const state = progress[tree.id]
      if (!state) {
        newCards.push(tree)
      } else if (isDue(state)) {
        dueCards.push(tree)
      }
    }

    const selectedNew = newCards.slice(0, 5)
    return shuffle([...dueCards, ...selectedNew])
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [results, setResults] = useState([])

  const currentCard = cards[currentIndex]

  const { photo, options } = useMemo(() => {
    if (!currentCard) return { photo: null, options: [] }
    const photo = currentCard.photos[Math.floor(Math.random() * currentCard.photos.length)]
    const otherTrees = TREES.filter(t => t.id !== currentCard.id)
    const distractors = shuffle(otherTrees).slice(0, 3)
    const options = shuffle([currentCard, ...distractors])
    return { photo, options }
  }, [currentCard])

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-xl font-bold text-[#1a3a2a] mb-2">No cards due!</h2>
        <p className="text-[#5d4037] mb-6">Come back later for your next review.</p>
        <button onClick={onHome} className="bg-[#2d5a3f] text-white font-semibold py-3 px-6 rounded-xl cursor-pointer">
          Back to Home
        </button>
      </div>
    )
  }

  if (currentIndex >= cards.length) {
    return <CompletionScreen results={results} onHome={onHome} />
  }

  const isCorrect = selectedAnswer === currentCard.id

  function handleAnswer(treeId) {
    if (showFeedback) return
    setSelectedAnswer(treeId)
    setShowFeedback(true)

    const correct = treeId === currentCard.id
    const progress = loadProgress()
    const currentState = progress[currentCard.id] || getDefaultCardState()
    const quality = correct ? 4 : 1
    const newState = calculateNextReview(currentState, quality)
    updateCardState(currentCard.id, newState)

    setResults(prev => [...prev, { treeId: currentCard.id, correct }])
  }

  function handleContinue() {
    setCurrentIndex(i => i + 1)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setImgError(false)
  }

  const typeBadge = photo?.type?.toUpperCase() || 'PHOTO'

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-[#1a3a2a] text-white px-4 py-3 flex items-center z-10">
        <button onClick={onHome} className="mr-3 text-xl cursor-pointer">←</button>
        <h1 className="text-lg font-bold flex-1">Study</h1>
        <span className="text-sm opacity-80">{currentIndex + 1} / {cards.length}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full bg-[#4a8c5c] transition-all duration-300"
          style={{ width: `${((currentIndex) / cards.length) * 100}%` }}
        />
      </div>

      {/* Photo */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          {imgError ? (
            <PhotoPlaceholder treeName={currentCard.commonName} photoType={typeBadge} />
          ) : (
            <img
              src={photo.url}
              alt="Tree identification photo"
              className="w-full aspect-[4/3] object-cover rounded-xl"
              onError={() => setImgError(true)}
            />
          )}
          <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
            {typeBadge}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-[#1a3a2a] text-center">What tree is this?</h2>
      </div>

      {/* Options */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {options.map(tree => {
          let btnClass = 'border-2 border-[#d4c9b0] bg-white text-[#1a3a2a]'
          if (showFeedback) {
            if (tree.id === currentCard.id) {
              btnClass = 'border-2 border-green-500 bg-green-50 text-green-800'
            } else if (tree.id === selectedAnswer) {
              btnClass = 'border-2 border-red-500 bg-red-50 text-red-800'
            } else {
              btnClass = 'border-2 border-gray-200 bg-gray-50 text-gray-400'
            }
          }

          return (
            <button
              key={tree.id}
              onClick={() => handleAnswer(tree.id)}
              disabled={showFeedback}
              className={`${btnClass} rounded-xl py-3 px-3 text-sm font-semibold transition-all cursor-pointer disabled:cursor-default`}
            >
              {tree.commonName}
            </button>
          )
        })}
      </div>

      {/* Feedback panel */}
      {showFeedback && (
        <div className={`mx-4 mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{isCorrect ? '✓' : '✗'}</span>
            <span className="font-bold text-[#1a3a2a]">{currentCard.commonName}</span>
            <span className="text-sm italic text-[#5d4037]">{currentCard.latinName}</span>
          </div>
          {photo.caption && (
            <p className="text-sm text-[#5d4037] mb-2 italic">{photo.caption}</p>
          )}
          <p className="text-sm text-[#3e2723]">{currentCard.fact}</p>
          <div className="mt-2">
            <span className="inline-block text-xs bg-[#e8e0d0] text-[#5d4037] px-2 py-1 rounded-full">
              {currentCard.habitat}
            </span>
          </div>
        </div>
      )}

      {/* Continue button */}
      {showFeedback && (
        <div className="px-4 py-4 mt-auto">
          <button
            onClick={handleContinue}
            className="w-full bg-[#2d5a3f] hover:bg-[#1a3a2a] text-white font-semibold py-4 rounded-xl text-lg transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  )
}
