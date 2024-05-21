import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/Error/ErrorPage";
import ListedBooks from "./BooksPages/ListedBooks";
import BooksCard from "./BooksPages/BooksCard";
import ReadPage from "./Components/Chart/ReadPage";
import Root from "./Root/Root";
import BookDetails from "./BooksPages/BooksDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          // loader: () => fetch("booksData.json"),
          element: <Root />,
        },
        {
          path: "/",
          element: <BooksCard />,
        },
        {
          path: "/bookdetails/:bookId",
          // loader: () => fetch("booksData.json"),
          element: <BookDetails />,
        },
        {
          path: "/listedtbooks",
          element: <ListedBooks />,
        },
        {
          path: "/readpages",
          element: <ReadPage />,
        },
      ],
    },
  ]);

  return (
    <div className="w-10/12 mx-auto my-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
