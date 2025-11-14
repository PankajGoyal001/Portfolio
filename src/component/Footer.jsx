import React, { useEffect } from 'react'
import logo from "/Images/logo.jpg";
import footerData from "./Json/footer.json";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";


const Footer = () => {
    
        
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
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:py-20 py-10 border-y-2 justify-between  gap-8 sm:gap-10">
                    <div className="flex flex-col gap-4 sm:gap-8">
                        <div className="flex sm:gap-3 gap-2 cursor-pointer items-center ">
                            <img className='max-w-20 z-50 w-full rounded-full border-3 border-[#2d3236]' src={logo} alt="" />
                            <h2 data-aos="fade-right" className='text-amber-50 sm:text-3xl text-2xl font-semibold '>PANKAJ</h2>
                        </div>
                        <div  data-aos="fade-right" className="flex items-center relative gap-3 sm:gap-5">
                            <img className='sm:max-w-16 max-w-12 bg-[#1a1c1f] rounded-sm w-full' src="/Images/facebook.svg" alt="facebook" />
                            <img className='sm:max-w-16 max-w-12 bg-[#1a1c1f] rounded-sm w-full' src="/Images/instagram.svg" alt="instagram" />
                            <img className='sm:max-w-16 max-w-12 bg-[#1a1c1f] rounded-sm w-full' src="/Images/linkedin.svg" alt="linkedin" />
                        </div>
                    </div>
                    {
                        footerData.map((item, index) => (
                            <div data-aos="fade-down" key={index} className="flex flex-col gap-[15px]">
                                <h4 className='text-2xl font-semibold text-red-900 '>{item.heading}</h4>
                                <div className="flex flex-col gap-[10px]">
                                    <Link to={item.path}>
                                        <p className="text-lg font-medium text-white">{item.text1}</p>
                                    </Link>
                                    <Link to={item.path1}>
                                        <p className="text-lg font-medium text-white">{item.text2}</p>
                                    </Link>
                                    <Link to={item.path2}>
                                        <p className="text-lg font-medium text-white">{item.text3}</p>
                                    </Link>
                                    <Link to={item.path3}>
                                        <p className="text-lg font-medium text-white">{item.text4}</p>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full md:py-10 py-5">
                    <p className="text-center text-gray-500 text-base">© 2022. All rights reserved by Pankaj Goyal</p>
                </div>
            </div>
        </>
    )
}

export default Footer
