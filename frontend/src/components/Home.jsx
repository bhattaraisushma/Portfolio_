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
    </>
  )
}

export default Home
