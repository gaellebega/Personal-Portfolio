import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function Hero(){
  return(
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}
export default Hero;