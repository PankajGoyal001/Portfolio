import React, { useEffect } from 'react'
import projectData from "../component/Json/project.json";
import Aos from "aos";
import "aos/dist/aos.css";


const Projects = () => {
    
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
      <div className="md:py-20 py-10">
        <div className="container">
          <div className="flex items-center mb-14 flex-col gap-4">
            <h5 data-aos="fade-right" className='text-sm text-rose-500 font-medium tracking-[0.5px]'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
            <h1 data-aos="fade-left" className='text-5xl font-bold text-gray-300 tracking-[0.5px]'>My Projects</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              projectData.map((item, index) => (
                <div key={index} className="flex md:p-10 p-5 overflow-hidden rounded-[10px] shadow-[0.1px_1px_5px_2px_#454d52] flex-col">
                  <div data-aos="zoom-in" className="overflow-hidden cursor-pointer rounded-[20px]  ">
                    <img className='bg-[#32323e] transition-transform duration-500 ease-in-out hover:scale-[1.07] max-w-[373px] w-full' src={item.Images} alt="images" />
                  </div>
                  <div className="flex mt-5 items-center cursor-pointer justify-between ">
                    <h3 data-aos="fade-right" className='text-lg tracking-[0.5px] font-medium text-red-500 '>{item.title}</h3>
                    <div className="flex gap-4 ">
                      <a href={item.href} target='_blank'>
                        <img data-aos="flip-up" className='max-w-10 active:scale-[0.8] duration-700 transition-transform ease-in-out w-full bg-white rounded-full p-2' src={item.Img1} alt="Img1" />
                      </a>
                      <a href={item.href1} target='_blank'>
                        <img data-aos="flip-up" data-aos-delay="200" className='max-w-10 active:scale-[0.8] duration-700 transition-transform ease-in-out w-full bg-white rounded-full p-2' src={item.Img2} alt="Img2" />
                      </a>
                    </div>
                  </div>
                  <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="text-sm mt-5 text-white tracking-[0.4px] ">{item.Text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
