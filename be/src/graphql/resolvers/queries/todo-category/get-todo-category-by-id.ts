import { QueryResolvers } from "src/generated";
import { todoCategoryModel } from "src/models/todo-category.model";

export const getTodoCategoryById: QueryResolvers["getTodoCategoryById"] = async (id) => {
    const todoCategory = await todoCategoryModel.findById(id)
    return todoCategory
}