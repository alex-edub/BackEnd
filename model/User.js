import { DataTypes, Model } from "sequelize";
import databaseConnection from "../database/database-connection.js";

const User = databaseConnection.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  birthdate: {
    type: DataTypes.DATE,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;