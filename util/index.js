var fs = require('fs');
var Promise = require('bluebird');
var spawn = require('child_process').spawn;
var Redis = require('redis');
var config = require('../config');
Promise.promisifyAll(fs);
var initRedis = function() {
    return new Promise((success, fail) => {
        var redisConfig = config.database.redis;
        var redis = Redis.createClient(redisConfig.port, redisConfig.host)
        if (redisConfig.pwd) {
            redis.auth(redisConfig.pwd)
        }
        redis.on('error', function(err) {
            console.warn(err)
            fail()
        })
        redis.select(redisConfig.library, function(err, info) {
            console.log(`init redis success url:${redisConfig.host},db:${redisConfig.library}`);
            Promise.promisifyAll(Redis.RedisClient.prototype);
            Promise.promisifyAll(Redis.Multi.prototype);
            module.exports.redis = redis;
            success()
        });
    })
};
var checkUpdate = function(tocheckObj, properties) {
    var update = {};
    properties.forEach(property => {
        if (tocheckObj[property])
            update[property] = tocheckObj[property]
    })
    return update;
};
var handleResponse = async function(ctx, next) {
    try {
        logger.trace(`ip ${ctx.ip} ${ctx.method} url:${ctx.url}`);
        await next();
        if (ctx.body) {
            return;
        }
        let response = {
            code: 0,
            message: 'operation success'
        };
        if (ctx.result && ctx.result.result) {
            response.result = ctx.result.result;
        } else if (ctx.result) {
            response.result = ctx.result;
        }
        ctx.body = response;
    } catch (err) {
        ctx.body = err;
    }
};
var execFile = function(file, onData) {
    return new Promise((success, fail) => {
        var cmd = spawn(file);
        cmd.stdout.on('data', onData);
        cmd.stderr.on('data', onData);
        cmd.on('close', (code) => {
            success();
        });
    })
};
module.exports = {
    fs,
    checkUpdate,
    handleResponse,
    execFile,
    initRedis
}
