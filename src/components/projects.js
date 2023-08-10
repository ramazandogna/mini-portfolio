import MovieApp from '../assets/images/movie-api.png';
import Pokepoke from '../assets/images/pokepoke-app.png';
import React from 'react';
import ReactPortfolio from '../assets/images/react-portfolio.png';
import Umutvadi from '../assets/images/umutvadi.png';
import { motion } from 'framer-motion';
import styles from '../assets/styles/projects.module.css';

const projectsData = {
   projects: [
      {
         title: 'PokepokeApp',
         image: Pokepoke,
         description: 'Pokedex app with PokeAPI. (React, Redux Toolkit, CSS)',
         url: 'https://pokepokeapp.netlify.app/',
      },
      {
         title: 'Umutvadi',
         image: Umutvadi,
         description: 'My personal website - 1.5M Single hit (Wordpress, Content Writer, SEO)',
         url: 'https://umutvadi.com/',
      },
      {
         title: 'MovieAPI',
         image: MovieApp,
         description: 'Movie watchlist app. (React, Redux Toolkit, MaterialUI)',
         url: 'https://movie-api-app-demo.netlify.app',
      },
      {
         title: 'Portfolio',
         image: ReactPortfolio,
         description: 'A simple portfolio web app. (React, React Hooks, TailwindCSS)',
         url: 'https://react-portfoilo-demo.netlify.app',
      },
   ],
};

const container = {
   hidden: { opacity: 0, scale: 0.2 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.35,
         staggerChildren: 0.45,
      },
   },
};

const item = {
   hidden: { x: 50, y: 50, opacity: 0 },
   visible: {
      x: 0,
      y: 0,
      opacity: 1,
   },
};

function ProjectCard() {
   return (
      <motion.div
         variants={container}
         initial="hidden"
         animate="visible"
         transition={{ delay: 0.05 }}
         className={styles.projects}
      >
         {projectsData.projects.map((project, index) => (
            <motion.div
               variants={item}
               className={styles.photoContainer}
               key={index}
            >
               <a
                  className={styles.projectImageContainer}
                  target="_blank"
                  rel="noreferrer"
                  href={project.url}
               >
                  <img
                     className={styles.projectImage}
                     src={project.image}
                     alt={project.title}
                  />
                  <p className={styles.projectP}>{project.title}</p>
                  <p className={styles.projectP2}>{project.description}</p>
               </a>
            </motion.div>
         ))}
      </motion.div>
   );
}

export default ProjectCard;
