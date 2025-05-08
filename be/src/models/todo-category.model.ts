import mongoose, { model, Schema } from "mongoose";

export type TodoCategoryType = {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

const todoCategorySchema = new Schema<TodoCategoryType>({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const todoCategoryModel =
  mongoose.models["todoCategory"] ||
  model<TodoCategoryType>("todoCategory", todoCategorySchema);