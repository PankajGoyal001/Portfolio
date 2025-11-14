import React from 'react'

const   Education = () => {
  return (
    <>
    <div className="flex flex-col  max-w-[800px] my-10 w-full justify-self-center gap-10">
    <div className="flex flex-col">
        <div className="flex flex-col gap-6 sm:p-10 p-4 rounded-xl bg-[#1a1d20]">
            <div className="flex justify-between sm:gap-6 gap-4 items-center ">
                <div className="flex flex-col gap-3">
                <p className=" sm:text-3xl text-xl font-semibold text-white">Secondary School Education</p>
                <p className="sm:text-base text-sm font-medium text-gray-400 ">GOVT. SEN SEC SMART SCHOOL (2023 - 2024)</p>
                </div>
                <p className="bg-[#141618] rounded sm:py-2 p-1 sm:px-4 px-2 text-red-700 text-sm">5.00/5</p>
            </div>
            <p className="sm:text-lg text-sm font-medium text-gray-400">Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.</p>
        </div>
    </div>

    <div className="flex flex-col ">
        <div className="flex flex-col gap-6 sm:p-10 p-4 rounded-xl bg-[#1a1d20]">
            <div className="flex justify-between sm:gap-6 gap-4 items-center ">
                <div className="flex flex-col gap-3">
                <p className=" sm:text-3xl text-xl font-semibold text-white">BCA Computer Science</p>
                <p className="sm:text-base text-sm font-medium text-gray-400 ">DAV Collage (Abohar) (2024 - 2025)</p>
                </div>
                <p className="bg-[#141618] rounded sm:py-2 p-1 sm:px-4 px-2 text-red-700 text-sm">5.00/5</p>
            </div>
            <p className="sm:text-lg text-sm font-medium text-gray-400">Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.</p>
        </div>
    </div>
    
    
    </div>
    </>
  )
}

export default Education
