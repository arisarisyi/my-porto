import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { PortfolioMode } from '../types/profile'

interface ModeContextType {
  mode: PortfolioMode
  setMode: (mode: PortfolioMode) => void
  toggleMode: () => void
  isModeSelected: boolean
  selectMode: (mode: PortfolioMode) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<PortfolioMode>(() => {
    const saved = localStorage.getItem('portfolioMode') as PortfolioMode | null
    return saved || 'SE'
  })

  const [isModeSelected, setIsModeSelected] = useState(() => {
    return localStorage.getItem('modeSelected') === 'true'
  })

  useEffect(() => {
    if (isModeSelected) {
      localStorage.setItem('portfolioMode', mode)

      // Update scrollbar CSS variable based on mode
      if (mode === 'SE') {
        document.documentElement.style.setProperty('--scrollbar-thumb', '6 182 212') // cyan-600
        document.documentElement.style.setProperty('--scrollbar-thumb-hover', '8 145 178') // cyan-700
      } else {
        document.documentElement.style.setProperty('--scrollbar-thumb', '220 38 38') // red-600
        document.documentElement.style.setProperty('--scrollbar-thumb-hover', '185 28 28') // red-700
      }
    }
  }, [mode, isModeSelected])

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode)
  }

  const selectMode = (selectedMode: PortfolioMode) => {
    setModeState(selectedMode)
    setIsModeSelected(true)
    localStorage.setItem('modeSelected', 'true')
    localStorage.setItem('portfolioMode', selectedMode)
  }

  const toggleMode = () => {
    setModeState(prev => prev === 'SE' ? 'PENTEST' : 'SE')
  }

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, isModeSelected, selectMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const context = useContext(ModeContext)
  if (!context) throw new Error('useMode must be used within ModeProvider')
  return context
}
