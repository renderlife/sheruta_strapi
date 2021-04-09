# Strapi application

A quick description of your strapi application

register: async ctx => {
        const body = ctx.request.body;
        console.log('response --', body)
        const knex = strapi.connections.default;
        const newUsers = await knex('users-permissions_user').insert(body).returning('*')
        return newUsers;
    },
