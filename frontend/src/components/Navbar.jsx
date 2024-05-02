import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import {  LucideHome,LucideContact } from 'lucide-react'
import { FacebookIcon,InstagramIcon,LinkedinIcon,Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [issmall,setIssmall]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 460) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    const checkSize = () => {
      if(window.innerWidth <= 768){
        setIssmall(true)
      }
      else{
        setIssmall(false)
      }
    }
  
    // Call checkSize on mount and whenever window is resized
    checkSize();
    window.addEventListener('resize', checkSize);
  
    window.addEventListener('scroll', checkScroll);
  
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <div className={` bg-[#000000] flex flex-row justify-center items-center $ {scrolled ? (bg-opacity-[100%])  : (bg-opacity-[80%])} gap-4 w-full  font-montserrat fixed`}>
<div className='text-white text-3xl pr-[20rem] flex flex-row'>Sushma

</div>

<div>
  {!issmall ? (
<NavigationMenu>
  <NavigationMenuList>
  <NavigationMenuItem >
  <Link to ='/' smooth={true} duration={1000}> 
  <NavLink to ='/'>
    <NavigationMenuTrigger className='bg-[#000000] text-white'><LucideHome/>Home</NavigationMenuTrigger>
    </NavLink>
    </Link>
     
    </NavigationMenuItem>
    <NavigationMenuItem >
    <Link to='/about' duration={1000} smooth={true}> <NavigationMenuTrigger className='bg-black text-white'>About</NavigationMenuTrigger></Link>
    
    </NavigationMenuItem>
    <Drawer >
  <DrawerTrigger className='bg-black text-white flex flex-row  ml-4'>
  <LucideContact/>
    Contact</DrawerTrigger>
  <DrawerContent className="border-2 border-solid border-black "> 
    <DrawerHeader className='h-[12rem] flex  flex-col justify-center items-center gap-10'>
      <DrawerTitle className='text-3xl'>Find me on</DrawerTitle>
      <DrawerDescription className='flex flex-row   gap-5'><a href="https://www.facebook.com/sushma.bhattarai.3532/"><FacebookIcon /></a> 
 
      <a href='https://www.instagram.com/sush_ma___/'> <InstagramIcon/></a>
      <a href='https://www.linkedin.com/in/sushma-bhattarai-b04712212/'>  <LinkedinIcon/></a>
  
      
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter> 
      <DrawerClose>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
 
  
    <NavigationMenuItem>
      <Link to ='/skill' smooth={true} duration={1000}>
        
        <NavigationMenuTrigger className='bg-black text-white'>Skills</NavigationMenuTrigger></Link>
 
</NavigationMenuItem>
<NavigationMenuItem>
      <NavLink to ='/resume' smooth={true} duration={1000}>
        
        <NavigationMenuTrigger className='bg-black text-white'>Resume</NavigationMenuTrigger></NavLink>
 
</NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
  ):(
    <NavigationMenu>
  <NavigationMenuList>
    <DropdownMenu  >
    <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
    <DropdownMenuContent className=' bg-black' >
      <DropdownMenuLabel>

      <NavigationMenuItem >
  <Link to ='/' smooth={true} duration={1000}> 
  <NavLink to ='/'>
    <NavigationMenuTrigger className='bg-[#000000] text-white'><LucideHome/>Home</NavigationMenuTrigger>
    </NavLink>
    </Link>
     
    </NavigationMenuItem>

      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>

      <NavigationMenuItem >
    <Link to='/about' duration={1000} smooth={true}> <NavigationMenuTrigger className='bg-black text-white'>About</NavigationMenuTrigger></Link>
    
    </NavigationMenuItem>

      </DropdownMenuItem>
      <DropdownMenuItem>
      <NavigationMenuItem>
      <Link to ='/skill' smooth={true} duration={1000}>
        
        <NavigationMenuTrigger className='bg-black text-white'>Skills</NavigationMenuTrigger></Link>
 
</NavigationMenuItem>


      </DropdownMenuItem>
      <DropdownMenuItem>  <NavigationMenuItem>
      <Link to ='/skill' smooth={true} duration={1000}>
        
        <NavigationMenuTrigger className='bg-black text-white'>About</NavigationMenuTrigger></Link>
 
</NavigationMenuItem></DropdownMenuItem>
      <DropdownMenuItem>

      <Drawer >
  <DrawerTrigger className='bg-black text-white flex flex-row  ml-4'>
  <LucideContact/>
    Contact</DrawerTrigger>
  <DrawerContent className="border-2 border-solid border-black "> 
    <DrawerHeader className='h-[12rem] flex  flex-col justify-center items-center gap-10'>
      <DrawerTitle className='text-3xl'>Find me on</DrawerTitle>
      <DrawerDescription className='flex flex-row   gap-5'><a href="https://www.facebook.com/sushma.bhattarai.3532/"><FacebookIcon /></a> 
 
      <a href='https://www.instagram.com/sush_ma___/'> <InstagramIcon/></a>
      <a href='https://www.linkedin.com/in/sushma-bhattarai-b04712212/'>  <LinkedinIcon/></a>
  
      
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter> 
      <DrawerClose>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
 

      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  </NavigationMenuList>
  </NavigationMenu>

  )}

</div>
</div>
    
  )
}

export default Navbar
