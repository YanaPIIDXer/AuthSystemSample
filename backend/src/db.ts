import sequelize from "./config/Sequelize";
import User from "./models/User";

const sync = async () => {
  sequelize.modelManager.addModel(User);
  
  try {
    await sequelize.sync({ force: true });
    console.log("DB Created.");  
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
};

sync();
