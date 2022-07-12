//* node-graphql-lesson-04/src/schema.js

const { gql } = require("apollo-server")

const typeDefs = gql`

  type Transaction {
    id: ID!
    amount: String!
    currency: String!
    reference: String
    accountId: String
    categoryId: String
    date: String!
  }

  type Account {
    id: ID!
    name: String!
  }

  type Category {
    id: ID!
    name: String!
    color: String
  }

  type Query {
    transactions: [Transaction!]
    transaction(id: ID!): Transaction
    accounts: [Account!]!
    account(id: ID!): Account
    categories: [Category!]!
    category(id: ID!): Category
  }

`
export default typeDefs;