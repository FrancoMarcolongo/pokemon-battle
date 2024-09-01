"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeEffectiveness = getTypeEffectiveness;
const pokemon_type_domain_1 = require("./pokemon-type.domain");
function getTypeEffectiveness(attackerType, defenderType) {
    return pokemon_type_domain_1.typeChart[attackerType][defenderType];
}
//# sourceMappingURL=pokemon-type.application.js.map