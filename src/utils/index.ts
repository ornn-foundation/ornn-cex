import { configEnv } from './configEnv';
import { decryptAES, encryptAES } from './crypto';
import {
  setStorage,
  getStorage,
  removeStorage,
  clearAllStorage,
  parseString,
} from './storage';
import { theme } from './theme';

export {
  parseString,
  setStorage,
  getStorage,
  removeStorage,
  clearAllStorage,
  encryptAES,
  decryptAES,
  configEnv,
  theme
};
