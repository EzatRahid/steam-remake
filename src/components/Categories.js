import React from "react";

import {BsSearch} from 'react-icons/bs'

const Categories = () =>{
    return(
        <div className="gradient mx-20 flex justify-between" >
            <ul className=" bb flex items-center text-[14px] text-white gap-10 font-bold">
                <li>
                   <p>Your Store</p> 
                </li>
                <li>
                   <p>New Games</p> 
                </li>
                <li>
                   <p>Categories</p> 
                </li>
                <li>
                   <p>Points Shop</p> 
                </li>
                <li>
                   <p>News</p> 
                </li>
                <li>
                   <p>Labs</p> 
                </li>
            </ul>
            <div className="flex items-center bg-[#316282] cursor-pointer my-1">
               <input placeholder="Search" className="rounded pl-4 bg-transparent placeholder:text-black border-0 outline-0"/>
               <BsSearch className="bg-[#63b4e3] h-full px-2 text-[30px] rounded mr-0.5"/>
            </div>
        </div>
    )
}

export default Categories