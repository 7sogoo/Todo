import { QueryResolvers } from "src/generated";
import { userModel } from "src/models/user.model";


export const getMe: QueryResolvers['getMe'] = async (_, __, { userId }) => {
    if (!userId) throw new Error('Unauthorized');

    const user = await userModel.findById(userId);

    return user;
};
