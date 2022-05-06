const { gql } = require("apollo-server-express");

module.exports = gql`

  type Query {
    presidents: [President!]!
    president(order: Int): [President]
    cabinets: [CabinetMember!]!
    cabinet(order: Int): [CabinetMember]
  }

  type President {
    id: ID!
    order: Int
    name: String
    termStart: String
    termEnd: String
    CabinetMember: [CabinetMember]
  }

  type CabinetMember {
    id: ID!
    order: Int
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

