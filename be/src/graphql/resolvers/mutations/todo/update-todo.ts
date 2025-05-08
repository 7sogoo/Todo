import { MutationResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const updateTodo: MutationResolvers["updateTodo"] = async (_, { input }) => {
    try {

        const todo = await todoModel.findById(input.id)

        if (!todo) {
            throw new Error(`Failed to find todo by id ${input.id}`)
        }

        const updatedTodo = await todoModel.findByIdAndUpdate({ input })
        return updatedTodo
    } catch (error) {
        console.error(error)
        throw new Error(`Failed to update todo by id ${input.id}`)
    }
}