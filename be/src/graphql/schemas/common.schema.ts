import gql from "graphql-tag";

export const typeDefs = gql`
  scalar JSON

  scalar Date

  type Response {
    success: Boolean!
    message: String
  }
`;
