import Character from '../assets/images/child.png';
import React from 'react';

function Banner() {
   return (
      <div className="container">
         <img
            src={Character}
            alt=""
            className=" rounded-lg"
         />
      </div>
   );
}

export default Banner;
