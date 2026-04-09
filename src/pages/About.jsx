import { RiFigmaLine, RiMacbookLine, RiRobot2Line,RiGlobalLine } from "react-icons/ri"
function About() {
  return (
    <>

        <li>
          <input type="checkbox" class="" />
          <RiRobot2Line className="text-xl" /> 
          <label>AI</label>
        </li >
        <li>
          <input type="checkbox" class="" />
           <RiFigmaLine className="text-xl" />
          <label>UI/UX</label>
        </li >


        <li>
          <input type="checkbox" class="" />
       <RiMacbookLine className="text-xl" />
          <label>Frontend</label>
        </li >

    <li>
    
      <input type="checkbox" class="" />
       <RiGlobalLine className="text-xl" />
      <label>Practice Projects</label>
    </li>
    
    </>
   
  
  )
}
export default About