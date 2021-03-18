import { getCustomRepository } from "typeorm";
import MesCompetenciaRepository from "../typeorm/repositories/MesCompetenciaRepository";

class DeletarMesCompetenciaService {
  public async execute(id: number): Promise<void> {
    const mesCompRepository = getCustomRepository(MesCompetenciaRepository);

    // Implmentar depois regra que verifique se existe movimento para o mês comp

    await mesCompRepository.deleteById(id);
  }
}

export default DeletarMesCompetenciaService;
