const Redis = require('ioredis');

const redis = new Redis({
  host: '3.93.101.215',
  port: 6379
});

module.exports = redis;