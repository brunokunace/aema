export function peoples (fastify) {
    fastify.get('/peoples', (request, reply) => {
        reply.send({ peoples: 'are difficult!' })
    })
}
