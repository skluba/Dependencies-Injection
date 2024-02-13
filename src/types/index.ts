import { HTTP } from "src/services/http";
import { Logger } from "src/services/logger";
import { Users } from "src/services/users";

export interface User {
  id: number;
  name: string;
}

export interface ContainerResources {
  http: typeof HTTP;
  logger: typeof Logger;
  users: typeof Users;
  apiConfig: ApiConfig;
}

export interface ApiConfig {
  path: string;
  resources: { [key: string]: string };
}
