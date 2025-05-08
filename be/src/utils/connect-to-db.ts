import mongoose from "mongoose";

export const connectToDb = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("Succesfully connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
