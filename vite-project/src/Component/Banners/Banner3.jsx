import React from 'react'
import Bannerpng from '../../assets/banner-bg.jpg'
import { IoBag } from "react-icons/io5";
import {motion} from 'framer-motion'
import { FadeUp,FadeLeft } from '../../utility/Animation';

const bgStyle ={
    backgroundImage: `url(${Bannerpng})`,
    backgroundposition:"center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
  return (
    <>
    <div>
    <div className='bg-secondary/10'>
        <div style={bgStyle}className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
            {/* Banner */}
            <div>

            </div>
            {/* Brand Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                    variants={FadeLeft(0.6)}
                    initial = "hidden"
                    
                    className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</motion.h1>
                    <motion.p
                     variants={FadeUp(0.7)}
                     initial = "hidden"
                     whileInView="visible">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorum facere earum quos animi, adipisci tenetur quas aut iure accusamus quidem nostrum exercitationem tempora. Ut dolore est facilis quaerat magni!
                    </motion.p>
                    <motion.p
                    variants={FadeUp(0.9)}
                    initial = "hidden"
                    whileInView="visible">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia asperiores reprehenderit obcaecati nemo vero.
                    </motion.p>
                    {/* Button */}
                    <motion.div
               variants={FadeUp(1.5)}
               initial = "hidden"
               animate = "visible"
               className='flex justify-center md:justify-start'>
                <button className='bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px__-7px_#de0029] hover:!scale-110 duration-300  ' > Learn More</button>
              </motion.div>
                    
                </div>
            </div>

        </div>
    </div>
    </div>
      
    </>
  )
}

export default Banner3
