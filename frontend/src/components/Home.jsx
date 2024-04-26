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

const Home = () => {
  return (
    <>
         <div className='bg-bgimg h-screen w-screen bg-cover   bg-no-repeat text-white' id ='/'>
         <Navbar/>
    <div className="bg-[#000000] bg-opacity-[80%] h-screen w-screen z-0 pl-[10rem]" >
  
<div className='flex flex-row justify-between items-center h-full w-full '>
    
    <div className='flex flex-col gap-9 w-[50%] pr-[5rem]'>
    <h1  className='text-5xl font-semibold'>Sushma Bhattarai</h1>
    <h2 className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quae?</h2>
      </div> 
     <div className=' flex justify-center items-center   h-full w-[50%] '>
    <div className=''>
     <Carousel  className='h-[20rem]  w-[20rem] rounded-2xl border-2 border-solid ' plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]} >
  <CarouselContent className='h-full w-full'>
    <CarouselItem ><img src ="./public/Bg.jpg"   ></img></CarouselItem>
    <CarouselItem><img src ="./public/Bg.jpg"  ></img></CarouselItem>
    <CarouselItem><img src ="./public/Bg.jpg"  ></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
    </div>
    </div>
  
    </div>
    </div>
    </>
  )
}

export default Home
