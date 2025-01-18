import express from "express";
import cors from "cors";
import databaseConnection from "./database/database-connection.js";
import User from "./model/User.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/", async (request, response) => {
    const {name, email } = request.body; 
    const users = await User.query(
        "INSERT INTO users('name','birthdate')VALUES(?,?)"
    );
    return response.status(200).json('Dados salvos com sucesso');
  });

app.get("/", async (request, response) => {
    const user = request.body;
  //const users = await User.sync();
  return response.status(200).json("Os dados a serem salvos são: &{user}");
});

const initApp = async () => {
  await databaseConnection.sync({ force: false });

  app.listen(port, (error) => {
    if (error) {
      console.error(`App is down: ${error}`);
    }

    console.log("App is running");
  });
};

initApp();
