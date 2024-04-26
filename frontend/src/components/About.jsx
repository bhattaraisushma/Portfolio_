import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full flex flex-row justify-between text-black px-[4rem] font-montserrat' id='/about'>
    <div className='flex  flex-col m items-center w-[50%] p-4 justify-center'>
<h1 className='text-4xl font-bold pb-4'>    Who am  I? </h1>
<h2 className='text-2xl font-medium pb-6'>I am Sushma Bhattarai with keen interest in web development and Graphics Designing currently pursuing Computer Engineering in Thapathali Campus, Kathmandu</h2>
<h2 className='text-2xl font-medium'>I have a ultimate passion for code as a web developer. My passion and undoubted dedication towards tech was enlightened on me seeing the prospects and vast potentiality in my country.
Creating multiple webs and serving in the Tech sectors always keeps me motivated. 
From tinkering with hardware to delving into the intricacies of software development, I've explored every corner of the tech universe. My quest for knowledge has led me to embrace emerging trends, dive deep into coding languages, and stay ahead of the curve in an ever-evolving digital landscape.
</h2></div>
    {/* <div className=''> */}
      <div className='h-[40rem] w-[30rem] flex justify-center items-center bg-red'>
      <img src='./sushma.jpg' className='rounded-3xl h-[30rem]'></img>
      {/* </div> */}

    </div>
    </div>
  )
}

export default About
