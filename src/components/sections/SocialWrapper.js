import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import React from 'react';
import styles from '../../assets/styles/about.module.css';

function SocialWrapper() {
   return (
      <div className={styles.socialWrapper}>
         <h3 className={styles.wrapperTitle}>On the Web</h3>
         <ul className={styles.socialContainer}>
            <li>
               <a
                  className={styles.buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  alt="git"
                  href="https://github.com/ramazandogna"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaGithub />
                     </span>

                     <p className={styles.socialUserName}>@ramazandogna</p>
                  </button>
               </a>
            </li>
            <li>
               <a
                  className={styles.buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  alt="linkedin"
                  href="https://www.linkedin.com/in/ramazandogna/"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaLinkedin />
                     </span>
                     <p className={styles.socialUserName}>@ramazandogna</p>
                  </button>{' '}
               </a>
            </li>
            <li>
               <a
                  className={styles.buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  alt="twitter"
                  href="https://twitter.com/ramazandogna"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaTwitter />
                     </span>
                     <p className={styles.socialUserName}>@ramazandogna</p>
                  </button>{' '}
               </a>
            </li>
            <li>
               <a
                  className={styles.buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  alt="twitter"
                  href="https://www.instagram.com/ramazandogna/"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaInstagram />
                     </span>
                     <p className={styles.socialUserName}>@ramazandogna</p>
                  </button>{' '}
               </a>
            </li>
         </ul>
      </div>
   );
}

export default SocialWrapper;
