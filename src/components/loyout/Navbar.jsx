import React from "react";
import { navLink } from "../../contains";
import { NavLink } from "react-router-dom";
import '../../App.css';
import '../../assets/fonts/MonumentExtended-Regular.otf';
import logo from '../../assets/images/logo.png'

function Navbar() {
   return (
      <ul className='w-[1037px] mt-16 container rounded-lg flex text-xl h-28 items-center bg-blue text-white m-auto justify-around'>
         {navLink.map(items =>
            <li key={items.title}>
               <NavLink
                  to={items.route}
               >
                  {items.title}
               </NavLink>
            </li>
         )}
         <img className='absolute w-28 bg-blue2 box-content p-4 rounded-lg' src={logo} alt="" />
         </ul>
   )
}

export default Navbar;