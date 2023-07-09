import React from 'react';
import styles from '../../assets/styles/resume.module.css';

function Skills() {
   return (
      <div className={styles.skillsWrapper}>
         <h3>My Skills</h3>
         <div className={styles.skillContainer}>
            <span className={styles.year}>1.5 Year</span>
            <div className={styles.name}>React</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>2.0 Year</span>
            <div className={styles.name}>Javascript</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>2.0 Year</span>
            <div className={styles.name}>CSS</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>1.5 Year</span>
            <div className={styles.name}>TailwindCSS</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>4.0 Year</span>
            <div className={styles.name}>HTML</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>2.0 Year</span>
            <div className={styles.name}>Frontend Development</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>4.0 Year</span>
            <div className={styles.name}>HTML</div>
         </div>
         <div className={styles.skillContainer}>
            <span className={styles.year}>2.0 Year</span>
            <div className={styles.name}>SEO</div>
         </div>
      </div>
   );
}

export default Skills;
