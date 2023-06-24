import React from "react";
import Navbar from "../loyout/Navbar";
import antiribet from '../../assets/images/antiribet.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Order() {
   const options = [
      'Terdekat', 'Promo', 'Drop Point'
   ]

   const defaultOption = options[0]
   return (
      <div>
         <Navbar />
         <img src={antiribet} alt="" className="m-auto" />
         
         <div className="container flex justify-between w-[1037px] m-auto">
            <h2>Menampilkan Otlet Yang Tersedia</h2>
            <div className="flex items-center gap-6">
               <h2>Filter:</h2>
               <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </div>
         </div>
      </div>
   )
}

export default Order;