'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    agentInfo: async ctx => {
        const knex = strapi.connections.default;
        const token = await strapi.plugins[
            'users-permissions'
        ].services.jwt.getToken(ctx);
        const userData = await knex.select("*").from('personal_infos').where({ users_permissions_user: token.id })
        return userData
    }
};
