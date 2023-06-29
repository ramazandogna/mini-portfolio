import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import React from 'react';
import styles from '../../assets/styles/about.module.css';

function SocialWrapper() {
   return (
      <div className={styles.socialWrapper}>
         <h3 className={styles.wrapperTitle}>On the Web</h3>
         <ul>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  className=""
                  alt="git"
                  href="https://github.com/ramazandogna"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaGithub />
                     </span>

                     <div className={styles.socialUserName}>@ramazandogna</div>
                  </button>
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  alt="linkedin"
                  href="https://www.linkedin.com/in/ramazandogna/"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaLinkedin />
                     </span>
                     <div className={styles.socialUserName}>@ramazandogna</div>
                  </button>{' '}
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  alt="twitter"
                  href="https://twitter.com/ramazandogna"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaTwitter />
                     </span>
                     <div className={styles.socialUserName}>@ramazandogna</div>
                  </button>{' '}
               </a>
            </li>
            <li>
               <a
                  target="_blank"
                  rel="noreferrer"
                  alt="twitter"
                  href="https://www.instagram.com/ramazandogna/"
               >
                  <button className={styles.social}>
                     <span className={styles.socialIcon}>
                        <FaInstagram />
                     </span>
                     <div className={styles.socialUserName}>@ramazandogna</div>
                  </button>{' '}
               </a>
            </li>
         </ul>
      </div>
   );
}

export default SocialWrapper;
