import databaseConnection from "../database/database-connection.js"
import { DataTypes, Model } from "sequelize";

const User = databaseConnection.define(
    'user',
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        
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
    },
    {
      // Other model options go here
    },
  );

  export default User;