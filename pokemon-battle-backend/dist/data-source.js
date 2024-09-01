"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'pokemon.db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['./dist/src/typeorm/migrations/*{.ts,.js}'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map