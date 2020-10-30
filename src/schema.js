import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";



const typeDefs = `

    type Query {
        hello: String
        saludar(name:String!): String
        tareas: [Tarea]
        Users: [User]
    }

    type Tarea{
        _id: ID
        titulo: String!
        descrip: String!
        number: Int
    }

    type User{
        _id: ID
        nombre: String!
        apellido: String
        edad: Int
    }

    type Mutation{
        crearTarea(input: InputTarea): Tarea
        crearUser(input: InputUser): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: InputUser): User
    }
    
    input InputTarea{
        titulo: String!
        descrip: String!
        number: Int
    }

    input InputUser{
        nombre: String!
        apellido: String
        edad: Int
    }
`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})