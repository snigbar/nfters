import { flexRowCenter } from "../../Utilities"
import { RiSearch2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

type props = {
    isAboveMedia: boolean
    menuToggle: boolean
    setMenuToggle: (data:boolean) => void
}

const Navbar = ({isAboveMedia, setMenuToggle, menuToggle}:props) => {
  return (
    <nav className={`${flexRowCenter} py-7`}>
        <p className="text-2xl 2xl:text-4xl text-primary font-bold font-integral mb-1">NFTERS</p>

       {isAboveMedia? <><ul className='flex items-center gap-3 xl:gap-5 font-dmsans text-lg xl:text-xl font-medium'>
            <li className="border-b border-b-transparent hover:border-b-primary transition-all duration-200 cursor-pointer px-2 py-1">Marketplace</li>
            <li className="border-b border-b-transparent hover:border-b-primary transition-all duration-200 cursor-pointer px-2 py-1">Resource</li>
            <li className="border-b border-b-transparent hover:border-b-primary transition-all duration-200 cursor-pointer px-2 py-1">About</li>
        </ul>

        <div className="flex gap-4 justify-between items-center self-start">
            <div className="relative">
            <input type="text" placeholder="search.." className="w-72 px-4 h-12 rounded-full border border-gray focus:border-primary-light focus:outline-0 focus:scale-x-105 transition-transform duration-300 peer"/>
            <button className="p-2 absolute top-1 right-2 peer-focus:right-0 text-2xl text-[#757575]"><RiSearch2Line/></button>
            </div>

            <div className="space-x-2 xl:space-x-4 text-sm">
            <button className="bg-primary hover:bg-primary-dark py-3 px-8 rounded-full text-white active:translate-y-1 transition-transform duration-300 hover:drop-shadow-md">Upload</button>
            <button className="border-2 border-primary hover:border-transparent hover:bg-primary py-[10px] px-4 rounded-full text-primary hover:text-white active:translate-y-1 transition-transform duration-300 hover:drop-shadow-md">Connect Wallet</button>
            </div>
        </div></>
        :
        <button className="text-3xl p-2 hover:bg-slate-100 hover:text-primary" onClick={()=> setMenuToggle(!menuToggle)}><RxHamburgerMenu/></button>}
    </nav>
  )
}

export default Navbar