import React from 'react';
import styles from '../assets/styles/resume.module.css';

function Whyme() {
   return (
      <div>
         <p className={styles.whyP}>
            I have a strong passion for continuous learning and development in
            my career.
         </p>
         <ul className={styles.whyList}>
            <li className={styles.whyItem}>
               In early 2022, I successfully completed a comprehensive course on
               React provided by BTK.
            </li>
            <li className={styles.whyItem}>
               I expanded my skill set by mastering TailwindCSS and exploring
               its integration with postCSS, utilizing the apply methods. Later,
               in late 2022,
            </li>
            <li className={styles.whyItem}>
               I enrolled in the Turkcell Geleceği Yazanlar Course, where I
               gained a deep understanding of the Context API. My commitment to
               growth led me to pursue further education, and currently,
            </li>
            <li className={styles.whyItem}>
               I am enrolled in Dr. Angela Yu's Fullstack Web Development
               course, where I am honing my skills in typography and color
               design ethics. I am dedicated to staying upto-date with the
               latest industry trends and continually expanding my knowledge.
            </li>
            <li className={styles.whyItem}>
               I am aware of the importance of SEO in frontend development, and
               I am capable of building performant modern applications.
            </li>
         </ul>
      </div>
   );
}

export default Whyme;
