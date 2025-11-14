import React from 'react'
import "./skill.css"
const Skills = () => {
    return (
        <>
            <div className="flex flex-col md:max-w-[800px] max-w-[320px] w-full justify-self-center ">
                <div className="flex py-14 flex-col gap-6">
                    <p className="text-red-800 text-lg font-normal">FEATURES</p>
                    <h1 className='text-white font-bold text-4xl'>Development Skill</h1>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-gray-400 text-base font-medium">HTML 5</p>
                            <p className="text-white text-base font-medium">99%</p>
                        </div>
                        <div className="mt-2.5 w-full bg-black rounded-xl h-2 relative">
                            <span className='bg-gradient-to-r from-blue-600  via-pink-500 animatedata1 to-red-500 absolute top-0  h-2 rounded-xl'></span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-gray-400 text-base font-medium">CSS</p>
                            <p className="text-white text-base font-medium">97%</p>
                        </div>
                        <div className="mt-2.5 w-full bg-black rounded-xl h-2 relative">
                            <span className='bg-gradient-to-r from-blue-600  via-pink-500  to-red-500 absolute top-0 animatedata2  h-2 rounded-xl '></span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-gray-400 text-base font-medium">JAVASCRIPT</p>
                            <p className="text-white text-base font-medium">85%</p>
                        </div>
                        <div className="mt-2.5 w-full bg-black rounded-xl h-2 relative">
                            <span className='bg-gradient-to-r from-blue-600  via-pink-500 animatedata3 to-red-500 absolute top-0  h-2 rounded-xl'></span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-gray-400 text-base font-medium">REACT JS</p>
                            <p className="text-white text-base font-medium">90%</p>
                        </div>
                        <div className="mt-2.5 w-full bg-black rounded-xl h-2 relative">
                            <span className='bg-gradient-to-r from-blue-600  via-pink-500 animatedata4 to-red-500 absolute top-0  h-2 rounded-xl'></span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-gray-400 text-base font-medium">TAILWIND CSS</p>
                            <p className="text-white text-base font-medium">98%</p>
                        </div>
                        <div className="mt-2.5 w-full bg-black rounded-xl h-2 relative">
                            <span className='bg-gradient-to-r from-blue-600  via-pink-500 animatedata5  to-red-500 absolute top-0  h-2 rounded-xl'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
