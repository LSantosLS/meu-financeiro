import { Request, Response, Router } from "express";
import mesCompetenciaRouter from "../../modules/mes-competencia/routes/mes-competencia.routes";

const routes = Router();

routes.use("/mescompetencia", mesCompetenciaRouter);

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Bem vindo a API - Meu Financeiro" });
});

export default routes;
