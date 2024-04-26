import React, { useEffect, useState } from 'react'
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
  const [scrolled,setScrolled]=useState(false)
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 460) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <div className={` bg-[#000000] flex flex-row justify-center items-center $ {scrolled ? (bg-opacity-[100%])  : (bg-opacity-[80%])} gap-4 w-full  font-montserrat fixed`}>
<div className='text-white text-4xl pr-[20rem]'>Sushma</div>
<div>
<NavigationMenu >
  <NavigationMenuList>
  <NavigationMenuItem >
  <Link to ='/' smooth={true} duration={1000}>   <NavigationMenuTrigger className='bg-[#000000] text-white'>Home</NavigationMenuTrigger></Link>
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
