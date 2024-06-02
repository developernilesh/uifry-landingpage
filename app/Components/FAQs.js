import Image from "next/image";
import Star11 from '../../public/assets/Star11.png'

export default function FAQs() {
  return (
    <div className="w-11/12 max-w-[1090px] mx-auto mt-14 relative">
        <div className="w-full max-w-[497px] flex flex-col gap-1">
          <div className="text-[18px] text-[#FF5555] leading-[28px] font-medium">FAQ</div>
          <div className="text-[48px] leading-[48px] font-bold">Frequently Asked Questions</div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-5 my-10">
          <div className="w-full max-w-[534px] flex flex-col justify-center items-center gap-7">
            <div className="w-full h-[180px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md bg-[#FF5555] text-white">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] h-[180px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] h-[180px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md bg-[#FF5555] text-white">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
          </div>

          <div className="w-full max-w-[534px] flex flex-col justify-center items-center gap-7">
            <div className="w-full max-w-[534px] h-[180px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] h-[180px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md bg-[#FF5555] text-white">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>

            <div className="w-full max-w-[534px] h-[180px] px-[34px] flex flex-col justify-center items-center gap-2 rounded-md">
              <div className="text-[28px] leading-[28px] font-semibold capitalize">
                the best financial accounting app ever!
              </div>
              <div className="text-[18px] leading-[28px] font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
          </div>
        </div>

        <Image src={Star11} className="absolute top-0 lg:top-[10%] right-[20%]"/>
    </div>
  );
}
