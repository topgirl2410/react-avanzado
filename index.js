const { ApolloServer, gql } = require('apollo-server');


// SERVER
const server = new ApolloServer();


// Schema
const typeDefs = gql`

    type Curso {
        titulo: String
        tecnologia: String
    }

    type Query {
        obtenerCursos : Curso
    }

`;


// Resolvers

const resolvers = {
    Query: {
        obtenerCursos
    }
}

// Arrancar el servidor
server.listen().then(({ url }) => {
    console.log(`Servidor Listo en la URL ${url}`)
})