import project1 from "../assets/projects/logistic.png"
import project2 from "../assets/projects/fuel.png"
import project4 from "../assets/projects/3care.png"
import project3 from "../assets/projects/project-4.webp"

export const HERO_CONTENT = `A versatile software developer with over 2 years of experience in both startups and the mining industry. Skilled in frontend and backend development, with a Bachelor's degree in Informatics.
Engineering from Hasyim Asy'ari Tebuireng University. Open-minded and adaptable, I excel in both individual and team environments. A quick learner with a strong commitment to continuous personal and professional growth.`

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`

export const EXPERIENCES = [
  {
    year: "April 2024 - Present",
    role: "Software Engineer",
    company: "PT Putra Perkasa Abadi (Site BIB) - Angsana, Indonesia",
    description: `Implemented microservices architecture by transforming the existing monolithic application, resulting in improved scalability and maintainability. Integrated file uploads with MinIO and AWS S3, optimizing file storage and access across different cloud platforms. Standardized codebase by applying Clean Code principles from Robert C. Martin's book improving readability, maintainability, and collaboration across teams.Developed push notification functionality using OneSignal, ensuring efficient communication and engagement with users. Integrated microservices with a Kafka message broker, facilitating seamless communication between distributed services. Enhanced technology stack with scalable solutions to support growing business needs and ensure long-term system performance. Implemented authentication security using JWT (JSON Web Token) with role-based access control and applied rate limiting to protect against abuse. Deployed applications on Linux-based servers using Apache2, ensuring smooth and secure operations in production environments.`,
    technologies: [
      "NestJs",
      "Express",
      "Postgres",
      "Typescript",
      "Javascript",
      "MySQL",
      "MongoDb",
      "Redis",
      "Kafka",
    ],
  },
  {
    year: "September 2023 - April 2024",
    role: "Software Engineer",
    company: "PT Kaltim Adhiguna Dermaga - Bontang, Indonesia",
    description: `Developed full-stack applications tailored to the company’s specific requirements, delivering both backend and frontend solutions. Integrated backend and frontend applications to ensure seamless communication and optimal performance. Implemented authentication security using JWT (JSON Web Token) with role-based access control and applied rate limiting to protect against abuse.`,
    technologies: [
      "NestJs",
      "Angular",
      "Express",
      "Postgres",
      "Typescript",
      "Javascript",
      "Redis",
    ],
  },
  {
    year: "October 2022 - June 2023",
    role: "Software Engineer",
    company: "PT Intersolusi Teknologi Asia(BTS.id) - Bandung, Indonesia",
    description: `Developed full-stack applications tailored to the company’s specific requirements, delivering both backend and frontend solutions Integrated backend and frontend applications to ensure seamless communication and optimal performance. Implemented authentication security using JWT (JSON Web Token) with role-based access control and applied rate limiting to protect against abuse. Integrated file uploads with MinIO and AWS S3, optimizing file storage and access across different cloud platforms.`,
    technologies: [
      "NestJs",
      "Angular",
      "Express",
      "Postgres",
      "Typescript",
      "Javascript",
      "Redis",
    ],
  },
  {
    year: "November 2022 - Desember 2022",
    role: "Frontend Developer",
    company: "Tech Mahindra - Jakarta, Indonesia (Outsourcing from BTS.id)",
    description: `Developed responsive web pages using Angular, ensuring optimal user experience across different devices and screen sizes Collaborated closely with the UI/UX team to implement design solutions that enhance usability and aesthetics. Ensured application stability by thoroughly testing and validating functionality post-SIT (System Integration Testing) and UAT (User Acceptance Testing).`,
    technologies: ["Angular", "Typescript"],
  },
]

export const PROJECTS = [
  {
    title: "Logistic Management",
    image: project1,
    description: `Logistic management is an application for inventory tracking of goods in the procurement division.`,
    technologies: [
      "NestJs",
      "Angular",
      "Express",
      "Postgres",
      "Typescript",
      "Javascript",
      "Redis",
    ],
  },
  {
    title: `Fuel Managament`,
    image: project2,
    description: `Fuel management is an application for recording the incoming fuel from suppliers and the fuel consumption of company vehicles, accompanied by monthly reports.`,
    technologies: [
      "NestJs",
      "Angular",
      "Express",
      "Postgres",
      "Typescript",
      "Javascript",
      "Redis",
    ],
  },
  {
    title: "3 Care",
    image: project4,
    description: `3 care is a web that contains information about tri cards and receives complaints from its users. (Outsourcing in Tech Mahindra) https://online.tri.co.id/?src=he`,
    technologies: ["HTML", "CSS", "Angular"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Tailwinds"],
  // },
]

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+62 857 0679 1704",
  email: "alarisyi@gmail.com",
}
