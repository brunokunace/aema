import root from './root'
import likes from './likes'
import projects from './projects'

export function routes (fastify) {
  root(fastify)
  likes(fastify)
  projects(fastify)
}
