import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "./database/auth.sqlite3",
  dialect: "sqlite",
  host: "localhost",
});

export default sequelize;
