import React, { useState } from 'react'
import ResumeData from "../component/Json/Resume.json";
import { h6 } from 'framer-motion/client';
import Skills from '../component/Popus/Skills';
import Education from '../component/Popus/Education';
import CV from '../component/Popus/CV';

const Resume = () => {
    const [Click, setClick] = useState(()=>{
         return parseInt(localStorage.getItem("value")) || 0;
    })
localStorage.setItem("value" , Click)
    return (
        <>
            <div className="py-20">
                <div className="container">
                    <div className="flex flex-col gap-4 items-center">
                        <h5 className='text-sm text-rose-500 font-medium tracking-[0.5px]'>6+ MONTHS OF INTERNSHIP</h5>
                        <h1 className='text-5xl font-bold text-gray-300 tracking-[0.5px]'>My Resume</h1>
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 md:gap-0 mt-14 cursor-pointer ">
                        {
                            ResumeData.resume.map((item, index) => (
                                <div onClick={() => setClick(index)} key={index} className="bg-[#191b1e] rounded-xl text-center ">
                                    <h6 className={`text-lg text-white tracking-[0.5px] border  py-6 rounded-xl ${Click === index ? "border-red-500 bg-[#141618]" : "border-transparent"} `}>{item.Title}</h6>
                                </div>
                            ))
                        }
                    </div>
                    {
                        Click === 0 && <Education />
                    }
                    {
                        Click === 1 && <Skills />
                    }
                    {
                        Click === 2 && <CV />
                    }
                </div>
            </div>
        </>
    )
}

export default Resume
