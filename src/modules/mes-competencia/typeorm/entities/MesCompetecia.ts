import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mes_competencia")
class MesCompetencia {
  @PrimaryGeneratedColumn("increment", { name: "id_mes_comp" })
  id: number;

  @Column()
  mes: number;

  @Column()
  ano: number;

  @Column()
  descricao: string;
}

export default MesCompetencia;
