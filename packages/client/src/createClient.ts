import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";

export const createClient = (link?: ApolloLink) => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
};
