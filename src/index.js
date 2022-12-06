import { startStandaloneServer } from '@apollo/server/standalone'
import apolloServer from './config/apolloServer'

const { url } = await startStandaloneServer(apolloServer(), {
	listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
