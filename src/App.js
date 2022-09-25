import logo from './logo.svg';
import './App.css';
import Herosection from "./components/Herosection"
import { useState, useEffect } from 'react';
import { useStateContext } from "./contexts/ContextProvider"
import { Navbar2 } from './components/Navbar2';
import { Dashboard } from './pages/Dashboard';
import { Skills } from './pages/Skills';
import { AboutMe } from './pages/AboutMe';
import { Education } from './pages/Education';
import { Development } from './pages/Development';
import { Projectsummary } from './pages/Projectsummary';
import { ContactDetails } from './pages/ContactDetails';

function App() {
  const { activeMenu, setActiveMenu, theme, setTheme } = useStateContext();

  useEffect(() => {
    console.log("window.matchMedia('prefers-color-theme: dark').matches: ",window.matchMedia('prefers-color-theme: dark').matches);
    if (
      !window.matchMedia('prefers-color-theme: dark').matches
    ) {
      setTheme("light")
    }else{
      setTheme("dark")
    }
  
  }, [])


    // adding dark class to our body:
  useEffect(() => {
    if  (theme === 'dark'){
      console.log("added: ", theme)
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');

    }

  }, [theme])




  
  return (

    <div className='w-full'>
      <Navbar2 style={"width: 100%; position: fixed; top: 0;"} />

      <div>
      <Dashboard />

          <a id="About"></a>
          <AboutMe />

          {/* <Skills /> */}
          
          
          <a id="projects"></a>
          <Development />

          <a id="timeline"></a>
          <Education />

          {/* <a id="summary"></a>
          <Projectsummary /> */}

          <a id="contact"></a>
          <ContactDetails />
        
      </div>
    </div>
  );
}

export default App;
