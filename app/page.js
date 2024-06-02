import Image from "next/image";
import FAQs from "./Components/FAQs";
import Features from "./Components/FeaturesSec/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import Frame from '../public/assets/Frame.png'
import F2Bg from '../public/assets/FeaturesSec2/F2Bg.png'
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>

      <main>
        <section id="heroSection">
          <Hero/>
        </section>
        <section id="featuresSection">
          <Features/>
        </section>
        <section id="testimonialSection">
          <Testimonial/>
        </section>
        <section id="Faqs">
          <FAQs/>
        </section>    

        <section className="w-full hidden md:block ">
          <div className="w-11/12 max-w-[1090px] mx-auto py-[100px] relative">
            <Image src={Frame} className="w-full z-10"/>
            <Image src={F2Bg} className="absolute top-0 left-0 translate-x-[-45%] translate-y-[-20%] -z-10"/>
          </div>
        </section>
      </main>
      
      <Footer/>
    </>
  );
}
