import type {
  PersonalInfo,
  SkillCategory,
  Experience,
  Project,
  Certification,
  Education,
  SocialLink,
  NavigationItem,
} from "../types/profile"

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Imam Al Arisyi",
  title: "Backend & Platform Engineer / Penetration Tester",
  location: "Bontang, Indonesia",
  phone: "+62 857 0679 1704",
  email: "alarisyi@gmail.com",
  github: "https://github.com/arisarisyi",
  linkedin: "https://linkedin.com/in/imam-al-arisyi",
  summary:
    "Backend & Platform Engineer with 3+ years of experience designing secure, distributed, and cloud-ready systems. Specialized in authentication platforms (OAuth2/JWKS), service communication (gRPC/Kafka), observability (Prometheus/Grafana), and infrastructure security monitoring (Wazuh/Suricata). Strong focus on scalability, reliability, and developer experience.",
  photo: "/me.jpeg",
  cvUrl: "/cv.pdf",
  medium: "https://medium.com/@arisarisyi",
}

// Navigation Items
export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

// Skills grouped by category
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript" },
      { name: "Go" },
      { name: "Rust" },
      { name: "Java" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS" },
      { name: "Express" },
      { name: "Fiber" },
      { name: "Spring Boot" },
      { name: "gRPC" },
      { name: "Kafka" },
    ],
  },
  {
    category: "Security",
    skills: [
      { name: "OAuth2" },
      { name: "JWT/JWKS" },
      { name: "RBAC" },
      { name: "OWASP" },
      { name: "eJPT methodology" },
    ],
  },
  {
    category: "Cloud/Infra",
    skills: [
      { name: "Docker" },
      { name: "Linux" },
      { name: "Ansible" },
      { name: "Redis" },
      { name: "GitHub Actions" },
    ],
  },
  {
    category: "Observability",
    skills: [
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Structured Logging" },
    ],
  },
  {
    category: "SIEM/IDS",
    skills: [{ name: "Wazuh Manager" }, { name: "Suricata IDS" }],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Secure SDLC" },
      { name: "DevSecOps" },
      { name: "Distributed Systems" },
    ],
  },
]

// Professional Experience
export const experiences: Experience[] = [
  {
    id: "1",
    role: "Backend & DevSecOps Engineer",
    company: "PT Putra Perkasa Abadi (PPA)",
    period: "Apr 2024 – Present",
    highlights: [
      "Designed microservices using gRPC and Kafka, improving reliability and scalability across 10+ internal workloads.",
      "Built OAuth2/JWT/JWKS-based authentication platform integrated with 10+ applications, reducing login failures and password-reset incidents by ~40%.",
      "Implemented Prometheus + Grafana observability for infrastructure, PM2-based workloads, and database performance monitoring (MySQL/PostgreSQL), accelerating diagnostic workflows.",
      "Architected and deployed Wazuh SIEM with Suricata IDS across 40+ production servers, improving threat detection and audit visibility.",
    ],
  },
  {
    id: "2",
    role: "Software Developer",
    company: "PT Kaltim Adhiguna Dermaga",
    period: "Sep 2023 – Apr 2024",
    highlights: [
      "Developed secure backend APIs supporting authentication and RBAC, improving access governance and audit compliance.",
      "Enhanced operational workflows by modernizing internal tools and reducing manual processing time.",
    ],
  },
  {
    id: "3",
    role: "Software Developer",
    company: "PT Intersolusi Teknologi Asia (BTS.id)",
    period: "Oct 2022 – Jun 2023",
    highlights: [
      "Built scalable full-stack platforms using NestJS and Angular, improving maintainability and deployment reliability.",
      "Migrated storage systems to AWS S3, increasing durability and reducing outages caused by on-prem storage failures.",
    ],
  },
  {
    id: "4",
    role: "Frontend Developer (Outsourced to TechMahindra)",
    company: "",
    period: "Nov 2022 – Dec 2022",
    highlights: [
      "Delivered responsive Angular interfaces in a production environment, collaborating with QA teams through SIT & UAT.",
    ],
  },
]

// Projects
export const projects: Project[] = [
  {
    id: "1",
    title: "SSO Platform (OAuth2/JWKS)",
    description:
      "Built an authentication platform integrated with 10+ internal applications, improving security consistency and enabling centralized identity.",
    technologies: ["OAuth2", "JWT", "JWKS", "NestJS", "TypeScript"],
    category: "Security",
  },
  {
    id: "2",
    title: "Security Monitoring Platform (Wazuh + Suricata)",
    description:
      "Deployed SIEM/IDS solution across 40+ production servers, enabling real-time detection of anomalies and strengthening audit visibility.",
    technologies: ["Wazuh", "Suricata", "Linux", "Security Monitoring"],
    category: "Security",
  },
  {
    id: "3",
    title: "Prometheus + Grafana Observability Stack",
    description:
      "Implemented infrastructure and database performance monitoring for PM2 workloads, MySQL, and PostgreSQL, improving troubleshooting efficiency.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "MySQL Exporter",
      "PostgreSQL Exporter",
    ],
    category: "Observability",
  },
  {
    id: "4",
    title: "Fleet Telemetry Platform",
    description:
      "Real-time telemetry ingestion using MQTT, Redis, and WebSockets, supporting operational dashboards for mining operations.",
    technologies: [
      "MQTT",
      "Redis",
      "WebSockets",
      "Node.js",
      "Real-time Processing",
    ],
    category: "Backend",
  },
  {
    id: "5",
    title: "HRIS Microservices",
    description:
      "Modernized HRIS functions using NestJS, Redis, and Kafka, improving scalability and performance.",
    technologies: ["NestJS", "Microservices", "Redis", "Kafka", "PostgreSQL"],
    category: "Backend",
  },
]

// Certifications
export const certifications: Certification[] = [
  {
    id: "1",
    title: "eJPT — eLearnSecurity Junior Penetration Tester",
    issuer: "INE Security",
  },
  {
    id: "2",
    title: "Certified Junior Web Penetration Tester (CJWPT)",
    issuer: "Hack & Fix",
    link: "https://academy.hackandfix.com/certificate-page/?user=23224&course=54294",
  },
  {
    id: "3",
    title: "ICCA — INE Certified Cloud Associate",
    issuer: "INE",
    link: "https://certs.ine.com/f0feff03-8c42-473e-812b-78b98a4d86ad?record_view=true",
  },
  {
    id: "4",
    title: "ACE Multicloud Network Associate",
    issuer: "Aviatrix",
    link: "https://www.credly.com/badges/a38ede93-52f6-4f79-ac6b-6e70a4a7ed2c/public_url",
  },
  {
    id: "5",
    title: "ISO/IEC 27001:2022 Information Security Associate™",
    issuer: "Skillfront",
    link: "https://www.skillfront.com/Badges/05417632696799",
  },
]

// Education
export const education: Education = {
  degree: "Bachelor of Engineering in Informatics",
  university: "Hasyim Asy'ari University Tebuireng",
  period: "2015 – 2019",
}

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/arisarisyi",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/imam-al-arisyi",
    icon: "linkedin",
  },
  {
    name: "Medium",
    url: "https://medium.com/@arisarisyi",
    icon: "medium",
  },
]
