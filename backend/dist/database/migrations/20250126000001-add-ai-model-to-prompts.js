"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Prompts", "aiModel", {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            defaultValue: "gpt-4o-mini"
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Prompts", "aiModel");
    }
};
