import { DataTypes } from "sequelize";
import databaseConnection from "../database/database-connection";

const Order = databaseConnection.define("order",{
    id: {
        type: DataTypes.INTEGER,
    },
    user_id {
        type: DataTypes.INTEGER
    }
});
Order.belongs 
