"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Prompts", "defaultVoice", {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true
        });
        await queryInterface.addColumn("Prompts", "adaptiveResponse", {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Prompts", "adaptiveResponse");
        await queryInterface.removeColumn("Prompts", "defaultVoice");
    }
};
