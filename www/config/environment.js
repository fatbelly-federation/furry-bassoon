/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-ethereum-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
        ApiUrl: 'https://pool.fatbelly.space/',

      // HTTP mining endpoint
      HttpHost: 'https://pool.fatbelly.space/ethereum',
      HttpPort: 9943,

      // Stratum mining endpoint
      StratumHost: 'pool.fatbelly.space',
      StratumPort: 48008,

      // Fee and payout details
      PoolFee: '1%',
      PayoutThreshold: '0.25 Ether',

      // For network hashrate (change for your favourite fork)
      BlockTime: 10.0

      // try enabling some loggin
      // https://www.tutorialspoint.com/emberjs/emberjs_route.htm
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'https://pool.fatbelly.space/'
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
