"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pokemon_entity_1 = require("../pokemon/pokemon.entity");
const battle_result_entity_1 = require("../battle-result/entities/battle-result.entity");
const pokemon_type_application_1 = require("../pokemon-type/pokemon-type.application");
let BattleService = class BattleService {
    constructor(pokemonRepository, battleResultRepository) {
        this.pokemonRepository = pokemonRepository;
        this.battleResultRepository = battleResultRepository;
    }
    async battle(pokemon1Id, pokemon2Id) {
        const pokemon1 = await this.pokemonRepository.findOne({
            where: { id: pokemon1Id },
        });
        const pokemon2 = await this.pokemonRepository.findOne({
            where: { id: pokemon2Id },
        });
        if (!pokemon1 || !pokemon2) {
            throw new common_1.NotFoundException('One or both Pokémon not found');
        }
        const winner = this.calculateBattle(pokemon1, pokemon2);
        const battleResult = new battle_result_entity_1.BattleResult();
        battleResult.pokemon1 = pokemon1;
        battleResult.pokemon2 = pokemon2;
        battleResult.winner = winner;
        battleResult.date = new Date();
        return this.battleResultRepository.save(battleResult);
    }
    calculateBattle(pokemon1, pokemon2) {
        const pokemon1Speed = pokemon1.speed;
        const pokemon2Speed = pokemon2.speed;
        let firstAttacker;
        let secondAttacker;
        if (pokemon1Speed > pokemon2Speed) {
            firstAttacker = pokemon1;
            secondAttacker = pokemon2;
        }
        else if (pokemon1Speed < pokemon2Speed) {
            firstAttacker = pokemon2;
            secondAttacker = pokemon1;
        }
        else {
            if (pokemon1.attack > pokemon2.attack) {
                firstAttacker = pokemon1;
                secondAttacker = pokemon2;
            }
            else {
                firstAttacker = pokemon2;
                secondAttacker = pokemon1;
            }
        }
        let winner;
        let turn = 1;
        while (pokemon1.hp > 0 && pokemon2.hp > 0) {
            const attacker = turn % 2 === 1 ? firstAttacker : secondAttacker;
            const defender = turn % 2 === 1 ? secondAttacker : firstAttacker;
            const basedamage = Math.max(attacker.attack - defender.defense, 1);
            const typeEffectiveness = (0, pokemon_type_application_1.getTypeEffectiveness)(attacker.type, defender.type) || 1;
            const damage = Math.ceil(basedamage * typeEffectiveness);
            defender.hp -= damage;
            if (defender.hp <= 0) {
                winner = attacker;
                break;
            }
            turn += 1;
        }
        return winner;
    }
};
exports.BattleService = BattleService;
exports.BattleService = BattleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pokemon_entity_1.Pokemon)),
    __param(1, (0, typeorm_1.InjectRepository)(battle_result_entity_1.BattleResult)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BattleService);
//# sourceMappingURL=battle.service.js.map