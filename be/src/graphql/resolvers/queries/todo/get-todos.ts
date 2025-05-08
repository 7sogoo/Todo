import { QueryResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const getTodos: QueryResolvers["getTodos"] = () => {
    try {
        const todos = todoModel.find()
        return todos
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch todos")
    }
}