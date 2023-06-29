import MovieApp from '../../assets/images/movie-api.png';
import Pokepoke from '../../assets/images/pokepoke-app.png';
import React from 'react';
import ReactPortfolio from '../../assets/images/react-portfolio.png';
import Umutvadi from '../../assets/images/umutvadi.png';
import styles from '../../assets/styles/projects.module.css';

function ProjectCard() {
   return (
      <div className={styles.projects}>
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
         <div className={styles.photoContainer}>
            <a
               className={styles.projectImageContainer}
               target="_blank"
               rel="noreferrer"
               href="https://pokepokeapp.netlify.app/"
            >
               <img
                  className={styles.projectImage}
                  src={MovieApp}
                  alt=""
               />
               <p className={styles.projectP}>Umutvadi</p>
               <p className={styles.projectP2}>
                  My website ( - 1.5M Single hit )
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
                  src={ReactPortfolio}
                  alt=""
               />
               <p className={styles.projectP}>Umutvadi</p>
               <p className={styles.projectP2}>
                  My website ( - 1.5M Single hit )
               </p>
            </a>
         </div>
      </div>
   );
}

export default ProjectCard;
