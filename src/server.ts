import dotenv from "dotenv";
import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import routes from "./http/routes";
import "./typeorm";
import AppError from "./utils/errors/AppError";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Adicionando um midleware que verifica se o erro gerado na aplicação é do tipo
AppErro, em sendo será necessário estruturar conforme a regra da API
*/
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      const result: any[] = [];

      result.push({
        msg: error.msg,
        param: error.param,
        value: error.value,
        location: error.location,
      });

      return response.status(error.statusCode).json({
        statusCode: error.statusCode,
        errors: result,
      });
    }

    return response.status(500).json({
      statusCode: 500,
      errors: [{ msg: "Erro interno do servidor. Erro: " + error.message }],
    });
  }
);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
