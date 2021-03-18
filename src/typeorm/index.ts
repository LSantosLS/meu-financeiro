import dotenv from "dotenv";
import { createConnection } from "typeorm";

dotenv.config();

createConnection()
  .then(async (connection) => {
    console.log("Conecatado com sucesso ao banco de dados!");
  })
  .catch((error) => {
    console.log("Erro ao conectar com o banco de dados!");
  });
