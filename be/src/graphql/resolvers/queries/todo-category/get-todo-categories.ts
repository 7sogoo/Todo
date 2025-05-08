import { QueryResolvers } from "src/generated";
import { todoCategoryModel } from "src/models/todo-category.model";

export const getTodoCategories: QueryResolvers["getTodoCategories"] = async () => {
    const todoCategories = await todoCategoryModel.find()
    return todoCategories
}