import Certificates from '../components/Certificates';
import MailToButton from '../components/MailToButton';
import React from 'react';
import Skills from '../components/Skills';
import Whyme from '../components/Whyme';
import { motion } from 'framer-motion';
import styles from '../assets/styles/resume.module.css';
import AnimatedSection from '../components/AnimatedSection';

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
            <AnimatedSection>
               <div className={styles.certificateWrapper}>
                  <h3>Certificates</h3>
                  <p className={styles.certificateWrapperP}>
                     You can click certificate name to view.
                  </p>{' '}
                  <Certificates />
               </div>{' '}
            </AnimatedSection>
            <AnimatedSection>
               {' '}
               <div className={styles.languageWrapper}>
                  <h3>Languages</h3>
                  <div className={styles.languageContainer}>
                     <span className={styles.year}>Turkish</span>
                     <div className={styles.name}>Native speaker level</div>
                  </div>
                  <div className={styles.languageContainer}>
                     <span className={styles.year}>English</span>
                     <div className={styles.name}>Professional working level</div>
                  </div>
               </div>
            </AnimatedSection>
            <AnimatedSection>
               <div className={styles.whyMeWrapper}>
                  <h3>Why Me</h3>
                  <Whyme />
               </div>
            </AnimatedSection>
            <AnimatedSection>
               <MailToButton />
            </AnimatedSection>
         </div>
      </motion.div>
   );
}

export default Resume;
