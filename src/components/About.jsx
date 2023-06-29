import React from 'react';
import styles from '../assets/styles/about.module.css';

function About() {
   return (
      <div className="relative mt-4">
         <div className="">
            <model-viewer alt="Windmill Game" />
            <div className={styles.hello}>
               Hello, I'm an indie app developer based in Japan!
            </div>
            <h2>About</h2>
            <a href="/">123</a>
         </div>
      </div>
   );
}

export default About;
