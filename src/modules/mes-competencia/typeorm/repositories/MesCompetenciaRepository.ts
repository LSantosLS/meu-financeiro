import { EntityRepository, Repository } from "typeorm";
import AppError from "../../../../utils/errors/AppError";
import MesCompetencia from "../entities/MesCompetecia";

@EntityRepository(MesCompetencia)
class MesCompetenciaRepository extends Repository<MesCompetencia> {
  public async findById(id: number): Promise<MesCompetencia | undefined> {
    const mesComp = await this.findOne({
      where: {
        id,
      },
    });
    return mesComp;
  }

  public async findByMesAno(
    mes,
    ano: number
  ): Promise<MesCompetencia | undefined> {
    const mesComp = await this.findOne({
      where: {
        mes,
        ano,
      },
    });

    return mesComp;
  }

  public async deleteById(id: number): Promise<void> {
    const mesCompExiste = await this.findById(id);

    if (!mesCompExiste) {
      throw new AppError({
        msg: `Não foi encontrado mês competência com o id ${id}`,
        value: "id",
        param: "id",
        location: "params",
      });
    }

    await this.remove((mesCompExiste as unknown) as MesCompetencia);
  }
}

export default MesCompetenciaRepository;
