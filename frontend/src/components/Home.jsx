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
    
    <div className="bg-[#000000] bg-opacity-[80%] md:h-screen h-fit w-screen  md:pr-[10rem]" >
  
<div className='flex md:flex-row flex-col md:justify-between gap-2 md:items-center md:h-full w-screen h-fit pt-[6rem]  '>
    
    <div className='flex flex-col md:gap-9 gap-3 md:w-[50%] w-full  items-center'>
    <h1  className='md:text-5xl text-3xl font-semibold'>Sushma Bhattarai</h1>
    <h2 className='md:text-3xl text-xl mb-6'>Web developer /Graphics Designer</h2>
      </div> 
     <div className='  flex justify-center items-center   md:h-screen md:w-[50%] w-full   '>
    <div className=' '>
     <Carousel  plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]} >
  <CarouselContent  className='h-[25rem]  w-[25rem] rounded-3xl border-2 border-solid  pr-3 '>
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
