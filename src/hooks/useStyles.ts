import React from 'react';
import { Key } from '../@types/storage';
import { Mode, Styles, Theme } from '../@types/theme';
import { theme, getStorage } from '../utils';

const useStyles = () => {
  const [styles, setStyles] = React.useState<Styles>();

  const setTeme = (c: Theme) => {
    for (const key in c) {
      if (Object.prototype.hasOwnProperty.call(c, key)) {
        const element = c[key];
        document.documentElement.style.setProperty(`--${key}`, element);
      }
    }
  };

  React.useEffect(() => {
    if (styles) setTeme(styles.color);
  }, [styles]);

  React.useEffect(() => {
    const mode = getStorage(Key.theme) as Mode;
    setStyles({
      mode,
      color: theme(mode),
    });
  }, []);
  
  return styles;
};

export default useStyles;
