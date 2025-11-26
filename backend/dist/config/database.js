"use strict";
// import "../bootstrap";
Object.defineProperty(exports, "__esModule", { value: true });
// module.exports = {
//   define: {
//     charset: "utf8mb4",
//     collate: "utf8mb4_bin"
//   },
//   dialect: process.env.DB_DIALECT || "mysql",
//   timezone: "-03:00",
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT || 3306,
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   logging: process.env.DB_DEBUG === "true"
// };
require("../bootstrap");
module.exports = {
    define: {
        charset: "utf8mb4",
        collate: "utf8mb4_bin"
    },
    dialect: process.env.DB_DIALECT || "mysql",
    timezone: "-03:00",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    logging: process.env.DB_DEBUG === "true",
    pool: {
        max: 20,
        min: 5,
        acquire: 60000,
        idle: 20000, // Tempo de inatividade (em ms) para liberar conexões
    },
    dialectOptions: {
        connectTimeout: 60000, // Tempo para a conexão inicial (em ms)
    },
};
