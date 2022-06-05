import getConfig from 'next/config';
import { Config, PublicRuntimeConfig } from '../@types/config';

const { publicRuntimeConfig } = getConfig() as Config;

export const configEnv = (): PublicRuntimeConfig => {
  return publicRuntimeConfig;
};
