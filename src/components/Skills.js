import React from 'react';
import styles from '../assets/styles/resume.module.css';
import { motion } from 'framer-motion';

const mySkills = [
   {
      year: '1.5 year',
      name: 'React',
   },
   {
      year: '0-1 year',
      name: 'Nextjs',
   },
   {
      year: '2.0 year',
      name: 'JavaScript',
   },
   {
      year: '1.0 year',
      name: 'TypeScript',
   },
   {
      year: '2.0 year',
      name: 'CSS',
   },
   {
      year: '1.5 year',
      name: 'TailwindCSS',
   },
   {
      year: '4 year',
      name: 'HTML',
   },
   {
      year: '2.0 year',
      name: 'Frontend Development',
   },
   {
      year: '2.0 year',
      name: 'SEO',
   },
   {
      year: '0-1 year',
      name: 'VUE',
   },
   {
      year: '0-1 year',
      name: 'React Native',
   },
];

const container = {
   hidden: { opacity: 0, scale: 0.5 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.1,
         staggerChildren: 0.2,
      },
   },
};

const item = {
   hidden: { x: 20, y: 20, opacity: 0 },
   visible: {
      x: 0,
      y: 0,
      opacity: 1,
   },
};

function Skills() {
   return (
      <div className={styles.skillsWrapper}>
         <h3>My Skills</h3>
         <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.05 }}
            className={styles.skillContainerWrapper}
         >
            {mySkills.map((skill) => (
               <motion.div
                  variants={item}
                  key={skill.id}
                  className={styles.skillContainer}
               >
                  <span className={styles.year}>{skill.year}</span>
                  <div className={styles.name}>{skill.name}</div>
               </motion.div>
            ))}
         </motion.div>
      </div>
   );
}

export default Skills;
