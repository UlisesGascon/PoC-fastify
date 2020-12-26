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
