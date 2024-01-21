import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage/MainPage';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const defaultDark = window.navigator.vendor !== 'Google Inc.'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : window.localStorage.getItem('theme') === 'dark';
  const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`} data-theme={theme}>
        <MainPage></MainPage>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
