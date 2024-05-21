import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  return (
    <BookContext.Provider
      value={{ readBooks, setReadBooks, wishlistBooks, setWishlistBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};
