import light from '../../public/styles/theme-light.module.scss';
import dark from '../../public/styles/theme-dark.module.scss';
import { Mode, Theme } from '../@types/theme';

export const theme = (mode: Mode = Mode.light): Theme => {
  switch (mode) {
    case Mode.light:
      return light as Theme;
    case Mode.dark:
      return dark as Theme;
    default:
      return light as Theme;
  }
};
