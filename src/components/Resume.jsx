import MailToButton from './sections/MailToButton';
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
         <div className={styles.resumeSection}>
            <h2 className={styles.sectionTitle}>My Resume</h2>
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
               <ul className={styles.certificateList}>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactBTK}
                  >
                     <li className={styles.certificateListItem}>
                        Web Programming with React - BTK Akademi
                     </li>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR4}
                  >
                     <li className={styles.certificateListItem}>
                        React 401 - Turkcell Geleceği Yazanlar
                     </li>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR3}
                  >
                     <li className={styles.certificateListItem}>
                        React 301 - Turkcell Geleceği Yazanlar
                     </li>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR2}
                  >
                     <li className={styles.certificateListItem}>
                        React 201 - Turkcell Geleceği Yazanlar
                     </li>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={ReactTR1}
                  >
                     <li className={styles.certificateListItem}>
                        React 101 - Turkcell Geleceği Yazanlar
                     </li>
                  </a>
                  <a
                     target="_blank"
                     className={styles.listContainer}
                     rel="noopener noreferrer"
                     href={Seo}
                  >
                     <li className={styles.certificateListItem}>
                        Search Engine Optimization (SEO) - BTK Akademi
                     </li>
                  </a>
               </ul>
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
            <div className={styles.whyMeWrapper}>
               <h3>Why Me</h3>
               <div>
                  <p className={styles.whyP}>
                     I have a strong passion for continuous learning and
                     development in my career.
                  </p>
                  <ul className={styles.whyList}>
                     <li className={styles.whyItem}>
                        In early 2022, I successfully completed a comprehensive
                        course on React provided by BTK.
                     </li>
                     <li className={styles.whyItem}>
                        I expanded my skill set by mastering TailwindCSS and
                        exploring its integration with postCSS, utilizing the
                        apply methods. Later, in late 2022,
                     </li>
                     <li className={styles.whyItem}>
                        I enrolled in the Turkcell Geleceği Yazanlar Course,
                        where I gained a deep understanding of the Context API.
                        My commitment to growth led me to pursue further
                        education, and currently,
                     </li>
                     <li className={styles.whyItem}>
                        I am enrolled in Dr. Angela Yu's Fullstack Web
                        Development course, where I am honing my skills in
                        typography and color design ethics. I am dedicated to
                        staying upto-date with the latest industry trends and
                        continually expanding my knowledge.
                     </li>
                     <li className={styles.whyItem}>
                        I am aware of the importance of SEO in frontend
                        development, and I am capable of building performant
                        modern applications.
                     </li>
                  </ul>
               </div>
            </div>
            <MailToButton />
         </div>
      </div>
   );
}

export default Resume;
