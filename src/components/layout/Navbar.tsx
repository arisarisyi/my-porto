import { useState, useEffect } from "react"
import { Menu, X, Repeat, Code, Shield } from "lucide-react"
import { Container } from "./Container"
import { navigationItems } from "../../data/profile"
import { useMode } from "../../contexts/ModeContext"
import type { NavigationItem } from "../../types/profile"

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { mode, toggleMode } = useMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo1.png"
              alt="Imam Al Arisyi Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item: NavigationItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`text-sm font-medium transition-colors ${
                  mode === 'SE' ? 'hover:text-cyan-400' : 'hover:text-red-400'
                } ${
                  activeSection === item.href.slice(1)
                    ? mode === 'SE'
                      ? 'text-cyan-400'
                      : 'text-red-400'
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mode Switcher Button */}
            <button
              onClick={toggleMode}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 transition-all"
              title={`Switch to ${mode === 'SE' ? 'Penetration Tester' : 'Software Engineer'} mode`}
            >
              <Repeat className="w-4 h-4" />
              <span className="text-sm font-medium">
                {mode === 'SE' ? (
                  <Code className="w-4 h-4 inline text-cyan-400" />
                ) : (
                  <Shield className="w-4 h-4 inline text-red-400" />
                )}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-accent-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            {navigationItems.map((item: NavigationItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`block py-2 text-sm font-medium transition-colors ${
                  mode === 'SE' ? 'hover:text-cyan-400' : 'hover:text-red-400'
                } ${
                  activeSection === item.href.slice(1)
                    ? mode === 'SE'
                      ? 'text-cyan-400'
                      : 'text-red-400'
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mode Switcher Button - Mobile */}
            <button
              onClick={() => {
                toggleMode()
                setIsMenuOpen(false)
              }}
              className={`flex items-center gap-2 w-full py-2 text-sm font-medium transition-colors text-slate-300 ${
                mode === 'SE' ? 'hover:text-cyan-400' : 'hover:text-red-400'
              }`}
            >
              <Repeat className="w-4 h-4" />
              <span>
                Switch to {mode === 'SE' ? 'Penetration Tester' : 'Software Engineer'}
              </span>
              {mode === 'SE' ? (
                <Code className="w-4 h-4 inline text-cyan-400 ml-auto" />
              ) : (
                <Shield className="w-4 h-4 inline text-red-400 ml-auto" />
              )}
            </button>
          </div>
        )}
      </Container>
    </nav>
  )
}
