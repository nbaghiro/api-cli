'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiBoilerplate = require('api-boilerplate');

const seed = async () => {
  const { seed } = await (0, _apiBoilerplate.loadMigrations)();
  return seed();
};

exports.default = seed;