import React from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


const Navbar = () => {
  return (
    <div className=' text-black '>
         <Drawer >
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader className='h-[25rem]'>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter> 
      <DrawerClose>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </div>
  )
}

export default Navbar
