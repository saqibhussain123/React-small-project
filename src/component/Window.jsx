import { useState, useEffect } from 'react';

const Window = () => {
 
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);  // Set the theme from localStorage
    }
  }, []); // Runs only once when the component mounts

  // Save the theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333',
     color: theme === 'light' ? '#000' : '#fff' }}>
      <button onClick={toggleTheme}>switch</button>
     <h1>umer</h1>
    </div>
  );
};

export default Window;