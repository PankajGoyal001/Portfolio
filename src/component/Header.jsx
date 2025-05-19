import React, { useEffect, useState } from 'react'
import logo from "../../public/Images/logo.jpg";
import { Link, NavLink } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [Click, setClick] = useState(false)
  const menubar = [
    {
      "menu": "Home",
      "href": "/"
    },
    {
      "menu": "Projects",
      "href": "/project"
    },
    {
      "menu": "Resume",
      "href": "/resume"
    },
    {
      "menu": "Contact",
      "href": "/contact"
    }]


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
        <div className="flex items-center py-[10px] border-b border-gray-400  justify-between ">
          <Link to={"/"}>
            <div data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1000" className="flex gap-3 cursor-pointer items-center ">
              <img className='sm:max-w-[80px] max-w-[80px]  z-50 w-full rounded-full border-3 border-[#2d3236]' src={logo} alt="" />
              <h2 data-aos="fade-right" className='text-amber-50 sm:text-3xl text-2xl font-semibold '>PANKAJ</h2>
            </div>
          </Link>
          <ul data-aos="fade-down" className="md:flex justify-between hidden cursor-pointer max-w-[400px] text-gray-400 w-full">
            {
              menubar.map((item, index) => (
                <NavLink key={index} to={item.href}>
                  <li className="text-xl font-normal ">{item.menu}</li>
                </NavLink>
              ))
            }
          </ul>
          <button className={`grid p-5 bg-[#28303a] rounded-full z-50  ${Click ? "py-7" : ""} gap-1.5 md:hidden  cursor-pointer`} onClick={() => setClick(!Click)}>
            <p className={`${Click ? "-rotate-45 absolute" : ""} w-6 border-2 duration-500 text-red-500`} ></p>
            <span className={`${Click ? "border-transparent " : ""} w-6 border-2 duration-500 text-red-500`} ></span>
            <p className={`${Click ? "rotate-45 absolute " : ""} w-6 border-2 duration-500 text-red-500`}></p>
          </button>
          {
          }
        </div>
      </div>
    </>
  )
}

export default Header
