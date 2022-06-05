import { Key } from '../@types/storage';

export const parseString = <T>(str: string): T | unknown => {
  return JSON.parse(str);
};

export const setStorage = (key: Key, data: string) => {
  localStorage.setItem(key, data);
};

export const getStorage = (key: Key): string => {
  const item: string = localStorage.getItem(key) || '';
  return item;
};

export const removeStorage = (key: Key) => {
  localStorage.removeItem(key);
};

export const clearAllStorage = () => {
  localStorage.clear();
};
