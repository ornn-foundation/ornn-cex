import axios from 'axios';
import { configEnv } from '.';

const { BASE_URL } = configEnv();

export const request = axios.create({
  baseURL: BASE_URL,
});
