import CryptoJS from 'crypto-js';

const privateKey = 'secret';

export const encryptAES = (message: string): string => {
  const ciphertext = CryptoJS.AES.encrypt(message, privateKey).toString();
  return ciphertext;
};

export const decryptAES = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
