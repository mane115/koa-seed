const Router = require('koa-router'),
    config = require('../config'),
    util = require('../util'),
    log = require('../midware/log'),
    user = require('./user'),
    router = new Router({prefix: config.baseUrl});

router.use('/*', util.handleResponse);
router.use('/user', log.user, user.routes(), user.allowedMethods());

module.exports = router
