import { MutationResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const createTodo: MutationResolvers["createTodo"] = async (_, { input }) => {
    try {
        const newTodo = await todoModel.create(input)
        return {
            message: `Todo "${newTodo.name}" created successfully`,
            success: true
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return {
            message: `Failed to create todo: ${errorMessage}`,
            success: false
        }
    }
}