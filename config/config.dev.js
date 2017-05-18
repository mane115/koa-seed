module.exports = {
    port: 3004,
    baseUrl: '/api/v1',
    session: {
        key: 'HANDSOMEGH',
        age: 24 * 60 * 60 * 1000
    },
    database: {
        redis: {
            port: 6379,
            host: '127.0.0.1',
            library: 1
        },
        mysql: {
            connectionLimit: 100,
            getConnection: 100,
            host:'127.0.0.1',
            user: 'root',
            password: 'root',
            database: 'test',
            charset: 'utf8mb4',
            multipleStatements: true, //允许一条query可以包含多条sql语句
        },
        mongo: {
            url: 'mongodb://127.0.0.1/ghtest'
        }
    },
    log: {
        appenders: [
            {
                type: 'console'
            }, {
                type: 'dateFile',
                filename: 'logs/auth',
                category: 'auth',
                pattern: "-yyyy-MM-dd.log",
                alwaysIncludePattern: true
            }, {
                type: 'dateFile',
                filename: 'logs/auth',
                category: 'user',
                pattern: "-yyyy-MM-dd.log",
                alwaysIncludePattern: true
            }, {
                type: 'file',
                filename: 'logs/common.log',
                category: 'common',
                maxLogSize: 20480,
                backups: 3
            }, {
                type: "logLevelFilter",
                level: "ERROR",
                appender: {
                    type: "file",
                    filename: "logs/errors.log"
                }
            }, {
                type: "logLevelFilter",
                level: "WARN",
                appender: {
                    type: "file",
                    filename: "logs/warn.log"
                }
            }
        ]
    },
}
