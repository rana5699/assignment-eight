import { useState, useEffect } from "react";
import Book from "./Book";
import Loader from "../Loader";

const BooksCard = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="mx-auto text-center my-5">
        <h2 className="text-3xl font-bold">Books</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 justify-center items-center">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Loader />
          </div>
        ) : (
          books.map((book) => <Book key={book.book_id} book={book} />)
        )}
      </div>
    </div>
  );
};

export default BooksCard;
