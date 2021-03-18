import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMesCompetencia1615860755607 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "mes_competencia",
        columns: [
          {
            name: "id_mes_comp",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "mes",
            type: "int",
          },
          {
            name: "ano",
            type: "int",
          },
          {
            name: "descricao",
            type: "varchar",
            length: "30",
            isUnique: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("mes_competencia");
  }
}
