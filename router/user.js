const Router = require('koa-router'),
    userCtr = require('../controller/user'),
    filter = require('../midware/filter/user'),
    router = new Router();
router.post('/', filter.create, userCtr.create);
module.exports = router;
