import { LikesController } from '../src/controllers'
export default (fastify) => {
  fastify.get('/likes', async (request, reply) => {
    const response = await LikesController.all()
    reply.send(response)
  })
}
