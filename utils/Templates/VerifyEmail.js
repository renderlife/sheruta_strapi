

var jwt = require('jsonwebtoken');
const StaticHtml = require('./MainTemplate')

module.exports = ({ email, id, first_name, confirmationToken }) => {
    var token = jwt.sign({ email, id }, process.env.PRIVATE_KEY);
    return StaticHtml({
        heading: 'Verify Your Email',
        subHeading: 'Hi ' + first_name,
        body: 'We noticed you signup on Sheruta NG, to proceed with your registration, we\'d like you to verify your email address.',
        actionText: 'Verify Account',
        actionURL: `${process.env.CLIENT_URL + "/email/activate/" + token + '/' + confirmationToken}`
    })
};

