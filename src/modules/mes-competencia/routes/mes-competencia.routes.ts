import { Router } from "express";
import MesCompetenciaController from "../controllers/MesCompetenciaController";

const mesCompetenciaRouter = Router();
const mesCompetenciaController = new MesCompetenciaController();

mesCompetenciaRouter.get("/", mesCompetenciaController.listar);

mesCompetenciaRouter.delete("/:id", mesCompetenciaController.deletar);

mesCompetenciaRouter.post("/", mesCompetenciaController.criar);

export default mesCompetenciaRouter;
