import React from 'react'
import { IoBag } from "react-icons/io5";
import {motion} from 'framer-motion'
import { FadeRight } from '../../utility/Animation';
import Heropng from '../../assets/fruit-plate.png'
import Leafpng from '../../assets/leaf.png'

const Hero = () => {
  return (
    <>
    <div>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand Info*/}
          <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
            <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
              <motion.h1
              variants={FadeRight(0.6)}
              initial = "hidden"
              animate = "visible"
               className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose'>Healthy 
              <br/>
              Fresh <span className='text-secondary'>Fruits!</span></motion.h1>
              <motion.p 
               variants={FadeRight(0.9)}
               initial = "hidden"
               animate = "visible"

              className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
              <motion.p
               variants={FadeRight(1.2)}
               initial = "hidden"
               animate = "visible"
               className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis nulla libero accusantium doloremque odit inventore, suscipit laborum vel? Dolores!</motion.p>
              {/* Button */}
              <motion.div
               variants={FadeRight(1.5)}
               initial = "hidden"
               animate = "visible"
               className='flex justify-center md:justify-start'>
                <button className='bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px__-7px_#de0029] hover:!scale-110 duration-300 flex items-center gap-2 ' > <span><IoBag /></span>Order Now</button>
              </motion.div>
            </div>
          </div>
          {/* Hero images*/}
          <div className='flex justify-center items-center'>
            <img src={Heropng} alt="" className='w-[350px] md:w-[550px] drop-shadow'/>
          </div>

        </div>
        {/* leaf Image*/}
        <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
          <img src={Leafpng} alt="" className='w-full md:max-w-[300px]' />
        </div>
    </div>
      
    </>
  )
}

export default Hero
