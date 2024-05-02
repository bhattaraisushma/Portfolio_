import React from 'react'
import Navbar from './Navbar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import About from './About'
import Skill from './Skill'

const Home = () => {
  return (
    <>
         <div className='bg-bgimg md:h-screen h-fit w-screen bg-cover md:mb-0 mb-[14rem]  bg-no-repeat text-white' id ='/'>
    
    <div className="bg-[#000000] bg-opacity-[80%] md:h-screen h-fit w-screen  pl-[10rem]" >
  
<div className='flex md:flex-row flex-col md:justify-between gap-2 md:items-center md:h-full w-screen h-fit pt-[14rem]  '>
    
    <div className='flex flex-col gap-9  md:w-[50%] w-full md:pr-[5rem] items-center'>
    <h1  className='md:text-5xl text-3xl font-semibold'>Sushma Bhattarai</h1>
    <h2 className='md:text-3xl text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae?</h2>
      </div> 
     <div className=' flex justify-center items-center   md:h-full md:w-[50%] w-full  '>
    <div className=''>
     <Carousel  plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]} >
  <CarouselContent  className='h-[25rem]  w-[25rem] rounded-3xl border-2 border-solid  '>
    <CarouselItem  ><img src ="./sush.jpeg"  style={{height:"25rem", width:"25rem", objectFit:"cover", resize:"horizontal"}}  ></img></CarouselItem>
    <CarouselItem className=''><img src ="./sushma.jpg"  ></img></CarouselItem>
    <CarouselItem className=''><img src ="./sush.jpeg"   style={{height:"25rem", width:"25rem", objectFit:"cover"}} ></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
    </div>
    </div>
  
    </div>
    </div>
    <About/>
    <Skill/>
    </>
  )
}

export default Home
