import express, { Request } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";

const app = express();

createConnection()
  .then(async (connection) => {
    console.log("Conectado ao banco de dados!!!");
  })
  .catch((error) => console.log(error));
