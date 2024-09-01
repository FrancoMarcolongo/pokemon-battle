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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
const typeorm_1 = require("typeorm");
const pokemon_type_domain_1 = require("../pokemon-type/pokemon-type.domain");
const battle_result_entity_1 = require("../battle-result/entities/battle-result.entity");
let Pokemon = class Pokemon {
};
exports.Pokemon = Pokemon;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Pokemon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pokemon.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pokemon.prototype, "attack", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pokemon.prototype, "defense", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pokemon.prototype, "speed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pokemon.prototype, "hp", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: pokemon_type_domain_1.PokemonType.NORMAL,
    }),
    __metadata("design:type", String)
], Pokemon.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pokemon.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => battle_result_entity_1.BattleResult, (battleResult) => battleResult.pokemon1),
    __metadata("design:type", Array)
], Pokemon.prototype, "battlesAsPokemon1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => battle_result_entity_1.BattleResult, (battleResult) => battleResult.pokemon2),
    __metadata("design:type", Array)
], Pokemon.prototype, "battlesAsPokemon2", void 0);
exports.Pokemon = Pokemon = __decorate([
    (0, typeorm_1.Entity)()
], Pokemon);
//# sourceMappingURL=pokemon.entity.js.map