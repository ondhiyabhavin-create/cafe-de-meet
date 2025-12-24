'use client'

import { useEffect, useState } from 'react'
import { useDarkMode } from '@/store/useDarkMode'

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { isDark } = useDarkMode()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDark)
    }
  }, [isDark, mounted])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}

