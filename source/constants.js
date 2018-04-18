const routes = require('./conf/constants/routes');

module.exports = {

  /**
   * @constant {String} SERVICE_NAME Name of this service, 
   * used by microserviceskit
   */
  SERVICE_NAME: 'api',

  /**
   * @constant {String} PORT Port for running REST API
   */
  PORT: 3000,

  /**
   * @constant {String} SERVER_NAME Name of this REST API
   */
  SERVER_NAME: 'In1t API',
  
  /**
   * @constant {String} RABBIT_URL RabbitMQ URL
   */
  RABBIT_URL: process.env.RABBIT_AMQP_URL,

  /**
   * @constant {String} SEARCH_QUEUE Search queue name
   */
  SEARCH_QUEUE: 'search',

  /**
   * @constant {String} SEARCH_EVENT Search event
   */
  SEARCH_EVENT: 'my-search-event',

  /**
   * @constant {String} QUEUES_LIST Queues list for this service
   */
  QUEUES_LIST: [
    {
      name: 'search',
      key: 'search',
      options: { durable: true }
    }
  ],
  routes
};