import { QueryResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const getTodos: QueryResolvers["getTodos"] = async () => {
    try {
        const todos = await todoModel.find()
        return todos
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch todos")
    }
}