require('dotenv').config()
const fastify = require('fastify')({ logger: process.env.APP_DEBUG || false })

// Register routes
import { routes } from './routes'
routes(fastify)

// Run the server!
fastify.listen(process.env.APP_PORT || 3000, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
})
