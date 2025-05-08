import { MutationResolvers } from "src/generated";
import { userModel } from "src/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const signIn: MutationResolvers["signIn"] = async (_, { input }) => {
    const { email, phoneNumber, password } = input;

    const user = await userModel.findOne({
        $or: [{ email }, { phoneNumber }],
    });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign(
        {
            userId: user._id,
        },
        process.env.JWT_SECRET!
    );

    return {
        user,
        token,
    };
};
