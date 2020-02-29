import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { BookList } from "@ts-graphql-starter/client/src/BookList";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { createTestClient } from "./createTestClient";

const renderBookList = () =>
  render(
    <ApolloProvider client={createTestClient()}>
      <BookList />
    </ApolloProvider>
  );

describe("<Booklist />", () => {
  it("should show books", async () => {
    const { getByText, getByRole } = renderBookList();

    await waitForElementToBeRemoved(() => getByText("Loading..."));

    const list = getByRole("list");
    expect(list.childNodes).toHaveLength(2);
    expect(list.childNodes[0].textContent).toEqual(
      "Harry Potter and the Chamber of Secrets"
    );
    expect(list.childNodes[1].textContent).toEqual("Jurassic Park");
  });
});
