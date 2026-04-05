const STORAGE_KEY = 'british-trees-progress'

export function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return {}
  return JSON.parse(raw)
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function getCardState(treeId) {
  const progress = loadProgress()
  return progress[treeId] || null
}

export function updateCardState(treeId, state) {
  const progress = loadProgress()
  progress[treeId] = state
  saveProgress(progress)
}

export function getDefaultCardState() {
  return {
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
    dueDate: null,
  }
}
