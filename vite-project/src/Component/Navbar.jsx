import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from 'framer-motion'


const NavbarMenu =[
    {id:1, title:'Home', url:'/' },
    {id:2, title:'About', url:'/' },
    {id:3, title:'Products', url:'/' },
    {id:4, title:'Shop', url:'/' },
    {id:5, title:'Contact', url:'/' },


]


const Navbar = () => {
    const [Open, setOpen] = React.useState(false);
  return (
    <>
    <div>
        <motion.div
         className="container flex justify-between items-center py-4 md:pt-4">
            {/* Logo section*/}
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className='text-primary' >Fruits</p>
                <p className='text-secondary'>Store</p>
                <FaLeaf  className='text-green-500'/>

            </div>

            {/* Menu section */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-6 text-gray-600'>
                    {NavbarMenu.map((menu)=>(
                        <li key={menu.id} >
                            <a href={menu.url}
                            className=' inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                            
                            >{menu.title}</a>
                        </li>
                    ))}

                    <button className='text-2xl hover:bg-primary  hover:text-white rounded-full p-2 duration-300'>
                    <MdOutlineShoppingCart />
                    </button>
                </ul>
            </div>


            {/* mobile Hamburger */}

            <div className='md:hidden ' onClick={()=>setOpen(!Open)}>
            <MdMenu className='text-4xl'/>
            </div>
        </motion.div>

    </div>
    {/* Responsive Menu */}
     <ResponsiveMenu Open={Open} />
      
    </>
  )
}

export default Navbar
