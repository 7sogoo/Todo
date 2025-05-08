import { MutationResolvers } from "../../../../generated";
import { todoCategoryModel } from "../../../../models/todo-category.model";

export const createTodoCategory: MutationResolvers["createTodoCategory"] = async (_, { input }) => {
    try {
        const newCategory = await todoCategoryModel.create(input);
        return {
            success: true,
            message: `Todo category "${newCategory.name}" created successfully`,
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return {
            success: false,
            message: `Failed to create todo category: ${errorMessage}`,
        };
    }
};