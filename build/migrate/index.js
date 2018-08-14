'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiBoilerplate = require('api-boilerplate');

const migrate = async ({ options: { model, type = 'up', version } }) => {
  const { run, runPending } = await (0, _apiBoilerplate.loadMigrations)();
  const { container: { db, pgp } } = _apiBoilerplate.bottle;
  const connection = db.getConnection(pgp, `${db.connectionString}/${db.name}`);
  if (!model) await runPending(connection);else await run(connection, type, model, version);
  pgp.end();
};

exports.default = migrate;