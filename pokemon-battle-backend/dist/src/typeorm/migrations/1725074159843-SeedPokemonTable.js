"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedPokemonTable1725074159843 = void 0;
class SeedPokemonTable1725074159843 {
    async up(queryRunner) {
        await queryRunner.query(`
      INSERT INTO pokemon (id, name, attack, defense, speed, hp, type, imageUrl) VALUES
      ('pokemon-1', 'Pikachu', 4, 3, 6, 3, 'Electric', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
      ('pokemon-2', 'Charmander', 4, 3, 4, 3, 'Fire', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
      ('pokemon-3', 'Squirtle', 3, 4, 3, 3, 'Water', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
      ('pokemon-4', 'Bulbasur', 4, 3, 3, 3, 'Grass', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
      ('pokemon-5', 'Eevee', 4, 3, 5, 4, 'Normal', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
      DELETE FROM pokemon WHERE id IN ('pokemon-1', 'pokemon-2', 'pokemon-3', 'pokemon-4', 'pokemon-5')
    `);
    }
}
exports.SeedPokemonTable1725074159843 = SeedPokemonTable1725074159843;
//# sourceMappingURL=1725074159843-SeedPokemonTable.js.map