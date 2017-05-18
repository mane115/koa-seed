var ERROR = require('../common/error.map.js');
var login = async function(ctx, next) {
    if (ctx.session.user)
        throw ERROR.AUTH.IS_LOGIN;
    var body = ctx.request.body;
    if (!body.username) {
        throw ERROR.DATA.REQUIRE('username');
    }
    if (!body.password) {
        throw ERROR.DATA.REQUIRE('password');
    }
    await next();
};
module.exports = {
    login
}
