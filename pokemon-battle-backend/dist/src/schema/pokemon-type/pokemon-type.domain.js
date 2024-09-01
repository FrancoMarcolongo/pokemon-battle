"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeChart = exports.PokemonType = void 0;
var PokemonType;
(function (PokemonType) {
    PokemonType["FIRE"] = "Fire";
    PokemonType["WATER"] = "Water";
    PokemonType["GRASS"] = "Grass";
    PokemonType["ELECTRIC"] = "Electric";
    PokemonType["ICE"] = "Ice";
    PokemonType["FIGHTING"] = "Fighting";
    PokemonType["POISON"] = "Poison";
    PokemonType["GROUND"] = "Ground";
    PokemonType["FLYING"] = "Flying";
    PokemonType["PSYCHIC"] = "Psychic";
    PokemonType["BUG"] = "Bug";
    PokemonType["ROCK"] = "Rock";
    PokemonType["GHOST"] = "Ghost";
    PokemonType["DRAGON"] = "Dragon";
    PokemonType["DARK"] = "Dark";
    PokemonType["STEEL"] = "Steel";
    PokemonType["FAIRY"] = "Fairy";
    PokemonType["NORMAL"] = "Normal";
})(PokemonType || (exports.PokemonType = PokemonType = {}));
exports.typeChart = {
    [PokemonType.FIRE]: {
        [PokemonType.FIRE]: 0.5,
        [PokemonType.WATER]: 0.5,
        [PokemonType.GRASS]: 2,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 2,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 2,
        [PokemonType.ROCK]: 0.5,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 2,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.WATER]: {
        [PokemonType.FIRE]: 2,
        [PokemonType.WATER]: 0.5,
        [PokemonType.GRASS]: 0.5,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 2,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 2,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 0.5,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 1,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.GRASS]: {
        [PokemonType.FIRE]: 0.5,
        [PokemonType.WATER]: 2,
        [PokemonType.GRASS]: 0.5,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 0.5,
        [PokemonType.GROUND]: 2,
        [PokemonType.FLYING]: 0.5,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 0.5,
        [PokemonType.ROCK]: 2,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 0.5,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.ELECTRIC]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 2,
        [PokemonType.GRASS]: 0.5,
        [PokemonType.ELECTRIC]: 0.5,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 0,
        [PokemonType.FLYING]: 2,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 0.5,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 1,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.ICE]: {
        [PokemonType.FIRE]: 0.5,
        [PokemonType.WATER]: 0.5,
        [PokemonType.GRASS]: 2,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 0.5,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 2,
        [PokemonType.FLYING]: 2,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 2,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.FIGHTING]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 2,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 0.5,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 0.5,
        [PokemonType.PSYCHIC]: 0.5,
        [PokemonType.BUG]: 0.5,
        [PokemonType.ROCK]: 2,
        [PokemonType.GHOST]: 0,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 2,
        [PokemonType.STEEL]: 2,
        [PokemonType.FAIRY]: 0.5,
        [PokemonType.NORMAL]: 2,
    },
    [PokemonType.POISON]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 2,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 0.5,
        [PokemonType.GROUND]: 0.5,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 0.5,
        [PokemonType.GHOST]: 0.5,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0,
        [PokemonType.FAIRY]: 2,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.GROUND]: {
        [PokemonType.FIRE]: 2,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 0.5,
        [PokemonType.ELECTRIC]: 2,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 2,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 0,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 2,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 2,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.FLYING]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 2,
        [PokemonType.ELECTRIC]: 0.5,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 2,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 2,
        [PokemonType.ROCK]: 0.5,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.PSYCHIC]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 2,
        [PokemonType.POISON]: 2,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 0.5,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 0,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.BUG]: {
        [PokemonType.FIRE]: 0.5,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 2,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 0.5,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 0.5,
        [PokemonType.PSYCHIC]: 2,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 2,
        [PokemonType.GHOST]: 0.5,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 2,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 0.5,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.ROCK]: {
        [PokemonType.FIRE]: 2,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 2,
        [PokemonType.FIGHTING]: 0.5,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 0.5,
        [PokemonType.FLYING]: 2,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 2,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.GHOST]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 0,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 2,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 0.5,
        [PokemonType.STEEL]: 1,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 0,
    },
    [PokemonType.DRAGON]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 2,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 0,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.DARK]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 0.5,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 2,
        [PokemonType.BUG]: 2,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 2,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 0.5,
        [PokemonType.STEEL]: 1,
        [PokemonType.FAIRY]: 0.5,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.STEEL]: {
        [PokemonType.FIRE]: 0.5,
        [PokemonType.WATER]: 0.5,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 2,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 2,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 2,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.FAIRY]: {
        [PokemonType.FIRE]: 0.5,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 2,
        [PokemonType.POISON]: 0.5,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 1,
        [PokemonType.GHOST]: 1,
        [PokemonType.DRAGON]: 2,
        [PokemonType.DARK]: 2,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
    [PokemonType.NORMAL]: {
        [PokemonType.FIRE]: 1,
        [PokemonType.WATER]: 1,
        [PokemonType.GRASS]: 1,
        [PokemonType.ELECTRIC]: 1,
        [PokemonType.ICE]: 1,
        [PokemonType.FIGHTING]: 1,
        [PokemonType.POISON]: 1,
        [PokemonType.GROUND]: 1,
        [PokemonType.FLYING]: 1,
        [PokemonType.PSYCHIC]: 1,
        [PokemonType.BUG]: 1,
        [PokemonType.ROCK]: 0.5,
        [PokemonType.GHOST]: 0,
        [PokemonType.DRAGON]: 1,
        [PokemonType.DARK]: 1,
        [PokemonType.STEEL]: 0.5,
        [PokemonType.FAIRY]: 1,
        [PokemonType.NORMAL]: 1,
    },
};
//# sourceMappingURL=pokemon-type.domain.js.map