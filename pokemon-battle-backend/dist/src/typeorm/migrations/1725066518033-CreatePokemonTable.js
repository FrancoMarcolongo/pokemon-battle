"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePokemonTable1725066518033 = void 0;
const typeorm_1 = require("typeorm");
class CreatePokemonTable1725066518033 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createForeignKey('battle_result', new typeorm_1.TableForeignKey({
            columnNames: ['pokemon1Id'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('battle_result', new typeorm_1.TableForeignKey({
            columnNames: ['pokemon2Id'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('battle_result', new typeorm_1.TableForeignKey({
            columnNames: ['winnerId'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('battle_result', 'FK_battle_result_pokemon1');
        await queryRunner.dropForeignKey('battle_result', 'FK_battle_result_pokemon2');
        await queryRunner.dropForeignKey('battle_result', 'FK_battle_result_winner');
        await queryRunner.dropTable('battle_result');
        await queryRunner.dropTable('pokemon');
    }
}
exports.CreatePokemonTable1725066518033 = CreatePokemonTable1725066518033;
//# sourceMappingURL=1725066518033-CreatePokemonTable.js.map