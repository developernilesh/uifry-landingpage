import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import UifryLogo from '../../public/assets/UifryLogo.png'
import Image from "next/image";
import Button from "./Button/Button";

const navItems = [
    {item: "Home"},
    {item: "About Us"},
    {item: "Pricing"},
    {item: "Features"}
]

export default function Navbar() {
  return (
    <nav className="w-11/12 max-w-[1090px] h-[60px] flex justify-between items-center mx-auto my-[40px]">
        <div className="flex items-center gap-[40px]">
            <div>
                <Image src={UifryLogo} alt="Logo" width={117}/>
            </div>
            <div className="hidden md:flex items-center gap-[24px] font-bold text-[20px]">
                {navItems.map((item,index) => (
                    <div key={index}>{item.item}</div>
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
            <div className="block md:hidden text-black text-3xl"><TiThMenu/></div>
        </div>
        
    </nav>
  );
}
