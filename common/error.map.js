module.exports = {
    USER: {
        DUPLICATE_NAME: {
            code: 1001,
            message: 'user name exist'
        }
    },
    DATA: {
        REQUIRE: (params = 'params') => {
            var message = `${params} require`;
            return {code: 8002, message: message}
        },
        INVALID_DATA: (data = 'data') => {
            var message = `invalid ${data}`
            return {code: 8003, message: message}
        }
    },
    SERVER: {
        MONGO: {
            code: 9001,
            massage: 'The server is extremely busy at the moment, please send it again.'
        },
        COMMON: {
            code: 9002,
            massage: 'The server is extremely busy at the moment, please send it again.'
        }
    }
}
