'use strict';

module.exports = {
    categoryLimit: async (ctx) => {
        const Knex = strapi.connections.default;
        console.log(ctx.params)
        const { limit, category } = ctx.params;
        const query = {
            _limit: limit,
            categorie: category
        }
        const properties = await strapi.query('propertie').find(query)
        properties.forEach(val => {
            delete val.drafted;
            delete val.personal_info;
            delete val.updated_by;
            delete val.agent;
            delete val.service.description;
            delete val.service.requires_personal_info;
            delete val.service.requires_personal_info;
            delete val.service.image_url;
        })
        return properties;
    },
    limit: async (ctx) => {
        const Knex = strapi.connections.default;
        console.log(ctx.params)
        const { limit } = ctx.params;
        const query = {
            _limit: limit,
        }
        const properties = await strapi.query('propertie').find(query)
        properties.forEach(val => {
            delete val.drafted;
            delete val.personal_info;
            delete val.updated_by;
            delete val.agent;
            delete val.service.description;
            delete val.service.requires_personal_info;
            delete val.service.requires_personal_info;
            delete val.service.image_url;
        })
        return properties;
    },

    indexSearch: async ctx => {
        const { keyword } = ctx.params;
        console.log('KEYWORD ---', keyword);
        const Knex = strapi.connections.default;
        const result = await Knex.raw(`select location from properties where location ILIKE '%${keyword}%';`)
        return result;
    }
};
