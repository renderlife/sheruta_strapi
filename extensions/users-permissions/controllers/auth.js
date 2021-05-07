const VerifyEmail = require("../../../utils/Templates/VerifyEmail");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    register: async ctx => {
        const knex = strapi.connections.default;
        const body = ctx.request.body;
        try {
            const {
                email,
                username,
                password,
                phone_number,
                first_name,
                last_name
            } = body;
            console.log('body ---', body);
            const checkUser = await knex('users-permissions_user').where({
                email
            }).returning('*');
            const checkUsername = await knex('users-permissions_user').where({
                username
            }).returning('*');
            if (checkUser.length > 0) {
                ctx.send({
                    message: `User with email ${email} already exist`
                }, 400)
            } else if (checkUsername.length > 0) {
                ctx.send({
                    message: `Uername ${username} already in use`
                }, 400)
            } else {
                const handledPassword = await bcrypt.hash(password, saltRounds)
                const user = await knex('users-permissions_user').insert({
                    email,
                    username,
                    password: handledPassword,
                    phone_number,
                    first_name,
                    last_name,
                    avatar_url: 'https://jardindemeriem.com/images/temoin/1.jpg',
                    confirmed: false,
                    blocked: false,
                    provider: 'local',
                    role: 1,
                    confirmationToken: uuidv4()
                }).returning('*')
                console.log('NEW USER --', user);
                await strapi.plugins['email'].services.email.send({
                    to: email,
                    from: process.env.SENDGRID_DEFAULT_FROM,
                    replyTo: process.env.SENDGRID_REPLY_TO,
                    subject: 'Email Validation | Sheruta NG',
                    text: 'Email Validation | Sheruta NG',
                    html: VerifyEmail({ email, id: user[0].id, first_name, confirmationToken: user[0].confirmationToken }),
                });
                return ctx.send({
                    message: 'User Created'
                }, 201);
            };

        } catch (error) {
            console.log(error);
            return ctx.send({
                message: 'Bad Request'
            }, 400);
        }
    }
}

