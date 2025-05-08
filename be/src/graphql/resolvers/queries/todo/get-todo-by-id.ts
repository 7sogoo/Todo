import { QueryResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const getTodoById: QueryResolvers["getTodoById"] = (id) => {
    try {
        const todo = todoModel.findById(id)
        return todo
    } catch (error) {
        console.error(error)
        throw new Error(`Failed to fetch todo by id ${id}`)
    }
}