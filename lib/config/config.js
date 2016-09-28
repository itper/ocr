'use strict';

module.exports = {
    database: {
        username: 'root',
        password: '',
        db: 'ocr',
        host: '127.0.0.1',
        port: 3306,
        pool: {
            maxConnections: 10
        },
        syncFirst: true
    }
};