import { DataTypes } from "sequelize";
import databaseConnection from "../database/database-connection";

const Product = databaseConnection.define("product",{
    id: {
        type:DataTypes.INTEGER,
        primirykey: true,
        autoIncrement: true,
    },
    price: {
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    name: {

        type:DataTypes.STRING,
        allowNull:false,

    }}
)