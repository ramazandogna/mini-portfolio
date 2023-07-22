import Character from '../assets/images/child.png';
import React from 'react';
import { motion } from 'framer-motion';

function Banner() {
   return (
      <motion.div
         initial={{ opacity: 0, translateX: 50 }}
         animate={{ opacity: 1, translateX: 0 }}
         transition={{ delay: 0.2 }}
         className="container"
      >
         <div className="flex justify-center">
            <img
               src={Character}
               alt=""
               className="max-w-sm rounded-full shadow-sm"
            />
         </div>
      </motion.div>
   );
}

export default Banner;
