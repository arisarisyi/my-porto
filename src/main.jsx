import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { LightProvider } from "./context/LightContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LightProvider>
      <App />
    </LightProvider>
  </StrictMode>
)
