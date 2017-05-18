var _ = require('lodash');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var config = require('../../config');
var fs = require('../../util').fs;
exports = module.exports;
const init = async function() {
    mongoose.Promise = Promise;
    var conn = mongoose.createConnection(config.database.mongo.url);
    exports.types = {
        ObjectId: mongoose.Types.ObjectId
    };
    conn.on('error', function(error) {
        console.log(error);
    });
    var files = await fs.readdirAsync(__dirname);
    files.forEach(file => {
        if (file.indexOf('index.js') !== -1 || file.indexOf('.js') === -1) {
            return false;
        }

        _.extend(exports, require(`./${file}`)(conn, mongoose));
    })
    for (let index in conn.models) {
        exports[index] = conn.models[index]
    };
    console.log(`init mongo success url:${config.database.mongo.url}`);
    return Promise.resolve();
}
exports.init = init;
