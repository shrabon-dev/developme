import Image from "next/image";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Hero from "../component/hero";
import WhyChoose from "../component/whyChoose";
import MyWorkProcess from "../component/workProcess";
import About from "../component/about";
import Contact from "../component/contact";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <WhyChoose/>
     <About/>
     <MyWorkProcess/>
     <Contact/>
     <Footer/>
    </>
  );
}
