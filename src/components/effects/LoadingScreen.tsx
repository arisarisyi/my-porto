import { useState, useEffect } from "react"
import { Loader2, Terminal } from "lucide-react"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> Initializing system...",
    "> Loading portfolio data...",
    "> Rendering components...",
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTerminalLines((prev) => [...prev, "> System ready!"])
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const lines = [
      "> Connecting to database...",
      "> Fetching projects...",
      "> Compiling skills...",
      "> Optimizing experience...",
    ]

    const interval2 = setInterval(() => {
      setTerminalLines((prev) => {
        if (prev.length >= 7) return prev
        const randomLine = lines[Math.floor(Math.random() * lines.length)]
        return [...prev, randomLine]
      })
    }, 300)

    return () => clearInterval(interval2)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-red-500 font-mono text-xs opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: -20,
              animation: `matrix-fall ${
                2 + Math.random() * 3
              }s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.7
              ? "1"
              : Math.random() > 0.5
              ? "0"
              : ["アイ", "ウ", "エ", "オ"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="bg-gray-900 rounded-lg border border-red-500/30 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono ml-2">
              pentest@redteam:~
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 bg-black/50">
            {/* ASCII Art Logo */}
            <div className="text-red-400 font-mono mb-4 leading-none overflow-x-auto">
              <div className="text-[2px] xs:text-[3px] sm:text-[4px] md:text-[5px] lg:text-[6px] xl:text-[7px] scale-75 xs:scale-90 sm:scale-100 transform origin-left">
                <pre className="whitespace-pre">
                  {`
ooooooooooooo ooooooooo.   oooooo   oooo
8    888    8  888   Y88.   888.   .8
     888       888   .d88.    888. .8
     888       888ooo88P.      888.8.
     888       888 88b.         888.
     888       888   88b.       888
    o888o     o888o  o888o     o888o



oooooo   ooooo       .o.       ooooooooo.   oooooooooo.
 888    888      .888.       888    Y88.  888    Y8b
 888     888      .8.888.      888   .d88.  888      888
 888ooooo888     .8.  888.     888ooo88P.   888      888
 888     888    .88ooo8888.    888 88b.     888      888
 888     888   .8.      888.   888   88b.   888     d88.
o888o   o888o o88o     o8888o o888o  o888o o888bood8P.

`}
                </pre>
              </div>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Imam Al Arisyi
              </span>
            </h1>
            <p className="text-red-400 font-mono text-center mb-6">
              Backend & Platform Engineer / Penetration Tester
            </p>

            {/* Terminal Output */}
            <div className="bg-gray-950 rounded p-3 mb-4 font-mono text-xs h-32 overflow-hidden">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className="text-red-400 mb-1 opacity-0"
                  style={{
                    animation: `type-in 0.3s ease-out ${i * 0.1}s forwards`,
                  }}
                >
                  {line}
                </div>
              ))}
              {progress < 100 && (
                <div className="text-red-400 animate-pulse">
                  {">"} {"█".repeat(Math.floor(progress / 5))}
                  <span className="animate-pulse">▓</span>
                  {"░".repeat(20 - Math.floor(progress / 5))}
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-400 font-mono text-xs flex items-center gap-1">
                <Terminal className="w-3 h-3" />
                INITIALIZING
              </span>
              <span className="text-red-400 font-mono text-xs">
                {progress}%
              </span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>

            {/* Loading Icon */}
            <div className="flex justify-center mt-4">
              <Loader2 className="w-6 h-6 text-red-400 animate-spin" />
            </div>
          </div>
        </div>

        {/* Floating Binary Digits */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-orange-500 font-mono text-xs opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 2
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Math.random() > 0.5 ? "01" : "10"}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
