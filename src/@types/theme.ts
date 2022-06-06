export enum Mode {
  dark = 'dark',
  light = 'light',
}

interface ObjectKeys {
  [key: string]: string;
}
export interface Theme extends ObjectKeys {
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  warning: string;
  danger: string;
  dark: string;
  medium: string;
  light: string;
}

export interface Styles {
  color: Theme;
  mode: Mode;
}
