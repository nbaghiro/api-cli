import { bottle, loadMigrations } from 'api-boilerplate'

const migrate = async ({ options: { model, type = 'up', version } }) => {
  const { run, runPending } = await loadMigrations()
  const { container: { db, pgp } } = bottle
  const connection = db.getConnection(pgp, `${db.connectionString}/${db.name}`)
  if (!model) await runPending(connection)
  else await run(connection, type, model, version)
  pgp.end()
}

export default migrate
