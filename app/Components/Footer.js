import Image from "next/image";
import Phone from '../../public/assets/Phone.png'
import Mail from '../../public/assets/Mail.png'
import Logo from '../../public/assets/UifryLogo.png'
import Button from "./Button/Button";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-10">
        <div className="w-11/12 max-w-[1090px] relative mx-auto px-4 md:px-0">
            <div className="w-full flex justify-normal lg:justify-between flex-wrap">
                <div className="w-full p-6 lg:p-0 md:w-1/2 lg:w-2/12">
                    <div className="flex flex-col gap-4">
                        <Image src={Logo} className="w-[117px]"/>
                        <div className="flex items-center gap-2">
                            <Image src={Mail} className="w-[24px] h-[24px]"/>
                            <div className="text-[16px] leading-[26px] font-medium">help@frybix.com</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={Phone} className="w-[24px] h-[24px]"/>
                            <div className="text-[16px] leading-[26px] font-medium">+1234 456 678 89</div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 lg:p-0 md:w-1/2 lg:w-2/12">
                    <div className="flex flex-col gap-[16px]">
                        <div className="text-[32px] leading-[42px] font-medium">Links</div>
                        <div className="text-[16px] leading-[26px] font-medium">Home</div>
                        <div className="text-[16px] leading-[26px] font-medium">About Us</div>
                        <div className="text-[16px] leading-[26px] font-medium">Bookings</div>
                        <div className="text-[16px] leading-[26px] font-medium">Blog</div>
                    </div>
                </div>

                <div className="w-full p-6 lg:p-0 md:w-1/2 lg:w-2/12">
                    <div className="flex flex-col gap-[16px]">
                        <div className="text-[32px] leading-[42px] font-medium">Legal</div>
                        <div className="text-[16px] leading-[26px] font-medium">Terms of use</div>
                        <div className="text-[16px] leading-[26px] font-medium">Privacy Policy</div>
                        <div className="text-[16px] leading-[26px] font-medium">Cookie Ploicy</div>
                    </div>
                </div>
                <div className="w-full p-6 lg:p-0 md:w-1/2 lg:w-2/12">
                    <div className="flex flex-col gap-[16px]">
                        <div className="text-[32px] leading-[42px] font-medium">Product</div>
                        <div className="text-[16px] leading-[26px] font-medium">Take Tour</div>
                        <div className="text-[16px] leading-[26px] font-medium">Live Chat</div>
                        <div className="text-[16px] leading-[26px] font-medium">Reviews</div>
                    </div>
                </div>
                <div className="w-full max-w-[365px] lg:max-w-[300px] p-6 lg:p-0 md:w-3/4 lg:w-4/12">
                    <div className="flex flex-col gap-[16px]">
                        <div className="text-[32px] leading-[42px] font-medium">NewsLetter</div>
                        <div className="text-[16px] leading-[26px] font-medium">Stay Up To Date</div>
                        <div className="h-[81px] flex items-center justify-center shadow-md px-4 gap-2">
                            <input placeholder="Your email" className="w-full"/>
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-three-color-gradient mt-12 mb-6">
                </div>

                <div className="w-full text-[16px] leading-[26px] font-medium text-center capitalize">
                    Copyright 2022 uifry.com all rights reserved
                </div>
            </div>
        </div>
    </footer>
  );
}
