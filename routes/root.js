import { RootController } from '../src/controllers'
export default (fastify) => {
  fastify.get('/', (request, reply) => {
    const response = RootController.all()
    reply.send(response)
  })
}
