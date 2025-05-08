import { QueryResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const getTodoById: QueryResolvers["getTodoById"] = async (id) => {
    try {
        const todo = await todoModel.findById(id)
        return todo
    } catch (error) {
        console.error(error)
        throw new Error(`Failed to fetch todo by id ${id}`)
    }
}