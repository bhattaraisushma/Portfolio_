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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import About from './About'

const Navbar = () => {
  return (
    <div className='  flex flex-row justify-center items-center gap-4   font-montserrat  '>
<div className='text-white pr-[20rem]'>Sushma</div>
<div>
<NavigationMenu >
  <NavigationMenuList>
  <NavigationMenuItem >
      <NavigationMenuTrigger className='bg-black text-white'>Home</NavigationMenuTrigger>
      {/* <NavigationMenuContent>
        <NavigationMenuLink>{<About/>}</NavigationMenuLink>
      </NavigationMenuContent> */}
    </NavigationMenuItem>
    <NavigationMenuItem >
      <NavigationMenuTrigger className='bg-black text-white'>About</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>{<About/>}</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  {/* </NavigationMenuList>
  <NavigationMenuList> */}
    <NavigationMenuItem>
      <NavigationMenuTrigger className='bg-black text-white'>Skills</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink></NavigationMenuLink>
      </NavigationMenuContent>
   
  <Drawer >
  <DrawerTrigger className='bg-black text-white'>Contact</DrawerTrigger>
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
</NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

</div>
</div>
    
  )
}

export default Navbar
