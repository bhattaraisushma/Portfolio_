import React from 'react'

const Resume = () => {
  return (
    <div id='/resume' className='bg-bgimg h-fit md:w-full w-fit text-stone-100  '>
      <div className='bg-black bg-opacity-[80%] h-fit w-full flex flex-col  justify-center items-center gap-5 pt-[4rem]'>
     
       <img src='./resume.png'></img>
       <button className=' bg-white rounded-2xl  text-black h-[3rem] w-[10rem] '> 
        <a href='resume.pdf' download >Download resume</a></button>
      </div>
    </div>
  )
}

export default Resume
