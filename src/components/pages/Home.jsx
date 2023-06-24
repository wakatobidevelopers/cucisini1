import React from "react";
import Navbar from "../loyout/Navbar";
import Footer from "../loyout/Footer";
import { NavLink } from "react-router-dom";
import About from "./About";
import hero from '../../assets/images/Hero-bg.png';
import antiribet from '../../assets/images/antiribet.png';
import maskot from '../../assets/images/maskot.png';
import map from '../../assets/images/map.png';
import map_light from '../../assets/icons/Map_light.svg';
import pin_alt from '../../assets/icons/Pin_alt.svg';
import shop from '../../assets/icons/Shop.svg';
import right from '../../assets/images/right.png';
import left from '../../assets/images/left.png';
import '../../App.css';

function Home() {
   return (
      <div className="div absolute">
         <Navbar/>
            
         <img src={hero} alt="" className='relative top-[-180px] -z-50' />
         <section className='w-[1037px] flex justify-between m-auto items-center'>
            <img src={antiribet} alt="" className='w-[513px]' />
            <div className='flex flex-col'>
               <h2 className='container text-5xl w-[375px] leading-[3.5rem] text-blue'>AYO <br /> ORDER<br />SEKARANG</h2>
               <button className='bg-blue text-white container w-[200px] py-4 rounded-lg mt-4'>
                  <NavLink to = '/order'>Order</NavLink>
               </button>
            </div>
         </section>

         <section className='w-[1037px] flex justify-between mt-14 m-auto items-center'>
            <div className='flex flex-col'>
               <h2 className='container text-5xl w-[375px] leading-[3.5rem] text-blue'>TEMUKAN<br /> LOKASI<br />TERDEKAT</h2>
               <button className='bg-blue text-white container w-[200px] py-4 rounded-lg mt-4'>
                  TEMUKAN
               </button>
            </div>
            <img src={map} alt=""/>
         </section>

         <section className='w-[1037px] mt-16 flex justify-between m-auto items-center'>
            <img src={maskot} alt="" />
            <div className='flex flex-col'>
               <h2 className='container text-5xl w-[375px] leading-[3.5rem] text-blue'>AYO <br /> GABUNG<br />KEMITRAAN</h2>
               <button className='bg-blue text-white container w-[200px] py-4 rounded-lg mt-4'>
                  GABUNG
               </button>
            </div>
         </section>

         <section className='flex flex-col  justify-center mt-[215px] bg-grey pb-14'>
            <h1 className="m-auto container text-[50px] w-[800px] bg-blue text-center text-white py-4 rounded-lg mt-[-50px] mb-12">Kenapa Cucisini ?</h1>
            <div className='flex justify-between'>
            <div className="m-auto px-16 w-[340px] h-[340px] text-center bg-blue flex flex-col justify-center items-center rounded-lg">
               <img src={map_light} alt="" />
               <h3 className="container text-yellow text-xl mt-4">Jarak Akurat</h3>
               <p className='text-white mt-4'>Jarak toko terdefinisi
dengan tepat dan akurat.</p>
            </div>

            <div className="m-auto px-16 w-[340px] h-[340px] text-center bg-blue flex flex-col justify-center items-center rounded-lg">
               <img src={pin_alt} alt="" />
               <h3 className="container text-yellow text-xl mt-4">Pickup Delivery</h3>
               <p className='text-white mt-4'>JAmbil di tempat dan
kembali ke tangan yang tepat.
</p>
            </div>

            <div className="m-auto px-16 w-[340px] h-[340px] text-center bg-blue flex flex-col justify-center items-center rounded-lg">
               <img src={shop} alt="" />
               <h3 className="container text-yellow text-xl mt-4">Gabung Kemitraan</h3>
               <p className='text-white mt-4'>Gabung dan perluas 
jangkauan konsumen bersama
sobatsini.</p>
            </div>
            </div>
         </section>

         <section>
            <div className="flex justify-between my-[215px]">
               <img src={left} alt="" />
               <img src={right} alt="" />
            </div>
         </section>
         <Footer/>
      </div>
     
   )
}

export default Home;