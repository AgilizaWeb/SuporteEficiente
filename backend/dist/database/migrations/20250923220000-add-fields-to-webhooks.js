"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("Webhooks", "flow_id", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        });
        await queryInterface.addColumn("Webhooks", "whatsapp_id", {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        });
        await queryInterface.addColumn("Webhooks", "variables", {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: true
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("Webhooks", "variables");
        await queryInterface.removeColumn("Webhooks", "whatsapp_id");
        await queryInterface.removeColumn("Webhooks", "flow_id");
    }
};
