import { MutationResolvers } from "src/generated";
import { userModel } from "src/models/user.model";
import bcrypt from "bcrypt";

export const signUp: MutationResolvers["signUp"] = async (_, { input }) => {
    const { email, phoneNumber, password, ...rest } = input;

    const existingUser = await userModel.findOne({ email, phoneNumber });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const saltRounds = parseInt(process.env.SALT_ROUND || "10", 10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await userModel.create({
        ...rest,
        email,
        phoneNumber,
        password: hashedPassword,
    });

    return {
        message: "User created successfully",
        success: true
    };
};
