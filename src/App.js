import logo from './logo.svg';
import './App.css';
import Herosection from "./components/Herosection"
import { useState, useEffect } from 'react';
import { useStateContext } from "./contexts/ContextProvider"
import Navbar from './components/Navbar';
import { Navbar2 } from './components/Navbar2';
import { Dashboard } from './pages/Dashboard';
import { Skills } from './pages/Skills';
import { AboutMe } from './pages/AboutMe';
import { Education } from './pages/Education';
import { Development } from './pages/Development';
import { Projectsummary } from './pages/Projectsummary';
import { ContactDetails } from './pages/ContactDetails';
// https://www.youtube.com/watch?v=QTY2fLpQn44&t=1622s
function App() {
  const { activeMenu, setActiveMenu, theme, setTheme } = useStateContext();

  useEffect(() => {
    console.log("window.matchMedia('prefers-color-theme: dark').matches: ",window.matchMedia('prefers-color-theme: dark').matches);
    if (
      !window.matchMedia('prefers-color-theme: dark').matches
    ) {
      setTheme("dark")
    }else{
      setTheme("light")
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

    {/* <Navbar /> */}
    <Navbar2 />

    <div>
    <Dashboard />
    
    <AboutMe />

    {/* <Skills />

    <Education /> */}

    <Development />

    <Projectsummary />

    <ContactDetails />
   
    </div>
    </div>
  );
}

export default App;
