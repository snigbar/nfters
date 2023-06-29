import Navbar from "./Components/Navbar/Navbar"
import useMediaQuery from "./Hooks/useMediaQuery"
import {useState} from 'react'
import SideNav from "./Components/Navbar/SideNav";
import Header from "./Sections/Header";


function App() {

  const isAboveMedia:boolean = useMediaQuery("(min-width:1060px)")

  const [menuToggle, setMenuToggle] = useState<boolean>(false)
console.log(menuToggle)
  

  return (
 
      <div id="app" className="relative">
        {/* navbar */}
        <div  className="px-4 md:px-10 lg:px-12 xl:px-24">
        {menuToggle && !isAboveMedia && <SideNav setMenuToggle={setMenuToggle} menuToggle={menuToggle}></SideNav>}
        <Navbar isAboveMedia={isAboveMedia} setMenuToggle={setMenuToggle} menuToggle={menuToggle}></Navbar>
        </div>
        {/* main */}
        <hr className="h-[1px] w-full text-gray"></hr>
        <main className="px-4 md:px-10 lg:px-14 xl:px-24">
        <Header></Header>
        </main>
        </div>
      
  )
}

export default App
