import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { HandleBook } from "./HandleBook";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2A344A;
  padding: 20px 0;
  margin: 0;
`;

export const BookList = () => {
  const books = useSelector((store) => store.toread.books); //what we are using => how we are using it

  return (
    <ListContainer>
      {books.map((book, index) => (
        <div key={index}>
          <HandleBook book={book} />
        </div>
      ))}
    </ListContainer>
  );
};
