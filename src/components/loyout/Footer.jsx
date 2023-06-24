import React from "react";
import logo from '../../assets/images/logo.png'

function Footer() {
   return (
      <div className="bg-blue flex justify-center py-12">
         <img src={logo} alt="" className="w-28"/>
      </div>
   )
}
export default Footer;