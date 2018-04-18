const restify = require('restify');
const constants = require('./constants');
const MicroservicesKit = require('./microserviceskit');
const plugins = require('./conf/server/plugins');
const routes = require('./conf/server/routes');

/**
 * Config:
 */
const VERSION = require('./package.json').version;

/**
 * Create REST server:
 */
const server = restify.createServer({ name: constants.SERVER_NAME });

/**
 * Server plugins:
 */
plugins(server);

// API routes:
routes(server);


/**
 * Spin up the REST server
 */
server.listen(constants.PORT, () => {
  console.log(`
      ----------------------------------------
            API IS UP  👍
      ----------------------------------------
          👉  Server name: ${server.name}
          👉  Server URL: ${server.url}
      ----------------------------------------
    `);
});