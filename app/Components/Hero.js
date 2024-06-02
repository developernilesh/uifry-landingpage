import Button from "./Button/Button";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import HeroBg1 from '../../public/assets/HeroSection/HeroBg1.png'
import HeroStripImg from '../../public/assets/HeroSection/HeroStripImg.png'
import HeroMob3 from '../../public/assets/HeroSection/HeroMob3.png'
import HeroBg2 from '../../public/assets/HeroSection/HeroBg2.png'
import HeroMob1 from '../../public/assets/HeroSection/HeroMob1.png'
import HeroMob2 from '../../public/assets/HeroSection/HeroMob2.png'
import HeroRings from '../../public/assets/HeroSection/HeroRings.png'
import Star1 from '../../public/assets/Star1.png'
import Star2 from '../../public/assets/Star2.png'
import Star3 from '../../public/assets/Star3.png'
import Star8 from '../../public/assets/Star8.png'

export default function Hero() {
  return (
    <div className="w-11/12 max-w-[1090px] mx-auto flex flex-col md:flex-row justify-between items-center relative">
        <div className="w-full max-w-[618px] flex flex-col mt-16 relative">
            <div className="w-full flex flex-col gap-6">
                <div className="capitalize font-bold text-4xl md:text-[64px] md:leading-[64px]">
                    make the best financial decisions
                </div>
                <div className="capitalize font-medium text-[18px] leading-[28px]">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </div>
                <div className="flex gap-[40px] items-center">
                    <Button>Get Started &rarr;</Button>
                    <div className="flex items center gap-[14px]">
                        <FaRegCirclePlay className="w-[29px] h-[29px] active:animate-ping"/>
                        <div className="text-[18px] leading-[28px]">Watch Video</div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[569px]">
                <Image src={HeroStripImg} className="w-full md:ml-[-34px]"/>
            </div>
            <Image src={Star8} className="hidden md:block absolute left-[139px] top-[380px]"/>
        </div>
        <div className="w-full max-w-[442px] relative">
            <Image src={HeroBg2} className="w-full md:h-[645px] -z-10 mt-[48px]"/>

            <Image src={HeroMob3} className="absolute left-0 xl:left-[145px] top-[100px] xl:top-[110px] md:top-[154px] xl:scale-125  z-10"/>
            <Image src={HeroMob2} className="absolute left-0 xl:left-[20px] top-[50px] xl:top-[40px] md:top-[77px] xl:scale-125 z-20"/>
            <Image src={HeroMob1} className="absolute left-0 xl:left-[-100px] top-0 xl:top-[-40px] xl:scale-125 z-30"/>

            <Image src={HeroRings} className="absolute w-full right-[50%] xl:right-[10px] top-[45px] xl:top-[15px] xl:scale-150 translate-x-[50%] xl:translate-x-0"/>
            <Image src={Star1} className="absolute left-[60%] lg:left-[380px] xl:left-[498px] top-0 xl:top-[-90px]"/>
            <Image src={Star2} className="absolute left-[50px] bottom-0 md:bottom-auto md:top-[550px] z-50" alt="start2"/>
        </div>
        <Image src={HeroBg1} alt="Herobg1" className="w-full max-w-[317px] md:h-[230px] absolute top-[12px] md:left-[160px] -z-10 md:scale-150"/>
        <Image src={Star3} className="absolute left-0 xl:left-[-95px]"/>
    </div>
  );
}
