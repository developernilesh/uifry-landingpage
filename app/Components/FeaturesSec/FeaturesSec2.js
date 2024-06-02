import Image from 'next/image'
import Bell from '../../../public/assets/FeaturesSec2/Bell.png'
import F2Bg from '../../../public/assets/FeaturesSec2/F2Bg.png'
import Ring from '../../../public/assets/Ring.png'
import Mobile2 from '../../../public/assets/Mobile2.png'
import OnHold from '../../../public/assets/FeaturesSec2/OnHold.png'

export default function FeaturesSec2() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row relative items-center mt-10">
        <div className="w-full relative max-w-[638px] flex flex-col items-center md:items-start gap-8 -mt-14">
            <div className="flex flex-col items-center md:items-start gap-1"> 
                <div className="text-[18px] leading-[28px] text-[#FF5555] font-medium">ADVANTAGES</div>
                <div className="text-[48px] leading-[48px] font-bold text-center md:text-left">
                    Why Choose Uifry
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex gap-2 items-center">
                    <Image src={Bell} className="w-[48px] h-[48px]"/>
                    <div className="text-[28px] leading-[28px] font-semibold">Clever Notifications</div>
                </div>
                <div className="text-[18px] leading-[28px] font-medium text-center md:text-start">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. 
                  Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. 
                  Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                </div>
            </div>
        </div>

        <div className="w-full relative">
            <Image src={Mobile2} className="w-full ml-auto md:ml-0 md:mx-auto lg:mx-0 lg:ml-auto max-w-[450px]"/>
            <Image src={Ring} className="absolute top-8 right-0 md:right-[-25px] md:scale-[1.3] -z-10"/>
            <Image src={F2Bg} className="absolute top-0 -z-20"/>
            <Image src={OnHold} className='absolute right-[10%] lg:right-[14%] top-[35%]'/>
        </div>
    </div>
  );
}
