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
    <div className='h-screen w-full text-3xl gap-[5rem] flex    bg-bgimg bg-cover bg-no-repeat font-montserrat text-white' id='/skill'>
    <div className='bg-[#000000] bg-opacity-[85%] h-screen w-full  flex justify-start p-[5rem] items-center'>
    <div  className=' h-[30rem] w-[40rem]  rounded-2xl p-5 '>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Html</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={70} className='w-[40rem] '  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>CSS</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={80} className='w-[40rem] '  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>React Js</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={75} className='w-[40rem] '  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Node Js</AccordionTrigger>
    <AccordionContent>
   
    <Progress value={45} className='w-[40rem] '  />
   
    </AccordionContent>
  </AccordionItem>
</Accordion>
   
</div>
</div>
     
    </div>
  )
}

export default Skill
