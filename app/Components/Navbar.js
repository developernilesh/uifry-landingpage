"use client"; 
import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import UifryLogo from '../../public/assets/UifryLogo.png'
import Image from "next/image";
import Button from "./Button/Button";
import { RiCloseLargeFill } from "react-icons/ri";

const navItems = [
    {item: "Home",href:"#heroSection"},
    {item: "About Us",href:"#testimonialSection"},
    {item: "Pricing",href:"#Faqs"},
    {item: "Features",href:"#featuresSection"}
]

export default function Navbar() {
  const [isMobile,setIsMobile] = useState(false)
  return (
    <nav className="flex flex-col w-11/12 max-w-[1090px] mx-auto">
        <div className="w-full h-[60px] flex justify-between items-center my-[40px]">
            <div className="flex items-center gap-[20px] lg:gap-[40px]">
                <div>
                    <Image src={UifryLogo} alt="Logo" width={117}/>
                </div>
                <div className="hidden md:flex items-center gap-[24px] font-bold text-[20px]">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="cursor-pointer focus:text-[#FF5555]">
                            {item.item}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <Button className="hidden md:block">Download</Button>
                    <button className="md:hidden bg-black text-white px-[25px] md:px-[46px] h-[60px] flex justify-center items-center rounded-sm">
                        <MdOutlineFileDownload fontSize="2rem"/>
                    </button>
                </div>
                <div className="block md:hidden text-black text-3xl"
                onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <RiCloseLargeFill/> : <TiThMenu/>}
                </div>
            </div> 
        </div>
        <div className="block md:hidden w-full h-[1px] relative">
            <div 
            className={`w-full absolute top-0 bg-white z-[50] ${isMobile ? 'flex' : 'hidden'} flex-col items-center
            gap-[26px] font-bold text-[20px] py-[35px] border-y border-y-[#ba3131]`}>
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} 
                        className="cursor-pointer focus:text-[#FF5555]">
                            <p onClick={() => setIsMobile(!isMobile)}>{item.item}</p>
                        </a>
                    ))}
            </div>
        </div>
    </nav>
    
  );
}
