const handlerV2 = (request, reply) => {
  reply.send({ hello: 'world v2' })
}

module.exports = function (fastify, opts, done) {
  fastify.get('/user', handlerV2)
  done()
}
