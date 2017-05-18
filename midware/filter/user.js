var ERROR = require('../../common/error.map');
var create = async function(ctx, next) {
    var body = ctx.request.body;
    if (!body.name) {
        throw ERROR.DATA.REQUIRE('name')
    }
    if (!body.age) {
        throw ERROR.DATA.REQUIRE('age')
    }
    if (!body.position) {
        throw ERROR.DATA.REQUIRE('position')
    }
    await next()
}

module.exports = {
    create
}
