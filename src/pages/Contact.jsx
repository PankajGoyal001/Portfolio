import React, { useEffect } from 'react'
import ContactImg from "/Images/contactImg.png";
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
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
      <div className="sm:py-20 py-10">
        <div className="container">
          <div className="flex flex-col gap-4 items-center">
            <h5 className='text-sm text-rose-500 font-medium tracking-[0.5px]'>CONTACT</h5>
            <h1 className='sm:text-5xl text-3xl font-bold text-gray-300 tracking-[0.5px]'>Contact With Me</h1>
          </div>
          <div className="lg:flex-row flex flex-col justify-between gap-10 sm:mt-14 mt-7 ">
            
            <div className="flex flex-col rounded-xl bg-linear-to-r from-[#1c1e22] to-[#23272b] sm:gap-10 gap-8 sm:p-10 p-5 lg:max-w-[550px] w-full overflow-hidden">
              <img data-aos="zoom-in" className='rounded-xl' src={ContactImg} alt="ContactImg" />
              <div className="flex flex-col gap-4">
                <h4 data-aos="fade-right" className='text-3xl font-bold text-white'>Pankaj Goyal</h4>
                <p data-aos="fade-left" className="text-lg font-normal text-gray-400">Full Stack Developer</p>
                <p data-aos="fade-left" className="sm:text-lg text-base font-normal text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio vitae quod laudantium dicta blanditiis .</p>
                <p data-aos="fade-left" className="text-base font-normal text-gray-400">Phone: <span className='text-gray-300'>+91 9988322862</span></p>
                <p data-aos="fade-left" className="text-base font-normal text-gray-400">Email: <span className='text-gray-300'>goyalpankaj85324@gmail.com</span></p>
              </div>
              <div className="flex flex-col gap-4">
              <h3 data-aos="fade-right" className='text-xl text-white font-semibold tracking-[0.5px]'>FIND ME IN</h3>
              <div  data-aos="fade-up" className="flex cursor-pointer gap-4">
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
            </div>

            <div className="flex flex-col gap-10 rounded-xl bg-linear-to-r from-[#1c1e22] to-[#23272b] sm:p-10 p-5 lg:max-w-[800px] w-full ">
              <div className="sm:flex-row flex flex-col w-full gap-10">
                <div className="flex w-full flex-col gap-4">
                  <label className='text-base text-gray-400 font-medium'>YOUR NAME</label>
                  <input className='p-2.5 bg-[#191b1e] border-b border-gray-500 rounded-xl outline-red-700 text-white text-base' type="text" />
                </div>
                <div className="flex w-full flex-col gap-4">
                  <label className='text-base text-gray-400 font-medium'>PHONE NUMBER</label>
                  <input className='p-2.5 bg-[#191b1e] border-b border-gray-500 rounded-xl outline-red-700 text-white text-base' type="text" />
                </div>
              </div>
              <div className="flex w-full flex-col gap-4">
                  <label className='text-base text-gray-400 font-medium'>EMAIL</label>
                  <input className='p-2.5 bg-[#191b1e] border-b border-gray-500 rounded-xl outline-red-700 text-white text-base' type="text" />
                </div>
                <div className="flex w-full flex-col gap-4">
                  <label className='text-base text-gray-400 font-medium'>SUBJECT</label>
                  <input className='p-2.5 bg-[#191b1e] border-b border-gray-500 rounded-xl outline-red-700 text-white text-base' type="text" />
                </div>
                <div className="flex w-full flex-col gap-4">
                  <label className='text-base text-gray-400 font-medium'>MESSAGE</label>
                  <textarea className='bg-[#191b1e] h-[240px] p-2.5 border-b border-gray-500 rounded-xl outline-red-700 text-white text-base' type="text" />
                </div>
                <button className='w-full bg-[#191b1e] p-2.5 rounded-xl text-gray-200  cursor-pointer hover:scale-[0.9] duration-500'>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
