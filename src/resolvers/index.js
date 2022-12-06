import { allUsers, books } from '../dataSources'

const resolvers = {
	Query: {
		books: () => books,
		users: () => allUsers,
	},
}

export default resolvers
