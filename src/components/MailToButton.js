import { BsFillSendFill } from 'react-icons/bs';
import React from 'react';
import styles from '../assets/styles/about.module.css';

function MailToButton() {
   return (
      <div className={styles.mailContainer}>
         <a href="mailto:doganrmzn40@gmail.com">
            <button className={styles.mailButton}>
               <BsFillSendFill /> Send me a magical email!
            </button>
         </a>
      </div>
   );
}

export default MailToButton;
