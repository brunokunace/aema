export function root (fastify) {
    fastify.get('/', (request, reply) => {
        reply.send({ hello: 'world' })
    })
}
