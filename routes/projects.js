import { ProjectsController } from '../src/controllers'
export default (fastify) => {
  fastify.get('/projects/:uuid', async (request, reply) => {
    const uuid = request.params.uuid
    const response = await ProjectsController.show(uuid)
    reply.send(response)
  })
}
