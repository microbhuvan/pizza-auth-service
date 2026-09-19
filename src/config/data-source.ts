import { User } from "../entity/User";
import { Config } from "";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: Config.DB_HOST,
  port: Number(Config.DB_PORT),
  username: Config.DB_USERNAME,
  password: Config.DB_PASSWORD,

  synchronize: Config.NODE_ENV == "test" || Config.NODE_ENV == "prod",
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
