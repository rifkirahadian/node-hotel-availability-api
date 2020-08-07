// knex configuration settting
import knexfile from './knexfile'
import knex from 'knex'
const environment = process.env.NODE_ENV
const config = knexfile[environment]

export default knex(config)
