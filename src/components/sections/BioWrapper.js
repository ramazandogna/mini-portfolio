import React from 'react';
import styles from '../../assets/styles/about.module.css';

function BioWrapper() {
   return (
      <div className={styles.bioWrapper}>
         <h3 className={styles.wrapperTitle}>Bio</h3>
         <div className={styles.bio}>
            <span className={styles.date}>1999</span>
            <div className={styles.bioInfo}>Born in Kırşehir, Türkiye.</div>
         </div>
         <div className={styles.bio}>
            <span className={styles.date}>2019</span>
            <div className={styles.bioInfo}>
               He started computer engineering at Bilecik Şeyh Edebali
               Üniversitesi.
            </div>
         </div>
         <div className={styles.bio}>
            <span className={styles.date}>2019</span>
            <div className={styles.bioInfo}>
               He created to{' '}
               <a
                  rel="noreferrer"
                  className={styles.a}
                  target="_blank"
                  href="https://umutvadi.com"
                  alt="umutvadi"
               >
                  <span className="pink">Umutvadi</span>
               </a>{' '}
               and writed first content in the late part of year.
            </div>
         </div>
         <div className={styles.bio}>
            <span className={styles.date}>2022</span>
            <div className={styles.bioInfo}>
               He started first React course at BTK Akademi in the early part of
               year (Web programing with React).
            </div>
         </div>
         <div className={styles.bio}>
            <span className={styles.date}>2023</span>
            <div className={styles.bioInfo}>
               Now he is looking for job opportunities in the Frontend developer
               position.
            </div>
         </div>
      </div>
   );
}

export default BioWrapper;
