import React from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { Context, initialState, reducer } from '../context';
import { useDarkMode } from '../hooks';
import '../../public/styles/global.scss';

const progress = new ProgressBar({
  size: 3,
  color: '#3880ff',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  const darkMode = useDarkMode();

  React.useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />;
    </Context.Provider>
  );
};

export default App;
