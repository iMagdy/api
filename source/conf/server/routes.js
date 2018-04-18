const constants = require('../../constants');
const MicroservicesKit = require('../../microserviceskit');

module.exports = server => {
  const version = require('../../package.json').version;
  
  /**
 * Search results API handler
 * @description upon completion of handler function in order to move to next 
 * function in the route functions chain
 */
  const searchResults = (req, res, next) => {
    // Get search queue:
    const searchQueue = MicroservicesKit.amqpKit.getQueue(constants.SEARCH_QUEUE);

    // Send search event to RabbitMQ via Microserviceskit, elasticsearch is listening
    // on the other end.
    searchQueue.sendEvent(constants.SEARCH_EVENT, {
      // include the search keyword
      keyword: req.params.keyword
    }, { persistent: true })
      .then(payload => {
        // Send the status code coming from ES, and the data payload (as is)
        // no need to do any transformations at the moment
        res.send(payload.status, payload.data);

        // Mark completed, release the response.
        next();
      })
      .catch(err => {
        // 👎  failed to send search event to elasticsearch!
        // falling back silently to empty results
        res.send(200, []);
        next();
      });

  }
  server.get({
    path: constants.routes.SEARCH_ROUTE,
    version
  }, searchResults);

  server.get({
    path: constants.routes.TEST_ROUTE,
    version
  }, (req, res, next) => {
    res.send(200, 'HELLO');
    next();
  });

  server.opts({
    path: constants.routes.SEARCH_ROUTE,
    version
  }, searchResults);
}