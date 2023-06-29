import React from 'react';
import ReactBTK from '../assets/pdfs/REACT__le_Web_Programc_l____Sertifika.pdf';
import ReactTR1 from '../assets/pdfs/Ramazan Doğan-React101.pdf';
import ReactTR2 from '../assets/pdfs/Ramazan Doğan-React201.pdf';
import ReactTR3 from '../assets/pdfs/Ramazan Doğan-React301.pdf';
import ReactTR4 from '../assets/pdfs/Ramazan Doğan-React401.pdf';
import Seo from '../assets/pdfs/Arama_Motoru_Optimizasyonu_(SEO)_E_itimi__Sertifika.pdf';
import Table from './sections/Table';
import styles from '../assets/styles/resume.module.css';

function Resume() {
   return (
      <div className="section">
         <div>
            <div className={styles.resumeWrapper}>
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
            </div>
            <div className={styles.certificateWrapper}>
               <h3>Certificates</h3>
               <div className={styles.certificateList}>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactBTK}
                  >
                     <div className={styles.certificateListItem}>
                        Web Programming with React - BTK Akademi
                     </div>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR4}
                  >
                     <div className={styles.certificateListItem}>
                        React 401 - Turkcell Geleceği Yazanlar
                     </div>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR3}
                  >
                     <div className={styles.certificateListItem}>
                        React 301 - Turkcell Geleceği Yazanlar
                     </div>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR2}
                  >
                     <div className={styles.certificateListItem}>
                        React 201 - Turkcell Geleceği Yazanlar
                     </div>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR1}
                  >
                     <div className={styles.certificateListItem}>
                        React 101 - Turkcell Geleceği Yazanlar
                     </div>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={Seo}
                  >
                     <div className={styles.certificateListItem}>
                        Search Engine Optimization (SEO) - BTK Akademi
                     </div>
                  </a>
               </div>
            </div>
            <div className={styles.languageWrapper}>
               <h3>Languages</h3>

               <div className={styles.skillContainer}>
                  <span className={styles.year}>Turkish</span>
                  <div className={styles.name}>Native speaker level</div>
               </div>
               <div className={styles.skillContainer}>
                  <span className={styles.year}>English</span>
                  <div className={styles.name}>
                     Professional Working Proficiency
                  </div>
               </div>
            </div>
            <div className={styles.referencesWrapper}>
               <h3>My References</h3>
               <Table />
            </div>
         </div>
      </div>
   );
}

export default Resume;
