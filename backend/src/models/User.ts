import { Model, DataTypes } from "sequelize";
import sequelize from "../config/Sequelize";

/**
 * ユーザモデル
 */
class User extends Model {
  public id!: number;
  public loginId!: string;
  public password!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  loginId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "Users",
  sequelize,
})

export default User;
