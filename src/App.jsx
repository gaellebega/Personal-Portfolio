import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        {/* Navbar stays at the top */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        {/* Hero section centered */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold">IGB Portfolio 🚀</h1>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App