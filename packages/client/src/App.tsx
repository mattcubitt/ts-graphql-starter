import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BookList } from "./BookList";
import { createClient } from "./createClient";

const client = createClient(createHttpLink({ uri: "/api/graphql" }));

function App() {
  return (
    <ApolloProvider client={client}>
      <BookList />
    </ApolloProvider>
  );
}

export default App;
