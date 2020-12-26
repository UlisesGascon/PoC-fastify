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

