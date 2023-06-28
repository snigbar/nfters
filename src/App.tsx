import Navbar from "./Components/Navbar/Navbar"
import useMediaQuery from "./Hooks/useMediaQuery"
import react, {useState} from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { flexColCenter } from "./Utilities"
import SideNav from "./Components/Navbar/SideNav";


function App() {

  const isAboveMedia:boolean = useMediaQuery("(min-width:1060px)")

  const [menuToggle, setMenuToggle] = useState<boolean>(false)
console.log(menuToggle)
  

  return (
 
      <div id="app" className="px-4 md:px-10 lg:px-14 xl:px-24 relative">
     {menuToggle && !isAboveMedia && <SideNav setMenuToggle={setMenuToggle} menuToggle={menuToggle}></SideNav>}

      <Navbar isAboveMedia={isAboveMedia} setMenuToggle={setMenuToggle} menuToggle={menuToggle}></Navbar>
      

      </div>
      
  )
}

export default App
