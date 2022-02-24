import {useState, useEffect} from 'react';
import Moon from './moon';
import Sun from './sun';

const ToggleDarkmode = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'true');
    } else {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'false');
    }
  }, [darkMode]);

  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={onClick}
      className="rounded-md bg-violet-500 p-2 text-slate-200 dark:bg-yellow-300 dark:text-slate-600"
    >
      {darkMode && <Sun />}
      {!darkMode && <Moon />}
    </button>
  );
};

export default ToggleDarkmode;
