const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const { Client } = require('pg');
const debug = require('debug')('import:log');

// Here you import datas from your base

(async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    });
    await client.connect();

    debug('Client connected');

    debug('Clean table');

    // Here you have to TRUNCATE your tables
    await client.query('TRUNCATE TABLE <tables to truncate> RESTART IDENTITY');

    // Here you have create an Object to reference all your requests

    debug('Done');

    client.end();
})();
