import { getCustomRepository } from "typeorm";
import AppError from "../../../utils/errors/AppError";
import MesCompetencia from "../typeorm/entities/MesCompetecia";
import MesCompetenciaRepository from "../typeorm/repositories/MesCompetenciaRepository";

interface IRequest {
  mes: number;
  ano: number;
}

const Meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

class CriarMesCompetenciaService {
  public async execute({ mes, ano }: IRequest): Promise<MesCompetencia> {
    const mesCompRepository = getCustomRepository(MesCompetenciaRepository);
    const mesCompExiste = await mesCompRepository.findByMesAno(mes, ano);

    if (mesCompExiste) {
      throw new AppError({
        msg: "Mês competência já inserido",
        value: `[${mes}, ${ano}]`,
        param: "[mes, ano]",
        location: "body",
      });
    }

    // Montar a descrição do mês ano de forma extensa.
    const descricao = `${Meses[mes - 1]} de ${ano}`;

    const mesComp = mesCompRepository.create({
      mes,
      ano,
      descricao,
    });

    await mesCompRepository.save(mesComp);

    return mesComp;
  }
}

export default CriarMesCompetenciaService;
