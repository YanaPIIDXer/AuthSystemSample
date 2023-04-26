import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "auth",
  storage: "./database/auth.sqlite3",
  dialect: "sqlite",
  host: "localhost",
});

export default sequelize;
