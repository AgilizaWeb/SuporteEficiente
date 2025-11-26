"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return Promise.all([
            queryInterface.addColumn("Prompts", "simulationEnabled", {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }),
            queryInterface.addColumn("Prompts", "simulationDuration", {
                type: sequelize_1.DataTypes.INTEGER,
                defaultValue: 3,
                allowNull: false
            })
        ]);
    },
    down: (queryInterface) => {
        return Promise.all([
            queryInterface.removeColumn("Prompts", "simulationEnabled"),
            queryInterface.removeColumn("Prompts", "simulationDuration")
        ]);
    }
};
