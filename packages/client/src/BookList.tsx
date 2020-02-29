import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

const GET_BOOKS = gql`
  query getBooks {
    books {
      title
      author
    }
  }
`;

interface Book {
  title: string;
  author: string;
}

const BookList = () => {
  const { data, loading, error } = useQuery<{ books: Book[] }>(GET_BOOKS);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading. Please try again.</div>;
  }

  return (
    <>
      <h1>book list</h1>
      <ul>
        {data.books.map(book => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </>
  );
};

export { BookList };
