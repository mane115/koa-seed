var rq = require('request-promise');
var request = function(option) {
    return rq(option).then(result => {
        if (typeof result === 'string'){
          result = JSON.parse(result);
        }
        return result;
    })
};
var get = function(url, headers) {
    var option = {
        uri: url,
        method: 'GET',
        headers: {}
    }
    if (headers) {
        option.headers = headers;
    };
    option.headers['content-type'] = 'application/json';
    return request(option)
};
var post = function(url, data, headers) {
    var option = {
        uri: url,
        method: 'POST',
        headers: {}
    }
    if (data) {
        option.body = JSON.stringify(data);
    }
    if (headers) {
        option.headers = headers;
    }
    option.headers['content-type'] = 'application/json';
    return request(option)
};
var put = function(url, data, headers) {
    var option = {
        uri: url,
        method: 'PUT',
        headers: {}
    }
    if (data) {
        option.body = JSON.stringify(data);
    }
    if (headers) {
        option.headers = headers;
    };
    option.headers['content-type'] = 'application/json';
    return request(option)
};
var del = function(url, data, headers) {
    var option = {
        uri: url,
        method: 'DELETE',
        headers: {}
    }
    if (data) {
        option.body = JSON.stringify(data);
    }
    if (headers) {
        option.headers = headers;
    }
    option.headers['content-type'] = 'application/json';
    return request(option)
};
module.exports = {
    get,
    post,
    put,
    del
}
