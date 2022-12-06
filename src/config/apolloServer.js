import { ApolloServer } from '@apollo/server'
import { readFileSync } from 'fs'
import path from 'path'
import resolvers from '../resolvers'

const typeDefs = `
  ${readFileSync(path.resolve(process.cwd(), 'src/typeDefs/schema.graphql'), {
		encoding: 'utf-8',
	})}
`

const apolloServer = () =>
	new ApolloServer({
		typeDefs,
		resolvers,
	})

export default apolloServer
