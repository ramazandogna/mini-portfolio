import Character from '../assets/images/child.png';
import React from 'react';

function Banner() {
   return (
      <div className="container">
         <div className="flex justify-center">
            <img
               src={Character}
               alt=""
               className=" max-w-sm rounded-lg no-select"
            />
         </div>
      </div>
   );
}

export default Banner;
