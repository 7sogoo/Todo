import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs as CommonDefs } from "./common.schema";
import { typeDefs as TodoCategoryDefs } from "./todo-category.schema";
import { typeDefs as TodoDefs } from "./todo.schema";
import { typeDefs as UserDefs } from "./user.schema";


export const typeDefs = mergeTypeDefs([CommonDefs, TodoCategoryDefs, TodoDefs, UserDefs]);
