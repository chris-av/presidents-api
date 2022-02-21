const { gql } = require("apollo-server-express");

module.exports = gql`

  type Query {
    presidents: [President!]!
    president(order: Int): [President]
  }

  type President {
    id: ID!
    order: Int
    name: String
    termStart: String
    termEnd: String
    Cabinet: [Cabinet]
  }

  type Cabinet {
    name: String
    position: String
    termStart: String
    termEnd: String
  }

  type Mutation {
    createPresident(name: String!, order: Int!, termStart: String!, termEnd: String!): President!
    deletePresident(id: String!): President!
  }

`;

