import { useMemo } from 'react'
import { useMode } from '../contexts/ModeContext'
import { experiences, projects, skills, certifications } from '../data/profile'

export function useModeData() {
  const { mode } = useMode()

  return {
    experiences: useMemo(() =>
      experiences.filter(exp => !exp.modes || exp.modes.includes(mode))
    , [mode]),

    projects: useMemo(() =>
      projects.filter(proj => !proj.modes || proj.modes.includes(mode))
    , [mode]),

    skills: useMemo(() =>
      skills.filter(skill => !skill.modes || skill.modes.includes(mode))
    , [mode]),

    certifications: useMemo(() =>
      certifications.filter(cert => !cert.modes || cert.modes.includes(mode))
    , [mode]),
  }
}
