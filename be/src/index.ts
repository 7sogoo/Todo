import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/schemas";
import { resolvers } from "./graphql/resolvers";
import { connectToDb } from "./utils/connect-to-db";
import dotenv from "dotenv";

interface Context {
  userId?: string;
}

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todoApp";
const PORT = parseInt(process.env.PORT || "4000", 10);

async function startServer() {
  try {
    console.log("Connecting to MongoDB:", MONGODB_URI);
    await connectToDb(MONGODB_URI);

    const server = new ApolloServer<Context>({
      typeDefs,
      resolvers,
      introspection: process.env.NODE_ENV !== "production",
    });

    const { url } = await startStandaloneServer(server, {
      context: async ({ req }) => {
        const userId = req.headers.authorization || undefined; 
        return { userId };
      },
      listen: { port: PORT },
    });

    console.log(`🚀 Server ready at: ${url}`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();