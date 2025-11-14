import React, { useEffect } from 'react'
import { Cursor, useTypewriter, } from 'react-simple-typewriter';
import HeroImg1 from "/Images/HeroImg1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css"

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 0,
    });

    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="lg:flex-row flex flex-col gap-10 justify-between sm:py-20 py-16 items-center">
          <div className="flex flex-col gap-10 max-w-[640px] w-full ">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <p className="text-lg text-[#c4cfcd] leading-9 font-normal">WELCOME TO MY WORLD </p>
              <h1 className='sm:text-6xl text-5xl font-bold text-white leading-20'> Hi, I'm <span className='text-red-500'>Pankaj</span></h1>
              <h2 className="sm:text-4xl text-3xl font-bold text-white"> a <span>{text}</span>
                <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
              </h2>
              <p className="sm:text-base text-sm tracking-[0.5px] text-white font-medium">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>
            <div className="md:flex-row flex flex-col gap-10 justify-between">
              <div className="flex flex-col  gap-5">
                <h3 data-aos="fade-right" className='text-xl text-white font-semibold tracking-[0.5px]'>FIND ME IN</h3>
                <div data-aos="fade-up" className="flex cursor-pointer gap-4">
                  <a href="https://www.facebook.com/" target='_blank'>
                    <img className='p-2 bg-[#1a1c1f] rounded-sm' src="/Images/facebook.svg" alt="facebook" />
                  </a>
                  <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'>
                    <img className='p-2 bg-[#1a1c1f] rounded-sm' src="/Images/instagram.svg" alt="instagram" />
                  </a>
                  <a href="https://www.linkedin.com/feed/" target='_blank'>
                    <img className='p-2 bg-[#1a1c1f] rounded-sm' src="/Images/linkedin.svg" alt="linkedin" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h3 data-aos="fade-right" className='text-xl text-white font-semibold tracking-[0.5px]'>BEST SKILL ON</h3>
                <div data-aos="fade-up" className="flex gap-4 cursor-pointer">
                  <img className='p-2 bg-[#1a1c1f] rounded-sm' src="/Images/react.svg" alt="facebook" />
                  <img className='p-2 bg-[#1a1c1f] rounded-sm' src="/Images/nodejs.svg" alt="instagram" />
                  <img className='p-2 bg-[#1a1c1f] rounded-sm' src="/Images/tailwind.svg" alt="linkedin" />
                  <img className='p-2 bg-[#1a1c1f] rounded-sm' src="public/Images/figma.svg" alt="linkedin" />
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="max-w-[300px] justify-items-center relative overflow-hidden lg:max-w-[500px] w-full lg:h-[680px] h-[400px] shadow-[0px_5px_10px_5px_rgba(0,0,0,0.25)]">
            <div className=" top-48 -left-64 w-full h-1  animate absolute"></div>
            <img className='lg:h-[680px] w-[400px] h-[400px]' src={HeroImg1} alt="HeroImg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
