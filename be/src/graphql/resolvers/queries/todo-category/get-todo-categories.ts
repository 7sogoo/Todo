import { QueryResolvers } from "src/generated";
import { todoCategoryModel } from "src/models/todo-category.model";

export const getTodoCategories: QueryResolvers["getTodoCategories"] = () => {
    const todoCategories = todoCategoryModel.find()
    return todoCategories
}