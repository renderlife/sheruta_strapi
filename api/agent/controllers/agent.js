'use strict';

const { KnexTimeoutError } = require("knex");
const Utils = require("../AgentUtils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    new: async ctx => {
        const knex = strapi.connections.default;
        const body = ctx.request.body;
        console.log('BODY ---', body);
        const newAgent = await strapi.query('agent').create(body);
        const user = await knex('users-permissions_user').where({ id: body.users_permissions_user }).update({ role: 3 }).returning('*')
        console.log('USER --', user);
        return newAgent;
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
    },
    properties: async ctx => {
        const knex = strapi.connections.default;
        const params = ctx.params;
        const token = await strapi.plugins[
            'users-permissions'
        ].services.jwt.getToken(ctx);
        console.log(params)
        const all = await knex.select('*').from('properties').where({
            agent: params.agent_id
        })
        return all;
    },
    me: async ctx => {
        const knex = strapi.connections.default;
        const token = await strapi.plugins[
            'users-permissions'
        ].services.jwt.getToken(ctx);
        const userData = await knex('agents').where({
            users_permissions_user: token.id
        })
        return userData;
    },
};
