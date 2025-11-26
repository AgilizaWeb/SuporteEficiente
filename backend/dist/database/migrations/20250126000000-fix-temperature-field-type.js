"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.changeColumn("Prompts", "temperature", {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 1
        });
    },
    down: (queryInterface) => {
        return queryInterface.changeColumn("Prompts", "temperature", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        });
    }
};
