# PoC-fastify
PoC fastify framework for modern API development


## Getting Started

### Basic server
- [Documentation](https://www.fastify.io/docs/latest/Getting-Started/#your-first-server)
- [Sample](basics/basic_server.js)


### Async/Await server
- [Documentation](https://www.fastify.io/docs/latest/Getting-Started/#your-first-server)
- [Sample](basics/async_server.js)

### First Plugin (add route)

#### Recommendation: Loading order of your plugins

```
└── plugins (from the Fastify ecosystem)
└── your plugins (your custom plugins)
└── decorators
└── hooks
└── your services
```

- [Documentation](https://www.fastify.io/docs/latest/Getting-Started/#your-first-plugin)
- [Sample](basics/basic_plugin.js)


### Validate data (Json Schemas)

- [Documentation](https://www.fastify.io/docs/latest/Getting-Started/#validate-your-data)
- [Sample](basics/validate_data.js)


### Serialize data

- [Documentation](https://www.fastify.io/docs/latest/Getting-Started/#serialize-your-data)
- [Sample](basics/serialize_data.js)

### Extend `server` configuration

Here are the default values and documentation for the most relevant options:

```js
const fastify = require('fastify')({
    http2: false,                       // https://www.fastify.io/docs/latest/Server/#http2
    https: null,                        // https://www.fastify.io/docs/latest/Server/#https
    connectionTimeout: 0,               // https://www.fastify.io/docs/latest/Server/#connectiontimeout
    keepAliveTimeout: 5000,             // https://www.fastify.io/docs/latest/Server/#keepalivetimeout
    ignoreTrailingSlash: false,         // https://www.fastify.io/docs/latest/Server/#ignoretrailingslash
    maxParamLength: 100,                // https://www.fastify.io/docs/latest/Server/#maxparamlength
    bodyLimit: 1048576,                 // https://www.fastify.io/docs/latest/Server/#bodylimit
    onProtoPoisoning: 'error',          // https://www.fastify.io/docs/latest/Server/#onprotopoisoning
    onConstructorPoisoning: 'ignore',   // https://www.fastify.io/docs/latest/Server/#onconstructorpoisoning
    logger: false,                      // https://www.fastify.io/docs/latest/Server/#logger
    disableRequestLogging: false,       // https://www.fastify.io/docs/latest/Server/#disablerequestlogging
    serverFactory: null,                // https://www.fastify.io/docs/latest/Server/#serverfactory
    caseSensitive: true,                // https://www.fastify.io/docs/latest/Server/#casesensitive
    return503OnClosing: true,           // https://www.fastify.io/docs/latest/Server/#return503onclosing
    http2SessionTimeout: 5000,          // https://www.fastify.io/docs/latest/Server/#http2sessiontimeout
    // --- Other ---
    // https://www.fastify.io/docs/latest/Server/#requestidheader
    // https://www.fastify.io/docs/latest/Server/#requestidloglabel
    // https://www.fastify.io/docs/latest/Server/#genreqid
    // https://www.fastify.io/docs/latest/Server/#trustproxy
    // https://www.fastify.io/docs/latest/Server/#plugintimeout
    // https://www.fastify.io/docs/latest/Server/#querystringparser
    // https://www.fastify.io/docs/latest/Server/#versioning
    // https://www.fastify.io/docs/latest/Server/#ajv
    // https://www.fastify.io/docs/latest/Server/#frameworkerrors
    // https://www.fastify.io/docs/latest/Server/#clienterrorhandler
  })
```


## Routing

### Routes options

Sintaxis:
```js
const fastify = require('fastify')

fastify.route({
  method: 'GET',
  url: '/',
  handler: (request, reply) => {
    reply.send({ hello: 'world' })
  }
})
```


Options:

```js
const options = {
    method: 'GET',
    url: '/',                     // Can be named path too
    schema,                       // Request and response schema using JSON Schema
    attachValidation,             // Custom error send in case of schema error
    bodyLimit: 1048576,           // Defaults to 1048576 (1 MiB).
    logLevel,                     // Set log level for this route
    logSerializers,               // Set serializers to log for this route
    config,                       // Object used to store custom configuration
    version,                      // Semver compatible string that defined the version of the endpoint
    prefixTrailingSlash: 'both',  // both | slash | no-slash

    // Schemas and Validation
    validatorCompiler: ({ schema, method, url, httpPart }) => {}, // Function that builds schemas for request validations
    serializerCompiler: ({ { schema, method, url, httpStatus } }) => {}, // Function that builds schemas for response serialization
    schemaErrorFormatter: (errors, dataVar) => {}   // Function that formats the errors from the validation compiler

    // Hooks
    onRequest: (request, reply, done) => {},        // As soon that a request is received
    preParsing: (request, reply, done) => {},       // Called before parsing the request
    preValidation: (request, reply, done) => {},    // Called after the shared preValidation hooks, useful for authentication at route level
    preHandler: (request, reply, done) => {},       // Called just before the request handler,
    preSerialization: (request, reply, payload, done) => {}, // Called just before the serialization
    onSend: (request, reply, payload, done) => {},  // Called right before a response is sent
    onResponse: (request, reply, done) => {},       // Called when a response has been sent, so you will not be able to send more data to the client
    handler: (request, reply) => {},                // The function that will handle this request.  Note: using an arrow function will break the binding of this.
    errorHandler: (error, request, reply) => {},    // Custom error handler for the scope of the request
}

```

Notes:
- Most of the options supports Arrays


[Documentation](https://www.fastify.io/docs/latest/Routes/#routes-option)


### Shorthand declaration

Configuration
```
fastify.get(path, [options], handler)
fastify.head(path, [options], handler)
fastify.post(path, [options], handler)
fastify.put(path, [options], handler)
fastify.delete(path, [options], handler)
fastify.options(path, [options], handler)
fastify.patch(path, [options], handler)
```

Example
```js
const fastify = require('fastify')

fastify.get('/', opts, (request, reply) => {
  reply.send({ hello: 'world' })
})
```

[Documentation](https://www.fastify.io/docs/latest/Routes/#shorthand-declaration)


### Url building

```js
// parametric
fastify.get('/example/:userId', (request, reply) => {})
fastify.get('/example/:userId/:secretToken', (request, reply) => {})

// parametric with regexp
fastify.get('/example/:file(^\\d+).png', (request, reply) => {})

// wildcard
fastify.get('/example/*', (request, reply) => {})

// Advance
fastify.get('/example/near/:lat-:lng/radius/:r', (request, reply) => {}) //  use the dash ("-") as parameters separator.
fastify.get('/example/at/:hour(^\\d{2})h:minute(^\\d{2})m', (request, reply) => {})
```

Notes:
- Having a route with multiple parameters may affect negatively the performance. Try to use only one.
- Check [find-my-way](https://github.com/delvedor/find-my-way) for a better understanding


[Documentation](https://www.fastify.io/docs/latest/Routes/#url-building)


### Async/Await in Routes

**Using return**

```js
fastify.get('/', options, async function (request, reply) {
  var data = await getData()
  var processed = await processData(data)
  return processed
})
```

**Using `reply.send`**

```js
fastify.get('/', options, async function (request, reply) {
  var data = await getData()
  var processed = await processData(data)
  reply.send(processed)
})
```

**Wrapping a callback-based API**
```js
fastify.get('/', options, async function (request, reply) {
  setImmediate(() => {
    reply.send({ hello: 'world' })
  })
  await reply
})
```

**Wrapping a callback-based API with `return`**
```js
fastify.get('/', options, async function (request, reply) {
  setImmediate(() => {
    reply.send({ hello: 'world' })
  })
  return reply
})
```

**Remember about promise resolution:**
- If you want to use `async/await` or promises but respond a value with `reply.send`:
    - Don't `return` any value.
    - Don't forget to call `reply.send`.
- If you want to use async/await or promises:
    - Don't use `reply.send`.
    - Don't return `undefined`.

Notes:
- When using both `return value` and `reply.send(value)` at the same time, the first one that happens takes precedence, the second value will be discarded, and a warn log will also be emitted because you tried to send a response twice.
- You can't return `undefined`.

[Documentation](https://www.fastify.io/docs/latest/Routes/#async-await)

