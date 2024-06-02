import Image from 'next/image'
import Star from '../../../public/assets/FeaturesSec3/Star.png'
import F3Bg from '../../../public/assets/FeaturesSec3/F3Bg.png'
import Ring from '../../../public/assets/Ring.png'
import Mobile1 from '../../../public/assets/Mobile1.png'
import Card from '../../../public/assets/FeaturesSec3/Card.png'

export default function FeaturesSec3() {
  return (
    <div className="w-full flex flex-col items-center md:flex-row relative">
        <div className="w-full relative">
            <Image src={Mobile1} className="w-full ml-auto max-w-[450px]"/>
            <Image src={Ring} className="absolute top-8 left-0 md:left-[-25px] md:scale-[1.3] -z-10"/>
            <Image src={F3Bg} className="absolute top-0 -z-20"/>
            <Image src={Card} className='hidden xl:block absolute left-[32%] top-[22%]'/>
        </div>
        <div className="w-full relative max-w-[638px] flex flex-col items-center md:items-start gap-8 -mt-14">
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex gap-2 items-center">
                    <Image src={Star} className="w-[48px] h-[48px]"/>
                    <div className="text-[28px] leading-[28px] font-semibold">Fully Customizable</div>
                </div>
                <div className="text-[18px] leading-[28px] font-medium text-center md:text-start">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. 
                  Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. 
                  Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                </div>
            </div>
        </div>
    </div>
  );
}
