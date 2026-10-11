'use client'

import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      className="icon-button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <FiMoon className="theme-icon-light" aria-hidden="true" />
      <FiSun className="theme-icon-dark" aria-hidden="true" />
    </button>
  )
}
