var mongo = require('../model/mongo'),
    _const = require('../common/const'),
    util = require('../util');
var findByName = function(name) {
    var condition = {
        name: name,
        status: _const.status.user.active
    };
    return mongo.users.find(condition)
};
var create = function(data) {
    var user = {
        name: data.name,
        age :+ data.age,
        position: data.position
    };
    return mongo.users.create(user)
};
var updateUserByName = function(name, userUpdate) {
    var condition = {
        name: name,
        status: _const.status.user.active
    };
    var update = util.checkUpdate(userUpdate, ['name', 'age', 'position']);
    var option = {
        new: true
    };
    return mongo.users.update(condition, update, option)
};
var deleteUserById = function(id) {
    var condition = {
        _id: id,
        status: _const.status.user.active
    };
    var update = {
        status: _const.status.user.deleted
    };
    return mongo.users.update(condition, update)
}
module.exports = {
    findByName,
    create,
    updateUserByName,
    deleteUserById
}
