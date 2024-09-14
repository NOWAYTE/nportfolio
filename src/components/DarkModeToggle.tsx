'use client'
import { useState, useEffect } from 'react'

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button 
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
    >
      {darkMode ? '🔆' : '🌙'}
    </button>
  )
}