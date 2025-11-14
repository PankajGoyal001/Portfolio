import React from 'react'

const CV = () => {
  return (
    <>
    <div className="flex flex-col  max-w-[800px] my-10 w-full justify-self-center">
        <embed src="public/Images/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"  type="application/pdf" width="100%" height="1115px" />
    </div>
    </>
  )
}

export default CV
