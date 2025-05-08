import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phoneNumber: String!
    todos: [Todo!]!
    createdAt: Date!
    updatedAt: Date!
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phoneNumber: String!
  }

  input SignInInput {
    email: String
    phoneNumber: String
    password: String!
  }

  type AuthResponse {
    user: User!
    token: String!
  }

  type Query {
    getMe: User!
  }

  type Mutation {
    signUp(input: SignUpInput!): Response!
    signIn(input: SignInInput!): AuthResponse!
  }
`;
