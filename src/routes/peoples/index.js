import Likes from './../../models/Likes'
export default (fastify) => {
  fastify.get('/peoples', async (request, reply) => {
    const organizations = await Likes.query()
    reply.send(organizations)
  })
}
