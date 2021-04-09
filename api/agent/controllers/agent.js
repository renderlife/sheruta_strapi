'use strict';

const Utils = require("../AgentUtils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async ctx => {
        const knex = strapi.connections.default;
        const body = ctx.request.body;
        const newAgent = await knex('agents').insert(body).returning('*')
        if (newAgent.length > 0) {
            const rows = await knex.select('*').from('users-permissions_role');
            // upgrades regular user to be an agent  
            //TODO: check role in prod
            await strapi.plugins['users-permissions'].services.user.edit({ id: body.users_permissions_user }, { role: 3 })
        }
        return newAgent
    },
    freeGetProp: async ctx => {
        const knex = strapi.connections.default;
        const params = ctx.params;
        const property = await knex('properties').returning('*').where({ id: params.property_id });
        const agent_id = property[0].agent;
        const freeAgentData = await knex('agents').where({ id: agent_id });
        const data = freeAgentData[0];
        return Utils.freeAgentResponse(data)
    },
    freeGetId: async ctx => {
        const knex = strapi.connections.default;
        const params = ctx.params;
        const freeAgentData = await knex('agents').returning('*').where({ id: params.agent_id });
        const data = freeAgentData[0];
        return Utils.freeAgentResponse(data)
    }
};
