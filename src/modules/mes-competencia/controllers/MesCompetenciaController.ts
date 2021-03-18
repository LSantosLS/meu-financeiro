import { Response } from "express";
import { Request } from "express";
import CriarMesCompetenciaService from "../services/CriarMesCompetenciaService";
import DeletarMesCompetenciaService from "../services/DeletarMesCompetenciaService";
import ListarMesCompetenciaService from "../services/ListarMesCompetenciaService";

export default class MesCompetenciaController {
  public async listar(req: Request, res: Response): Promise<Response> {
    const listarMesCompService = new ListarMesCompetenciaService();
    const mesesComp = await listarMesCompService.execute();
    return res.json(mesesComp);
  }

  public async criar(req: Request, res: Response): Promise<Response> {
    const { mes, ano } = req.body;
    const criarMesCompService = new CriarMesCompetenciaService();
    const mesComp = await criarMesCompService.execute({
      mes,
      ano,
    });

    return res.json(mesComp);
  }

  public async deletar(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deletarMesCompService = new DeletarMesCompetenciaService();
    await deletarMesCompService.execute(parseInt(id));
    return res.status(200).json({ msg: "Usuário removido com sucesso" });
  }
}
