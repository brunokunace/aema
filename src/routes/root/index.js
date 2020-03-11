export default (fastify) => {
    fastify.get('/', (request, reply) => {
        reply.send({ hello: 'world' })
    })
}
