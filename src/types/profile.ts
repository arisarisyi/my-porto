export type PortfolioMode = 'SE' | 'PENTEST'

export interface CV {
  title: string
  url: string
  description: string
}

export interface ModeMetadata {
  mode: PortfolioMode
  title: string
  tagline: string
  accentColor: string
  accentHover: string
  heroSummary: string
}

export interface PersonalInfo {
  name: string
  title: string
  location: string
  phone: string
  email: string
  github: string
  linkedin: string
  medium: string
  summary: string
  photo?: string
  cvUrl?: string
  cvs?: CV[]
}

export interface Skill {
  name: string
  level?: string
}

export interface SkillCategory {
  category: string
  skills: Skill[]
  modes?: PortfolioMode[]
}

export interface Experience {
  id: string
  role: string
  company: string
  location?: string
  period: string
  highlights: string[]
  modes?: PortfolioMode[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: "Security" | "Observability" | "Backend" | "Infrastructure"
  link?: string
  modes?: PortfolioMode[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date?: string
  credentialId?: string
  link?: string
  modes?: PortfolioMode[]
}

export interface Education {
  degree: string
  university: string
  period: string
}

export interface SocialLink {
  name: "GitHub" | "LinkedIn" | "Medium"
  url: string
  icon: string
}

export interface NavigationItem {
  label: string
  href: string
}
