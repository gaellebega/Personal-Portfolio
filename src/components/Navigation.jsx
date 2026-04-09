import { Link } from "react-router-dom"
function Navigation() {
  return (
    <nav className="border border-gray-700 p-4 h-16 relative ">
      <div className="inset-0 absolute flex items-center h-full divide-x divide-gray-700 ">
        <div className=" flex items-center text-[#2f435f] px-4 h-full">
          <Link to="/"><p>ishami-gaelle-bega</p></Link>
        </div>
        <Link to="/" className="  flex items-center h-full">_home</Link>
        <Link to="/about" className="  flex items-center px-4 hover:underline decoration-3 hover:decoration-amber-400 h-full ">_about-me</Link>
        <Link to="/projects" className="px-4 flex items-center h-full" >_projects</Link>
        <Link to="/contact" className="px-4 flex items-center h-full">_contact-me</Link>
      </div>

    </nav>

  )
}
export default Navigation