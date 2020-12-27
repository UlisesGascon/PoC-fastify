const handlerV1 = (request, reply) => {
  reply.send({ hello: 'world v1' })
}

module.exports = function (fastify, opts, done) {
  fastify.get('/user', handlerV1)
  done()
}
