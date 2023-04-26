import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "auth",
  dialect: "sqlite",
  host: "localhost",
});

export default sequelize;
