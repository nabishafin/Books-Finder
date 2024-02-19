import React from "react";

import BookItem from "./BookItem";

const BooksContainer = ({ filteredBooks, setBooks }) => {
    
  const handleFavouriteClick = (id) => {
    setBooks((prev) =>
      prev.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            favourite: !book.favourite,
          };
        } else {
          return book;
        }
      })
    );
  };
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredBooks?.length > 0 &&
        filteredBooks?.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            handleFavouriteClick={(id) => handleFavouriteClick(id)}
          />
        ))}
    </div>
  );
};

export default BooksContainer;
