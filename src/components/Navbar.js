import React from "react";
import logo from '../assets/steam-logo.png'

import {FiMenu} from 'react-icons/fi'
import {LuDownload} from 'react-icons/lu'
import {BiSolidDownArrow} from 'react-icons/bi'

const Navbar = () =>{
    return(
        <div className="bg-[#171d25] flex items-center">
            {/* left side */}
            <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full transition-[0.5ss]
            lg:w-auto">
                <div className=" lg:hidden text-[#c5c3c0] absolute left-4 ">
               <div className="text-[30px] bg-[#1b2838]"><FiMenu/></div>
                </div>
                <div className="flex items-center justify-center text-white font-semibold text-[28px]">
                <img src = {logo} className="w-12 h-12 mr-4"/>
                <p className="text-[#c5c3c0] uppercase">steam</p>
                </div>
            </div>
            {/* middle */}
            <div className="hidden lg:flex pl-10 uppercase">
                <ul className="text-[#c5c3c0] text-[14px] flex mr-7 font-[1000] gap-5">
                    <li>store</li>
                    <li>community</li>
                    <li>about</li>
                    <li>support</li>
                </ul>
            </div>
            {/* right */}
            <div className="absolute text-[10px] flex items-center top-1 right-[350px]">
                <div className="">
                <button className="bg-[#5c7e10] text-white py-1 px-2 flex items-center hover:bg-[#6C9314] transition"><LuDownload className="text-[18px]"/><p className="ml-2">Install Stean</p></button>
                </div>
                <div className="flex items-center">
                    <p className="text-white ml-2 border-r pr-2 "><a href="">login</a></p>
                    <p className="text-white ml-2"><a href="" className="flex items-center">language <BiSolidDownArrow className="text-[8px] ml-1"/></a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar