import mongoose, { Schema, Types, model } from 'mongoose';

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  todos: Types.ObjectId[]
  createdAt: Date;
  updatedAt: Date;
};

const userSchema = new Schema<UserType>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],
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

export const userModel = mongoose.models['user'] || model('user', userSchema);
