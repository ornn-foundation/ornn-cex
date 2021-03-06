import React from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import { Context, initialState, reducer } from '../context';
import { useDarkMode, useStyles } from '../hooks';
import { getStorage, setStorage, theme } from '../utils';
import { Key } from '../@types/storage';
import { Mode } from '../@types/theme';
import '../../public/styles/global.scss';

const progress = new ProgressBar({
  size: 3,
  color: theme().primary,
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  const darkMode = useDarkMode();
  const styles = useStyles();

  React.useEffect(() => {
    if (styles)
      dispatch({
        type: 'SET_STYLES',
        payload: {
          styles,
        },
      });
  }, [styles]);

  React.useEffect(() => {
    const mode = getStorage(Key.theme);
    if (!mode) setStorage(Key.theme, darkMode ? Mode.dark : Mode.light);
  }, [darkMode]);

  return (
    <Context.Provider value={value}>
      <Component {...pageProps} />
    </Context.Provider>
  );
};

export default App;
