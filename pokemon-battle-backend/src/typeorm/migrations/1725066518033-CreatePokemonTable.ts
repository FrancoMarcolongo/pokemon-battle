import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePokemonTable1725066518033 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemon',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'attack',
            type: 'int',
          },
          {
            name: 'defense',
            type: 'int',
          },
          {
            name: 'speed',
            type: 'int',
          },
          {
            name: 'hp',
            type: 'int',
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
            default: "'Normal'",
          },
          {
            name: 'imageUrl',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'battle_result',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pokemon1Id',
            type: 'varchar',
          },
          {
            name: 'pokemon2Id',
            type: 'varchar',
          },
          {
            name: 'winnerId',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'datetime',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'battle_result',
      new TableForeignKey({
        columnNames: ['pokemon1Id'],
        referencedTableName: 'pokemon',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'battle_result',
      new TableForeignKey({
        columnNames: ['pokemon2Id'],
        referencedTableName: 'pokemon',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'battle_result',
      new TableForeignKey({
        columnNames: ['winnerId'],
        referencedTableName: 'pokemon',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'battle_result',
      'FK_battle_result_pokemon1',
    );
    await queryRunner.dropForeignKey(
      'battle_result',
      'FK_battle_result_pokemon2',
    );
    await queryRunner.dropForeignKey(
      'battle_result',
      'FK_battle_result_winner',
    );

    await queryRunner.dropTable('battle_result');
    await queryRunner.dropTable('pokemon');
  }
}
