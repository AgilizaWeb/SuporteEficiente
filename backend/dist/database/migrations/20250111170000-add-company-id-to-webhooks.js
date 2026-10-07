"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Webhooks", "company_id", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("Webhooks", "company_id");
    }
};
