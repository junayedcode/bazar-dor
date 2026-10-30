
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db, {
    client,usePlural: true,
  }),

  emailAndPassword: {
    enabled: true,
  },

 github: {
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET ,
  redirectURI: "https://bazar-dor-ecru-gamma.vercel.app/api/auth/callback/github",
},
google: {
  clientId: process.env.GOOGLE_CLIENT_ID ,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
  prompt: "select_account",
  redirectURI: "https://bazar-dor-ecru-gamma.vercel.app/api/auth/callback/google",
},
});
