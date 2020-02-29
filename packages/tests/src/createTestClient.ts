import { resolvers, typeDefs } from "@ts-graphql-starter/server/src/schema";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import { createClient } from "@ts-graphql-starter/client/src/createClient";

export const createTestClient = () => {
  return createClient(
    new SchemaLink({
      schema: makeExecutableSchema({
        typeDefs,
        resolvers
      })
    })
  );
};
