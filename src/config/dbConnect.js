import knex from 'knex'

const dbConnect = knex({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: 'admin',
		password: 'admin',
		database: 'postgres',
	},
})

export default dbConnect
