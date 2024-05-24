import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Progress } from "@/components/ui/progress"
const Skill = () => {
  return (
    <div className='md:h-screen h-fit w-full text-3xl gap-[5rem] flex    bg-bgimg bg-cover bg-no-repeat font-montserrat text-white' id='/skill'>
    
    <div className='bg-[#000000] bg-opacity-[85%] md:h-screen h-fit w-full  flex justify-start md:p-[5rem] md:items-center md:top-0 pt-[16rem]'>

    <div  className=' h-[30rem] w-[40rem] rounded-2xl p-5 '>
    <div className='font-montserrat text-3xl flex justify-center'>My Skills </div>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Html</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={70} className='md:w-[40rem] w-[20rem]'  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>CSS</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={80} className='md:w-[40rem] w-[20rem] '  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>React Js</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={75} className='md:w-[40rem] w-[20rem]'  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Node Js</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={45} className='md:w-[40rem] w-[20rem] '  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
   
</div>
</div>
     
    </div>
  )
}

export default Skill
