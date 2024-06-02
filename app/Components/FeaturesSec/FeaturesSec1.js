import Image from "next/image";
import Star from '../../../public/assets/FeaturesSec1/Star.png'
import Cube1 from '../../../public/assets/FeaturesSec1/Cube1.png'
import Cube2 from '../../../public/assets/FeaturesSec1/Cube2.png'
import Mobile1 from '../../../public/assets/Mobile1.png'
import Ring from '../../../public/assets/Ring.png'
import F1Bg1 from '../../../public/assets/FeaturesSec1/F1Bg1.png'
import F1Bg2 from '../../../public/assets/FeaturesSec1/F1Bg2.png'

export default function FeaturesSec1() {
  return (
    <div className="w-full flex flex-col items-center md:flex-row relative">
        <div className="w-full relative">
            <Image src={Mobile1} className="w-full ml-auto max-w-[450px]"/>
            <Image src={Ring} className="absolute top-8 left-0 md:left-[-25px] md:scale-[1.3] -z-10"/>
            <Image src={F1Bg1} className="absolute top-0 -z-20"/>
        </div>
        <div className="w-full relative max-w-[638px] flex flex-col items-center md:items-start gap-8 -mt-14">
            <div className="flex flex-col items-center md:items-start gap-1"> 
                <div className="text-[18px] leading-[28px] text-[#FF5555] font-medium">FEATURES</div>
                <div className="text-[48px] leading-[48px] font-bold">
                    Uifry Premium
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex gap-2">
                    <Image src={Star} className="w-[24px] h-[24px]"/>
                    <div className="text-[18px] leading-[28px] font-semibold">Budgeting Intervals</div>
                </div>
                <div className="text-[18px] leading-[28px] font-medium text-center md:text-start">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex gap-2">
                    <Image src={Cube1} className="w-[24px] h-[24px]"/>
                    <div className="text-[18px] leading-[28px] font-semibold">Budgeting Intervals</div>
                </div>
                <div className="text-[18px] leading-[28px] font-medium text-center md:text-start">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex gap-2">
                    <Image src={Cube2} className="w-[24px] h-[24px]"/>
                    <div className="text-[18px] leading-[28px] font-semibold">Budgeting Intervals</div>
                </div>
                <div className="text-[18px] leading-[28px] font-medium text-center md:text-start">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </div>
            </div>
            <Image src={F1Bg2} className="hidden md:block custom:hidden absolute md:right-[-10%] lg:right-[-11%] xl:right-[-175px] -top-48 md:top-0 -z-10"/>
        </div>
    </div>
  )
  ;
}
