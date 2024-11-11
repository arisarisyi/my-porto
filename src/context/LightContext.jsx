import { createContext, useContext, useState } from "react"

const LightContext = createContext()

export const LightProvider = ({ children }) => {
  const [light, setLight] = useState(false)

  const toggleLight = () => setLight((prevLight) => !prevLight)

  return (
    <LightContext.Provider value={{ light, toggleLight }}>
      {children}
    </LightContext.Provider>
  )
}

export const useLight = () => {
  const context = useContext(LightContext)
  if (context === undefined) {
    throw new Error("useLight must be used within a LightProvider")
  }
  return context
}
