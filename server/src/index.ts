import { ApolloServer } from "apollo-server";
import typeDefs from "./prisma/schema"
import resolvers from "./resolvers"
const cors = require('cors')

const port = process.env.PORT || 9090;

const server = new ApolloServer({
    cors: {
        origin: '*',
        credentials: true
    }, resolvers, typeDefs
});


server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));