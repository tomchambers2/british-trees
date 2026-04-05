export function calculateNextReview(card, quality) {
  let { interval, easeFactor, repetitions } = card

  if (quality >= 3) {
    if (repetitions === 0) interval = 1
    else if (repetitions === 1) interval = 6
    else interval = Math.round(interval * easeFactor)

    repetitions += 1
    easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  } else {
    repetitions = 0
    interval = 1
    easeFactor = Math.max(1.3, easeFactor - 0.2)
  }

  const dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + interval)

  return { interval, easeFactor, repetitions, dueDate: dueDate.toISOString() }
}

export function isDue(card) {
  if (!card.dueDate) return true
  return new Date(card.dueDate) <= new Date()
}
