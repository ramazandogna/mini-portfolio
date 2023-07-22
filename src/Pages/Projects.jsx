import ProjectCard from '../components/projects';
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
   return (
      <motion.div
         initial={{ opacity: 0, translateY: 50 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ delay: 0.05 }}
         className="container"
      >
         <div>
            <h3>My Projects</h3>
            <ProjectCard />
         </div>
      </motion.div>
   );
}

export default Projects;
