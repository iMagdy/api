const restify = require('restify');

module.exports = server => {
  server.use(restify.plugins.acceptParser(server.acceptable));
  server.use(restify.plugins.gzipResponse());
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.throttle({
    burst: 10,  // Max 10 concurrent requests (if tokens)
    rate: 0.5,  // Steady state: 1 request / 2 seconds
    ip: true   // throttle per IP
  }));

  server.on('after', restify.plugins.metrics({ server: server },
    function (err, metrics, req, res, route) {
      console.log({
        REQUEST_METRICS: metrics
      })
    }));
}