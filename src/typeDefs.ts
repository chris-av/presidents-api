export default `#graphql

  type Query {
    presidents: [President!]!
    president(order: Int, id: String): [President]
    cabinets: [CabinetMember!]!
    cabinet(order: Int): [CabinetMember]
  }

  type President {
    _id: ID!
    order: Int
    name: String
    termStart: String
    termEnd: String
    cabinet: [CabinetMember]
  }

  type CabinetMember {
    _id: ID!
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

