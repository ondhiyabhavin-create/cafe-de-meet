import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DarkModeStore {
  isDark: boolean
  toggle: () => void
}

export const useDarkMode = create<DarkModeStore>()(
  persist(
    (set) => ({
      isDark: false,
      toggle: () => {
        set((state) => {
          const newState = !state.isDark
          if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark', newState)
          }
          return { isDark: newState }
        })
      },
    }),
    {
      name: 'cafe-dark-mode',
      onRehydrateStorage: () => (state) => {
        if (state && typeof window !== 'undefined') {
          document.documentElement.classList.toggle('dark', state.isDark)
        }
      },
    }
  )
)

