import Ben from '../assets/images/ben.jpeg';
import BioWrapper from '../components/sections/BioWrapper';
import { BsFillSendFill } from 'react-icons/bs';
import Pokepoke from '../assets/images/pokepoke-app.png';
import React from 'react';
import SocialWrapper from './sections/SocialWrapper';
import Umutvadi from '../assets/images/umutvadi.png';
import styles from '../assets/styles/about.module.css';

function About() {
   return (
      <div className="section">
         <div className={styles.aboutWrapper}>
            <div className={styles.hello}>
               Hello, I'm an frontend developer based in Turkey!
            </div>
            <div className={styles.introduction}>
               <div className={styles.infoContainer}>
                  <h2 className={styles.infoName}>Ramazan Doğan</h2>
                  <p className={styles.infoP}>
                     Online Guy ( Content Editor / Developer )
                  </p>
               </div>
               <img
                  src={Ben}
                  alt=""
                  className={styles.img}
               />
            </div>
            <div className={styles.workWrapper}>
               <h3 className={styles.wrapperTitle}>Work</h3>
               <p className={styles.workP}>
                  <span className={styles.pBreaks}></span>
                  Ramazan is a Computer Engineering Student based in Kırşehir,
                  who has been involved in frontend development for 2 years. He
                  is enthusiastic about using new technologies and libraries. He
                  has been working with React for 1.5 years and has experience
                  with libraries like Redux Toolkit. He enjoys using tools such
                  as CSS, Bootstrap, and Tailwind for design purposes. During
                  his free time, he likes to create content for his website and
                  listen to music. His website has exceeded a total of 1 million
                  visitors. He is currently seeking a work environment where he
                  can continue to enhance his skills and grow professionally.
               </p>
            </div>

            <BioWrapper />
            <div className={styles.iLoveWrapper}>
               <h3 className={styles.wrapperTitle}>I Love ❤️</h3>
               <p>
                  Football,{' '}
                  <a
                     className={styles.a}
                     rel="noreferrer"
                     target="_blank"
                     href="https://umutvadi.com"
                  >
                     Writing
                  </a>
                  , Music, Sitcom, Coding, Body Building
               </p>
            </div>
            <SocialWrapper />
            <div className={styles.photoContainer}>
               <a
                  className={styles.projectImageContainer}
                  target="_blank"
                  rel="noreferrer"
                  href="https://pokepokeapp.netlify.app/"
               >
                  <img
                     className={styles.projectImage}
                     src={Pokepoke}
                     alt=""
                  />
                  <p className={styles.projectP}>Pokepoke App</p>
                  <p className={styles.projectP2}>
                     Pokedex app designed entirely by me
                  </p>
               </a>
               <a
                  className={styles.projectImageContainer}
                  target="_blank"
                  rel="noreferrer"
                  href="https://pokepokeapp.netlify.app/"
               >
                  <img
                     className={styles.projectImage}
                     src={Umutvadi}
                     alt=""
                  />
                  <p className={styles.projectP}>Umutvadi</p>
                  <p className={styles.projectP2}>
                     My website ( - 1.5M Single hit )
                  </p>
               </a>
            </div>
            <div>
               <h3 className={styles.wrapperTitle}>Mail</h3>
               <p>
                  Join me on a behind-the-scenes coding journey. Weekly updates
                  on projects, tutorials, and videos
               </p>
               <div className={styles.mailContainer}>
                  <button className={styles.mailButton}>
                     <BsFillSendFill /> Click Here and Mail Me
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
