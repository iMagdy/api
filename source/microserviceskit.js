const MSK = require('microservice-kit');
const constants = require('./constants');

const microserviceKitInstance = new MSK({
  type: constants.SERVICE_NAME,
  config: null,
  amqp: {
    url: constants.RABBIT_URL,
    queues: constants.QUEUES_LIST
  }
});

microserviceKitInstance.init().catch(err => {
  // 👎  failure in initializing microservices kit!
  throw new Error(err);
});

module.exports = microserviceKitInstance;