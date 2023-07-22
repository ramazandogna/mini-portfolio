import Certificates from './sections/Certificates';
import MailToButton from './sections/MailToButton';
import React from 'react';
import Skills from './sections/Skills';
import Table from './sections/Table';
import Whyme from './sections/Whyme';
import { motion } from 'framer-motion';
import styles from '../assets/styles/resume.module.css';

function Resume() {
   return (
      <motion.div
         initial={{ opacity: 0, translateY: 150 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ delay: 0.05 }}
         className="section"
      >
         <div className={styles.resumeSection}>
            <h2 className={styles.sectionTitle}>My Resume</h2>
            <div className={styles.resumeWrapper}>
               <Skills />
            </div>
            <div className={styles.certificateWrapper}>
               <h3>Certificates</h3>
               <p className={styles.certificateWrapperP}>
                  You can click certificate name to view.
               </p>
               <Certificates />
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
               <Whyme />
            </div>
            <MailToButton />
         </div>
      </motion.div>
   );
}

export default Resume;
