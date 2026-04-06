
import Projects from "./components/Projects"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar stays at the top */}
      <Navigation/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/* Hero section centered */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">IGB Portfolio 🚀</h1>
      </div>
    </div>
  )
}

export default App