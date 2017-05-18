const userDao = require('../dao/user'),
    ERROR = require('../common/error.map');
var create = async function(ctx) {
    var body = ctx.request.body;
    var user = {
        name: body.name,
        age: body.age,
        position: body.position
    };
    var user = await userDao.create(user).catch(err => {
        if (err.code === 'E11000') {
            throw ERROR.USER.DUPLICATE_NAME
        }
        ctx.logger.error(err);
        throw ERROR.SERVER.MONGO
    });
    user =  user.toObject();
    ctx.result = user;
}
module.exports = {
    create
}
