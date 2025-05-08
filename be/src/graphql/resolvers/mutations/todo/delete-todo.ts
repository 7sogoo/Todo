import { MutationResolvers } from "src/generated";
import { todoModel } from "src/models/todo.model";

export const deleteTodo: MutationResolvers["deleteTodo"] = async (_, { input }) => {
    try {
        await todoModel.findByIdAndDelete({ input })
        return {
            success: true,
            message: `Successfully deleted your todo because of your laziness`
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            message: "Failed to delete"
        }
    }
}