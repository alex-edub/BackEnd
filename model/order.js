import { DataTypes } from "sequelize";
import databaseConnection from "../database/database-connection.js";

const Order = databaseConnection.define("order",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    }
});
 export default Order
