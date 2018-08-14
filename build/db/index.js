'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.destroy = exports.create = undefined;

var _apiBoilerplate = require('api-boilerplate');

const create = exports.create = async () => {
  await (0, _apiBoilerplate.load)();
  const { container: { db, pgp } } = _apiBoilerplate.bottle;
  const connection = db.getConnection(pgp);
  await db.create(connection, pgp);
  pgp.end();
};

const destroy = exports.destroy = async () => {
  await (0, _apiBoilerplate.load)();
  const { container: { db, pgp } } = _apiBoilerplate.bottle;
  await db.delete(db.getConnection(pgp));
  pgp.end();
};

const reset = exports.reset = async () => {
  const { runPending, seed } = await (0, _apiBoilerplate.loadMigrations)();
  const { container: { db, pgp } } = _apiBoilerplate.bottle;
  const connection = db.getConnection(pgp);
  await db.delete(connection);
  const dbConnection = await db.create(connection, pgp);
  await runPending(dbConnection);
  pgp.end();
  return seed();
};