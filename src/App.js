import './App.css';
import './assets/styles/global.css';

import { Route, Routes } from 'react-router-dom';

//Component Imports
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
   return (
      <div className="dark:bg-[#202023] dark:text-[#ffffffeb]">
         <Navbar />
         <Banner />
         <div className="container">
            <Routes>
               <Route
                  path="/"
                  element={<About />}
               />
               <Route
                  path="/projects"
                  element={<Projects />}
               />
               <Route
                  path="/resume"
                  element={<Resume />}
               />
            </Routes>
         </div>
         <Footer />
      </div>
   );
}

export default App;
