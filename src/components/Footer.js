import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import React from 'react';
import styles from '../assets/styles/footer.module.css';

const Footer = () => {
   return (
      <div className="container">
         <div className={styles.footerWrapper}>
            <span className={styles.created}>
               © 2023 Created by Ramazan Doğan
            </span>
            <a
               href="https://github.com/ramazandogna"
               target="_blank"
               rel="noopener noreferrer"
            >
               <AiFillGithub className={styles.github} />
            </a>
            <a
               href="https://www.linkedin.com/in/ramazandogna/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <AiFillLinkedin className={styles.linkedin} />
            </a>
         </div>
      </div>
   );
};

export default Footer;
