import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import { useLight } from "./context/LightContext"

import { useEffect, useState } from "react"
import { spiral } from "ldrs"
import { Certifications } from "./components/Certifications"

const App = () => {
  spiral.register()
  const { light } = useLight()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2300)
  }, [])
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <l-spiral size="40" speed="0.9" color="white"></l-spiral>
      </div>
    )
  }

  return (
    <div
      className={`overflow-x-hidden ${
        light ? "text-stone-800" : "text-stone-300"
      } antialiased transition-colors duration-500 ease-in-out`}
    >
      <div className="fixed inset-0 -z-10">
        <div
          className={`relative h-full w-full ${
            light ? "bg-sky-100" : "bg-slate-950"
          } transition-colors duration-500 ease-in-out`}
        >
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </div>
    </div>
  )
}

export default App
