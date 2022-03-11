// https://dev.to/asjadanis/parsing-env-with-typescript-3jjm
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ProcessEnv {
    DATABASE_URL: string | undefined;
    API_URL: string | undefined;
    JWT_SECRET: string | undefined;
    API_PORT: string | 3000;
    // NODE_ENV: string;
    // PORT: string;
    // MONGO_URI: string;
  }
}
