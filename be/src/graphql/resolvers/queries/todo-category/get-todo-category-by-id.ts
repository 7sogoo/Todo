import { QueryResolvers } from "src/generated";
import { todoCategoryModel } from "src/models/todo-category.model";

export const getTodoCategoryById: QueryResolvers["getTodoCategoryById"] = (id) => {
    const todoCategory = todoCategoryModel.findById(id)
    return todoCategory
}