import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { RxCrossCircled } from "react-icons/rx";
import { flexColCenter } from '../../Utilities'

type props = {
    menuToggle: boolean
    setMenuToggle: (data: boolean) => void
}
const SideNav = ({setMenuToggle, menuToggle}: props) => {

  return (
    <div className="fixed right-0 bg-primary text-white h-screen w-11/12 md:w-3/5 z-30">
      <button className='text-white absolute right-8 text-3xl top-8 hover:rotate-45 transition-transform duration-300' onClick={()=> setMenuToggle(!menuToggle)}><RxCrossCircled/></button>
      <ul className={`${flexColCenter} h-full gap-8 font-dmsans text-lg xl:text-xl font-medium`}>
            <li className="border-b border-b-transparent hover:border-b-white transition-all duration-200 cursor-pointer px-2 py-1">Marketplace</li>
            <li className="border-b border-b-transparent hover:border-b-white transition-all duration-200 cursor-pointer px-2 py-1">Resource</li>
            <li className="border-b border-b-transparent hover:border-b-white transition-all duration-200 cursor-pointer px-2 py-1">About</li>

            <div className="relative">
            <input type="text" placeholder="search.." className="w-56 md:w-72 px-4 h-12 rounded-full border border-gray focus:border-primary-light focus:outline-0 focus:scale-x-110 transition-transform duration-300 peer"/>
            <button className="p-2 absolute top-1 right-2 peer-focus:right-0 text-2xl text-[#757575]"><RiSearch2Line/></button>
            </div>

            <div className="space-x-2 text-sm">
            <button className="bg-white text-primary py-3 px-4 md:px-6 rounded-full active:translate-y-1 transition-transform duration-300 hover:drop-shadow-md">Upload</button>
            <button className="bg-primary-light py-[10px] px-3 md:px-4 rounded-full text-white active:translate-y-1 transition-transform duration-300 hover:drop-shadow-md">Connect Wallet</button>
            </div>
        </ul>

      </div>
  )
}

export default SideNav