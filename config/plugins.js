module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: env('SENDGRID_DEFAULT_FROM'),
            defaultReplyTo: env('SENDGRID_REPLY_TO'),
            testAddress: env('SENDGRID_TEST_ADDRESS'),
        },
    },
});