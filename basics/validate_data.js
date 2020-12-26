const fastify = require('fastify')({
  logger: true
})

const opts = {
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'number' }
      }
    }
  }
}

fastify.post('/', opts, async request => {
  const { name, age } = request.body
  return { hello: `Your name is ${name}. You are ${age} years old.` }
})

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
