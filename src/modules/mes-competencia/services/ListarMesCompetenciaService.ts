import { getCustomRepository } from "typeorm";
import MesCompetencia from "../typeorm/entities/MesCompetecia";
import MesCompetenciaRepository from "../typeorm/repositories/MesCompetenciaRepository";

class ListarMesCompetenciaService {
  public async execute(): Promise<MesCompetencia[]> {
    const mesCompRepository = getCustomRepository(MesCompetenciaRepository);
    const mesesComp = await mesCompRepository.find();
    return mesesComp;
  }
}

export default ListarMesCompetenciaService;
