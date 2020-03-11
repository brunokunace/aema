import { Model } from 'objection'
import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()

const createConnection = (config) => {
    return knex({
        client: process.env.DB_CONNECTION || 'mysql',
        useNullAsDefault: true,
        connection: config
    })
}

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE
}

export default () => {
    const connection = createConnection(config)
    Model.knex(connection)
    // connection.migrate.latest()
}
