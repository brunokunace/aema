import dotenv from 'dotenv'
import { routes } from './routes'
import connectDatabase from '../database'
dotenv.config()

const fastify = require('fastify')({ logger: process.env.APP_DEBUG || false })

// Register routes
routes(fastify)

// Connect Database
try {
  connectDatabase()
  fastify.log.info('Database connection established!')
} catch (error) {
  fastify.log.error(error)
}

// Run the server!
fastify.listen(process.env.APP_PORT || 3000, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${fastify.server.address().port}`)
})
