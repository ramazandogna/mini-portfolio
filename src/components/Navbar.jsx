import { FaBars, FaTimes } from 'react-icons/fa';
import { GiNightSleep, GiSunCloud } from 'react-icons/gi';
import React, { useState } from 'react';

import styles from '../assets/styles/navbar.module.css';

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isNightMode, setIsNightMode] = useState(false);

   return (
      <div className={styles.headerContainer}>
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.leftSide}>
                  <div className={styles.logo}>Ramazan Doğan</div>
                  <ul className={styles.list}>
                     <li className={styles.listItems}>1</li>
                     <li className={styles.listItems}>2</li>
                     <li className={styles.listItems}>3</li>
                  </ul>
               </div>
               <div className={styles.rightSide}>
                  <div className={styles.nightMode}>
                     {isNightMode ? <GiNightSleep /> : <GiSunCloud />}
                  </div>
                  <div
                     className={styles.menuIcon}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                     {isMenuOpen ? <FaTimes /> : <FaBars />}
                  </div>
                  {isMenuOpen && (
                     <ul className={styles.menuItems}>
                        <li className={styles.menuItem}>Projects</li>
                        <li className={styles.menuItem}>Resume</li>
                        <li className={styles.menuItem}>asdas</li>
                     </ul>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
