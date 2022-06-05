export interface ServerRuntimeConfig {
  PRIVATE_KEY: string;
}

export interface PublicRuntimeConfig {
  PRIVATE_KEY: string;
}

export interface Config {
  serverRuntimeConfig: ServerRuntimeConfig;
  publicRuntimeConfig: PublicRuntimeConfig;
}
