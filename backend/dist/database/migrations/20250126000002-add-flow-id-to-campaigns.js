"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.addColumn("Campaigns", "flowId", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("Campaigns", "flowId");
    }
};
