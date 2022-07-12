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
    transactions(query:RequestQuery): [Transaction!]
    transaction(id: ID!): Transaction
    accounts: [Account!]!
    account(id: ID!): Account
    categories: [Category!]!
    category(id: ID!): Category
  }

  input Pagination {
    take: Int!
    skip: Int!
  }

  input QueryForm{
    startMonth: String
    endMonth: String
    accountId: String
  }

  input Sorting{
    orderBy: String!
    sort: String!
  }

  input RequestQuery {
    pagination: Pagination!
    queryForm: QueryForm
    sort: Sorting!

  }

`
export default typeDefs;