import { Code, Shield } from 'lucide-react'
import { useMode } from '../../contexts/ModeContext'
import { modeMetadata, personalInfo } from '../../data/profile'

export function ModeSelection() {
  const { selectMode } = useMode()

  const handleSEClick = () => {
    console.log('SE clicked')
    selectMode('SE')
  }

  const handlePentestClick = () => {
    console.log('PENTEST clicked')
    selectMode('PENTEST')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 relative z-50">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-slate-400 text-lg">
            Which side of my work would you like to see?
          </p>
        </div>

        {/* Mode Selection */}
        <div className="space-y-4">
          {/* Software Engineer */}
          <button
            onClick={handleSEClick}
            type="button"
            className="w-full text-left group relative bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all hover:bg-slate-900/80 cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                  Software Engineer
                </h2>
                <p className="text-slate-400 text-sm">
                  {modeMetadata.SE.tagline}
                </p>
              </div>
            </div>
          </button>

          {/* Penetration Tester */}
          <button
            onClick={handlePentestClick}
            type="button"
            className="w-full text-left group relative bg-slate-900/50 border border-slate-800 hover:border-red-500/50 rounded-xl p-6 transition-all hover:bg-slate-900/80 cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1 group-hover:text-red-400 transition-colors">
                  Penetration Tester
                </h2>
                <p className="text-slate-400 text-sm">
                  {modeMetadata.PENTEST.tagline}
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-500 text-sm mt-12">
          You can switch perspectives anytime from the navigation
        </p>
      </div>
    </div>
  )
}
