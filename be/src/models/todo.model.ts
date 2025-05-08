import mongoose, { model, Schema, Types } from "mongoose";

export type TodoType = {
    _id: string;
    title: string;
    category: Types.ObjectId;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
};

const todoSchema = new Schema<TodoType>({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "todoCategory",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
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

export const todoModel = mongoose.models['todo'] || model('todo', todoSchema);
