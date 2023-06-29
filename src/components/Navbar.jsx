import { FaBars, FaReact, FaSun } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdNightlight } from 'react-icons/md';
import styles from '../assets/styles/navbar.module.css';

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isNightMode, setIsNightMode] = useState(false);

   useEffect(() => {
      if (isNightMode) {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
      console.log(isNightMode);
   }, [isNightMode]);

   return (
      <div className={styles.headerContainer}>
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.leftSide}>
                  <Link
                     to="/"
                     className={styles.logo}
                  >
                     <FaReact className={styles.logoIcon} /> Ramazan DOĞAN
                  </Link>
                  <ul className={styles.list}>
                     <Link
                        to="/projects"
                        className={styles.listLink}
                     >
                        <li className={styles.listItems}>Projects</li>
                     </Link>
                     <Link
                        to="/resume"
                        className={styles.listLink}
                     >
                        <li className={styles.listItems}>Resume</li>
                     </Link>
                  </ul>
               </div>
               <div className={styles.rightSide}>
                  <div
                     onClick={() => setIsNightMode(!isNightMode)}
                     className={styles.nightMode}
                  >
                     {isNightMode ? (
                        <div className={styles.nightIcon}>
                           <MdNightlight />
                        </div>
                     ) : (
                        <div className={styles.dayIcon}>
                           <FaSun />
                        </div>
                     )}
                  </div>
                  <div
                     className={styles.menuIcon}
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                     <FaBars />
                  </div>
                  {isMenuOpen && (
                     <div className={styles.menuItems}>
                        <Link
                           to="/projects"
                           className={styles.menuItem}
                        >
                           <p className={styles.menuItemText}>Projects</p>
                        </Link>
                        <Link
                           to="/resume"
                           className={styles.menuItem}
                        >
                           <p className={styles.menuItemText}>Resume</p>
                        </Link>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
