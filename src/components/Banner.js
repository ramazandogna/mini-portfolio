import Character from '../assets/images/ramazan-2.png';
import React from 'react';
import { motion } from 'framer-motion';

function Banner() {
   return (
      <motion.div
         initial={{ opacity: 0, translateY: 20 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ type: 'spring', stiffness: 100, duration: 1, delay: 0.2 }}
         className="container"
      >
         <div className="flex justify-center">
            <img
               src={Character}
               alt=""
               className="max-w-sm my-[0.07rem rounded-t-full   border-black"
            />
         </div>
      </motion.div>
   );
}

export default Banner;
