import { loadMigrations } from 'api-boilerplate'

const seed = async () => {
  const { seed } = await loadMigrations()
  return seed()
}

export default seed
