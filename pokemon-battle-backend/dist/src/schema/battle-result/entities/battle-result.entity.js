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
exports.BattleResult = void 0;
const pokemon_entity_1 = require("../../pokemon/pokemon.entity");
const typeorm_1 = require("typeorm");
let BattleResult = class BattleResult {
};
exports.BattleResult = BattleResult;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BattleResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pokemon_entity_1.Pokemon, (pokemon) => pokemon.battlesAsPokemon1),
    __metadata("design:type", pokemon_entity_1.Pokemon)
], BattleResult.prototype, "pokemon1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pokemon_entity_1.Pokemon, (pokemon) => pokemon.battlesAsPokemon2),
    __metadata("design:type", pokemon_entity_1.Pokemon)
], BattleResult.prototype, "pokemon2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pokemon_entity_1.Pokemon),
    __metadata("design:type", pokemon_entity_1.Pokemon)
], BattleResult.prototype, "winner", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BattleResult.prototype, "date", void 0);
exports.BattleResult = BattleResult = __decorate([
    (0, typeorm_1.Entity)()
], BattleResult);
//# sourceMappingURL=battle-result.entity.js.map