const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let connectionString = process.env.DB_URL;
if(process.env.NODE_env === 'test')
    connectionString = process.env.DB_URL;


if(!connectionString)
    throw new Error('Env variable DB_URL must be set')

const params = url.parse(connectionString)

const[username, password] = params.auth.split(':')

const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2
};

options.ssl = (options.host !== 'localhost');

module.exports = new Pool(options);