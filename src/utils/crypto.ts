import CryptoJS from 'crypto-js';

export const encryptAES = (message: string, privateKey: string): string => {
  const ciphertext = CryptoJS.AES.encrypt(message, privateKey).toString();
  return ciphertext;
};

export const decryptAES = (ciphertext: string, privateKey: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
