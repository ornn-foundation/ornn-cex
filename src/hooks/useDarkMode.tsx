import React from 'react';

const useDarkMode = () => {
  const getCurrentTheme = () => {
    if (typeof window !== 'undefined')
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = React.useState(getCurrentTheme());

  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkMode(e.matches);
  };

  React.useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return isDarkMode;
};

export default useDarkMode;
