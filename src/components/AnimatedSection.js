import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';

function AnimatedSection({ children }) {
   const controls = useAnimation();

   return (
      <InView threshold={0.5}>
         {({ inView, ref }) => {
            if (inView) {
               controls.start({ opacity: 1, y: 0 });
            }

            return (
               <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 70 }}
                  animate={controls}
                  transition={{ type: 'spring', stiffness: 100, duration: 1 }}
               >
                  {children}
               </motion.div>
            );
         }}
      </InView>
   );
}

export default AnimatedSection;
