import Image from 'next/image'
import F2Bg from '../../public/assets/FeaturesSec2/F2Bg.png'
import Ring from '../../public/assets/Ring.png'
import Test1 from '../../public/assets/Testimonial/Test1.png'
import Test2 from '../../public/assets/Testimonial/Test2.png'
import Star9 from '../../public/assets/Star9.png'

export default function Testimonial() {
    return (
        <div className="w-11/12 max-w-[1090px] mx-auto pb-16">
            <div className='w-full max-w-[455px] mx-auto my-20 md:my-10'>
                <div className='text-[18px] leading-[28px] font-medium text-center'>
                    TESTIMONIAL
                </div>
                <div className='capitalize font-bold text-[48px] leading-[48px] text-center'>what our users say about us ?</div>
            </div>
            <div className="w-full flex flex-col items-center md:flex-row relative">
                <div className="w-full relative">
                    <Image src={Test1} className="w-full md:scale-150 pt-[23%] md:pt-[20%] pl-[10%]"/>
                    <Image src={Ring} className="absolute top-8 left-0 md:scale-[1.5] -z-10"/>
                    <Image src={F2Bg} className="absolute top-10 -z-20"/>
                    <Image src={Star9} className='absolute left-0 lg:left-[-20%] bottom-[-10%]'/>
                </div>
                <div className="w-full relative max-w-[638px] pl-0 md:pl-[50px] lg:pl-[196px] flex flex-col items-center md:items-start gap-8 mt-4 lg:-mt-14">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <div className="flex gap-2 items-center">
                            <div className="text-[28px] leading-[28px] font-semibold capitalize text-center md:text-start">the best financial accounting app ever!</div>
                        </div>
                        <div className="text-[18px] leading-[28px] font-medium text-center md:text-start">
                        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. 
                        Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. 
                        Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                        </div>
                        <div>
                            <Image src={Test2}/>
                        </div>
                        <div className='text-[18px] leading-[28px] font-semibold capitalize'>
                            Nick Jonas
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
