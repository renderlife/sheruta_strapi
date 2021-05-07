'use strict';
var jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const VerifyEmail = require('../../../utils/Templates/VerifyEmail');

module.exports = {
    agentInfo: async ctx => {
        const knex = strapi.connections.default;
        const token = await strapi.plugins[
            'users-permissions'
        ].services.jwt.getToken(ctx);
        const userData = await knex.select("*").from('personal_infos').where({ users_permissions_user: token.id })
        return userData
    },
    verifyEmail: async ctx => {
        const knex = strapi.connections.default;
        const confirmationToken = ctx.request.body.confirmationToken;
        const token = ctx.request.body.token;
        const decodedToken = await jwt.verify(token, process.env.PRIVATE_KEY, function (err, decoded) {
            if (err) {
                return false
            } else {
                return decoded;
            }
        });
        console.log('DECODED TOKEN', decodedToken)

        if (token && confirmationToken && decodedToken) {
            const { email, id } = decodedToken;
            const user = await knex('users-permissions_user').where({
                email, id, confirmationToken
            }).returning('*')
            console.log(user);
            if (user.length > 0) {
                await knex('users-permissions_user').where({ id: user[0].id })
                    .update({ confirmationToken: null, confirmed: true })
                return ctx.send({
                    message: 'verified'
                }, 200);
            } else {
                return ctx.send({
                    message: 'Not Found'
                }, 404);
            }
        } else {
            return ctx.send({
                message: 'Bad Request'
            }, 400);
        }
    },

    emailVerifyRequest: async ctx => {
        const body = ctx.request.body;
        const { token } = body;
        const knex = strapi.connections.default;
        const decodedToken = jwt.decode(token, process.env.PRIVATE_KEY);
        const { id } = decodedToken;

        const user = await knex('users-permissions_user').where({ id })
            .returning('*');
        console.log('USER ---', user);
        if (!user[0].confirmationToken) {
            await knext('users-permissions_user').where({ id })
                .update({ confirmationToken: uuid() });
            const _user = await knex('users-permissions_user').where({ id })
                .returning('*');
            await strapi.plugins['email'].services.email.send({
                to: user[0].email,
                from: process.env.SENDGRID_DEFAULT_FROM,
                replyTo: process.env.SENDGRID_REPLY_TO,
                subject: 'Email Validation | Sheruta NG',
                text: 'Email Validation | Sheruta NG',
                html: VerifyEmail({ email: user[0].email, id: user[0].id, first_name: user[0].first_name, confirmationToken: _user[0].confirmationToken }),
            });
            return ctx.send({
                message: 'Email Sent'
            }, 200);
        }else {
            const _user = await knex('users-permissions_user').where({ id })
                .returning('*');
            await strapi.plugins['email'].services.email.send({
                to: user[0].email,
                from: process.env.SENDGRID_DEFAULT_FROM,
                replyTo: process.env.SENDGRID_REPLY_TO,
                subject: 'Email Validation | Sheruta NG',
                text: 'Email Validation | Sheruta NG',
                html: VerifyEmail({ email: user[0].email, id: user[0].id, first_name: user[0].first_name, confirmationToken: _user[0].confirmationToken }),
            });
            return ctx.send({
                message: 'Email Sent'
            }, 200);
        }
    }
};
