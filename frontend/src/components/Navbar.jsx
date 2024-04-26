import React from 'react'
import { Link } from 'react-scroll'
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


const Navbar = () => {
  return (
    <div className=' bg-[#000000] bg-opacity-[80%] flex flex-row justify-center items-center gap-4 w-full  font-montserrat fixed '>
<div className='text-white pr-[20rem]'>Sushma</div>
<div>
<NavigationMenu >
  <NavigationMenuList>
  <NavigationMenuItem >
  <Link to ='/' smooth={true} duration={1000}>   <NavigationMenuTrigger className='bg-black text-white'>Home</NavigationMenuTrigger></Link>
      {/* <NavigationMenuContent>
        <NavigationMenuLink>{<About/>}</NavigationMenuLink>
      </NavigationMenuContent> */}
    </NavigationMenuItem>
    <NavigationMenuItem >
    <Link to='/about' duration={1000} smooth={true}> <NavigationMenuTrigger className='bg-black text-white'>About</NavigationMenuTrigger></Link>
      {/* <NavigationMenuContent>
        <NavigationMenuLink>{<About/>}</NavigationMenuLink>
      </NavigationMenuContent> */}
    </NavigationMenuItem>
  {/* </NavigationMenuList>
  <NavigationMenuList> */}
    <NavigationMenuItem>
      <NavigationMenuTrigger className='bg-black text-white'>Skills</NavigationMenuTrigger>
      {/* <NavigationMenuContent>
        <NavigationMenuLink></NavigationMenuLink>
      </NavigationMenuContent>
    */}
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
