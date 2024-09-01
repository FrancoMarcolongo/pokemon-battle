import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedPokemonTable1725074159843 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO pokemon (id, name, attack, defense, speed, hp, type, imageUrl) VALUES
      ('pokemon-1', 'Pikachu', 4, 3, 6, 3, 'Electric', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
      ('pokemon-2', 'Charmander', 4, 3, 4, 3, 'Fire', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
      ('pokemon-3', 'Squirtle', 3, 4, 3, 3, 'Water', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
      ('pokemon-4', 'Bulbasur', 4, 3, 3, 3, 'Grass', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
      ('pokemon-5', 'Eevee', 4, 3, 5, 4, 'Normal', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Si necesitas revertir la migración, elimina los datos insertados
    await queryRunner.query(`
      DELETE FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5')
    `);
  }
}
