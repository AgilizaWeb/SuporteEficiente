"use strict";
module.exports = {
    up: async (queryInterface) => {
        // Adiciona constraint de foreign key para flow_id
        await queryInterface.addConstraint("Webhooks", ["flow_id"], {
            type: "foreign key",
            name: "fk_webhooks_flow_id",
            references: {
                table: "FlowBuilders",
                field: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        });
        // Adiciona constraint de foreign key para whatsapp_id
        await queryInterface.addConstraint("Webhooks", ["whatsapp_id"], {
            type: "foreign key",
            name: "fk_webhooks_whatsapp_id",
            references: {
                table: "Whatsapps",
                field: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        });
    },
    down: async (queryInterface) => {
        await queryInterface.removeConstraint("Webhooks", "fk_webhooks_flow_id");
        await queryInterface.removeConstraint("Webhooks", "fk_webhooks_whatsapp_id");
    },
};
