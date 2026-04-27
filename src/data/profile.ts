import type {
  PersonalInfo,
  SkillCategory,
  Experience,
  Project,
  Certification,
  Education,
  SocialLink,
  NavigationItem,
  ModeMetadata,
  PortfolioMode,
} from "../types/profile"

// Mode Metadata Configuration
export const modeMetadata: Record<PortfolioMode, ModeMetadata> = {
  SE: {
    mode: 'SE',
    title: 'Backend & Platform Engineer',
    tagline: 'Building scalable, secure distributed systems',
    accentColor: '#06b6d4',
    accentHover: '#0891b2',
    heroSummary: 'Backend & Platform Engineer with nearly 4 years of experience specializing in scalable microservices, secure enterprise authentication, and distributed cloud architectures. Expert in Node.js/TypeScript ecosystem with a strong focus on event-driven design (Kafka, gRPC), infrastructure observability, and high-performance system tuning. Security-conscious developer holding an eJPT certification, bridging the gap between robust software engineering and proactive threat mitigation. Continually expanding technical depth into systems programming (Rust) for performance-critical applications.',
  },
  PENTEST: {
    mode: 'PENTEST',
    title: 'Offensive Security Professional',
    tagline: 'Breaking systems to make them stronger',
    accentColor: '#ef4444',
    accentHover: '#dc2626',
    heroSummary: 'Offensive Security Professional and Backend Engineer with a proven track record of building and breaking distributed systems. Certified eJPT (100% Web Application Pentesting score) with deep expertise in secure architecture, identity management (OAuth2/JWT), and infrastructure monitoring. Leverages 3+ years of software development experience to deeply understand backend vulnerabilities, bypass enterprise defenses, and execute advanced network pivoting and exploitation.',
  },
}

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
  cvUrl: "/cv-se.pdf",
  cvs: [
    {
      title: "Software Engineer CV",
      url: "/cv-se.pdf",
      description: "Backend & Platform Engineer focused on microservices, authentication, and distributed systems"
    },
    {
      title: "Penetration Tester CV",
      url: "/Imam-al-arisyi-security.pdf",
      description: "Offensive Security Professional specializing in web & network penetration testing"
    }
  ],
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
      { name: "Java" },
    ],
    modes: ['SE', 'PENTEST'],
  },
  {
    category: "Backend & Arch",
    skills: [
      { name: "NestJS" },
      { name: "Express" },
      { name: "Microservices" },
      { name: "gRPC" },
      { name: "Kafka" },
    ],
    modes: ['SE', 'PENTEST'],
  },
  {
    category: "Offensive Security",
    skills: [
      { name: "Web Exploitation" },
      { name: "Network Pivoting" },
      { name: "Privilege Escalation" },
      { name: "Penetration Testing Methodology" },
    ],
    modes: ['PENTEST'],
  },
  {
    category: "Security Tools",
    skills: [
      { name: "Metasploit" },
      { name: "SQLMap" },
      { name: "Burp Suite" },
      { name: "Nmap" },
      { name: "Gobuster" },
      { name: "Amass" },
    ],
    modes: ['PENTEST'],
  },
  {
    category: "Identity & Access",
    skills: [
      { name: "OAuth2" },
      { name: "JWT/JWKS" },
      { name: "RBAC" },
      { name: "Active Directory" },
    ],
    modes: ['SE', 'PENTEST'],
  },
  {
    category: "Defensive & Cloud",
    skills: [
      { name: "Wazuh SIEM" },
      { name: "Suricata IDS" },
      { name: "GCP" },
      { name: "Docker" },
      { name: "Ansible" },
    ],
    modes: ['SE', 'PENTEST'],
  },
  {
    category: "Observability",
    skills: [
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Structured Logging" },
    ],
    modes: ['SE'],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
    modes: ['SE'],
  },
]

// Professional Experience
export const experiences: Experience[] = [
  {
    id: "1",
    role: "Backend & System Developer Engineer",
    company: "PT Putra Perkasa Abadi (PPA)",
    period: "Apr 2024 – Present",
    modes: ['SE', 'PENTEST'],
    highlights: [
      "Designed and scaled Node.js-based microservices utilizing NestJS, gRPC, and Kafka, significantly improving system reliability and fault tolerance across 10+ internal workloads.",
      "Architected a centralized OAuth2/JWT/JWKS authentication platform integrated with 10+ corporate applications, reducing login failures and standardizing identity access management.",
      "Implemented comprehensive observability stacks (Prometheus + Grafana) for Node.js workloads (PM2) and database layers (MySQL/PostgreSQL), accelerating diagnostic workflows and incident response.",
      "Architected and deployed Wazuh SIEM with Suricata IDS across 40+ production servers, fortifying infrastructure security and ensuring continuous audit compliance.",
    ],
  },
  {
    id: "2",
    role: "Software Developer",
    company: "PT Kaltim Adhiguna Dermaga",
    period: "Sep 2023 – Apr 2024",
    modes: ['SE', 'PENTEST'],
    highlights: [
      "Engineered secure backend APIs using Node.js (NestJS) featuring advanced authentication and Role-Based Access Control (RBAC), directly improving data governance.",
      "Optimized operational workflows by modernizing legacy internal tools, streamlining data processing, and reducing manual operational overhead.",
    ],
  },
  {
    id: "3",
    role: "Software Developer",
    company: "PT Intersolusi Teknologi Asia (BTS.id)",
    period: "Oct 2022 – Jun 2023",
    modes: ['SE', 'PENTEST'],
    highlights: [
      "Built maintainable, full-stack enterprise platforms utilizing Node.js (NestJS/Express.js) for backend services and Angular for frontend delivery.",
      "Executed zero-downtime migration of critical storage systems to AWS S3, increasing object durability and eliminating outages caused by legacy on-premise storage limits.",
    ],
  },
  {
    id: "4",
    role: "Frontend Developer (Outsourced to Tech Mahindra)",
    company: "",
    period: "Nov 2022 – Dec 2022",
    modes: ['SE'],
    highlights: [
      "Delivered responsive, high-performance Angular interfaces in a fast-paced production environment, coordinating closely with QA teams through rigorous SIT & UAT cycles.",
    ],
  },
]

// Projects
export const projects: Project[] = [
  {
    id: "1",
    title: "Centralized SSO Platform (OAuth2/JWKS)",
    description: "Built an enterprise identity provider from the ground up using OAuth2/JWKS, acting as the single source of truth for authentication across the corporate ecosystem.",
    technologies: ["OAuth2", "JWT", "JWKS", "NestJS", "TypeScript"],
    category: "Security",
    modes: ['SE'],
  },
  {
    id: "2",
    title: "Enterprise Security Monitoring (Wazuh + Suricata)",
    description: "Deployed a complete SIEM/IDS infrastructure. Understanding the configuration of these defensive rulesets directly enhances red team evasion tactics.",
    technologies: ["Wazuh", "Suricata", "Linux", "Security Monitoring"],
    category: "Security",
    modes: ['SE', 'PENTEST'],
  },
  {
    id: "3",
    title: "Prometheus + Grafana Observability Stack",
    description: "Implemented infrastructure and database performance monitoring for PM2 workloads, MySQL, and PostgreSQL, improving troubleshooting efficiency.",
    technologies: [
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "MySQL Exporter",
      "PostgreSQL Exporter",
    ],
    category: "Observability",
    modes: ['SE'],
  },
  {
    id: "4",
    title: "Fleet Telemetry Platform",
    description: "Developed a real-time data ingestion platform for mining operations using Node.js, MQTT, Redis, and WebSockets to power live operational dashboards.",
    technologies: [
      "MQTT",
      "Redis",
      "WebSockets",
      "Node.js",
      "Real-time Processing",
    ],
    category: "Backend",
    modes: ['SE'],
  },
  {
    id: "5",
    title: "Distributed HRIS Microservices",
    description: "Engineered core HR microservices leveraging NestJS, Redis caching, and Kafka message brokers to handle high-throughput employee data processing.",
    technologies: ["NestJS", "Microservices", "Redis", "Kafka", "PostgreSQL"],
    category: "Backend",
    modes: ['SE', 'PENTEST'],
  },
]

// Certifications
export const certifications: Certification[] = [
  {
    id: "1",
    title: "eJPT — eLearnSecurity Junior Penetration Tester",
    issuer: "INE Security",
    link: "https://certs.ine.com/c3c1cb45-704d-4f29-bb60-942d496c8b66#acc.aTqsUeCW",
  },
  {
    id: "2",
    title: "Certified Junior Web Penetration Tester (CJWPT)",
    issuer: "Hack & Fix",
    link: "https://academy.hackandfix.com/certificate-page/?user=23224&course=54294",
  },
  {
    id: "6",
    title: "Certified Web Red Team Analyst (Web-RTA)",
    issuer: "Cyberwarfare",
    link: "https://labs.cyberwarfare.live/credential/achievement/6995cd3cba8390c68e9d4fc5",
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
