import logo from './logo.svg';
import './App.css';
import Herosection from "./components/Herosection"
import { useState, useEffect } from 'react';
// https://www.youtube.com/watch?v=QTY2fLpQn44&t=1622s
function App() {
  const [theme, setTheme] = useState(null)

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
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  

  
  return (

    <>

    <button 
    type="button"
    onClick={handleThemeSwitch}
    className="fixed z-10 right-2 top-2 bg-indigo-500
    text-lg p-1 rounded-md">
      {theme === "dark"? "dark" : "light"}
    </button>
    <div className='font-inter bg:white dark:bg-green-900'>
      <h1 className='underline text-3xl'> APP</h1>
      <Herosection />
    </div>
    </>
  );
}

export default App;
