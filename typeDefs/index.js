import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user-typeDef.js";


const mergedTypeDefs = mergeTypeDefs([userTypeDef, mergeTypeDefs]);

export default mergedTypeDefs;