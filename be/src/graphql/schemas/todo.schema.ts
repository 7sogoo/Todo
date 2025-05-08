import gql from "graphql-tag";

export const typeDefs = gql`
  type Todo {
    _id: ID!
    name: String!
    category: TodoCategory!
    user: User!
    createdAt: Date!
    updatedAt: Date!
  }

  input CreateTodoInput {
    name: String!
    category: ID!
    user: ID!
  }

  input UpdateTodoInput {
    id: ID!
    name: String!
    category: ID!
  }

  input DeleteTodoInput {
    id: ID!
  }

  type Query {
    getTodos: [Todo!]!
    getTodoById(id: ID!): Todo
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Response!
    deleteTodo(input: DeleteTodoInput!): Response!
    updateTodo(input: UpdateTodoInput!): Response!
  }
`;
