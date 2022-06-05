export interface ServerRuntimeConfig {
  PRIVATE_KEY: string;
  BASE_URL: string;
}

export interface PublicRuntimeConfig {
  PRIVATE_KEY: string;
  BASE_URL: string;
}

export interface Config {
  serverRuntimeConfig: ServerRuntimeConfig;
  publicRuntimeConfig: PublicRuntimeConfig;
}
