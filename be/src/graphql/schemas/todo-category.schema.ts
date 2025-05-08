import gql from "graphql-tag";

export const typeDefs = gql`
  type TodoCategory {
    _id: ID!
    name: String!
    createdAt: Date!
    updatedAt: Date!
  }

  input CreateTodoCategoryInput {
    name: String!
  }

  input UpdateTodoCategoryInput {
    id: ID!
    name: String!
  }

  input DeleteTodoCategoryInput {
    id: ID!
  }

  type Query {
    getTodoCategories: [TodoCategory!]!
    getTodoCategoryById(id: ID!): TodoCategory
  }

  type Mutation {
    createTodoCategory(input: CreateTodoCategoryInput!): Response!
    deleteTodoCategory(input: DeleteTodoCategoryInput!): Response!
    updateTodoCategory(input: UpdateTodoCategoryInput!): Response!
  }
`;
