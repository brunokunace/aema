import { root } from './root'
import { peoples } from './peoples'

export function routes(fastify) {
    root(fastify)
    peoples(fastify)
}

