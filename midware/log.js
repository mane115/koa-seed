const log4js = require('log4js'),
    userLogger = log4js.getLogger('user');
var user = async(ctx, next) => {
  ctx.logger = userLogger;
  await next()
}

module.exports = {
    user
}
