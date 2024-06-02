import FAQs from "./Components/FAQs";
import Features from "./Components/FeaturesSec/Features";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
      <FAQs/>
    </>
  );
}
