import './App.css';
import './assets/styles/global.css';

import { Route, Routes } from 'react-router-dom';

//Component Imports
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
   return (
      <div className="main-section">
         <Navbar />
         <div className="container">
            <Routes>
               <Route
                  path="/"
                  element={<About />}
               />
               <Route
                  path="/"
                  element={<Projects />}
               />
               <Route
                  path="/"
                  element={<Resume />}
               />
            </Routes>
         </div>
         <Footer />
      </div>
   );
}

export default App;
