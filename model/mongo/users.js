const _const = require('../../common/const');
exports = module.exports = function(conn, mongoose) {
    var users = new mongoose.Schema({
        name: {
            type: String,
            index: {
                unique: true
            }
        },
        age: {
            type: Number,
            default: _const.default.user.age
        },
        position: String,
        status: {
            type: Number,
            default: _const.status.user.active
        }
    });
    conn.model('users', users);
}
