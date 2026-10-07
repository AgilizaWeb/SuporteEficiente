"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.addColumn("QueueIntegrations", "flowId", {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: "FlowBuilders",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
            allowNull: true
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeColumn("QueueIntegrations", "flowId");
    }
};
