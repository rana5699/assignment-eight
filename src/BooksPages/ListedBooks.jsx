import { useEffect, useState } from "react";
import {
  getReadBooksIdFromLs,
  getWishlistBooksIdFromLs,
} from "../Utilities/localStortage";
import { MdContactPage, MdGroups2 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  const readId = getReadBooksIdFromLs();
  const wishlistId = getWishlistBooksIdFromLs();

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const matchedReadBooks = data.filter((item) =>
          readId.includes(item.book_id)
        );
        const matchedWishlistBooks = data.filter((item) =>
          wishlistId.includes(item.book_id)
        );
        setWishlistBooks(matchedWishlistBooks);
        setReadBooks(matchedReadBooks);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-[#1313130D] rounded-lg mx-auto text-center">
        <h2 className="font-bold text-2xl p-4">Books</h2>
      </div>
      <div className="my-7">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {Array.isArray(readBooks) && readBooks.length > 0 ? (
              readBooks.map((readbook) => (
                // <SelectedBooks key={readbook.book_id} readbook={readbook} />
                <div key={readbook.book_id}>
                  <div className="flex justify-between flex-col lg:flex-row  my-6 gap-3 text-center lg:text-left border border-[#13131326] p-3 rounded-lg">
                    <div className="w-full lg:w-1/4 bg-gray-200  flex justify-center items-center  rounded-lg">
                      <img
                        src={readbook?.image}
                        className=" rounded-lg w-2/4 h-3/4 p-4 lg:p-0"
                        alt={readbook.book_name}
                        style={{ transform: "skewX(-10deg)" }}
                      />
                    </div>
                    <div className=" w-full   px-5 divide-y-2 ">
                      <div className="mb-3">
                        <h3 className="font-bold text-3xl">
                          {readbook?.book_name}
                        </h3>
                        <p className="font-medium text-[#131313CC] my-3">
                          By : {readbook?.author}
                        </p>
                      </div>

                      <div className="">
                        <div className="flex w-fit gap-x-10 items-center my-3 flex-wrap justify-center lg:justify-start ">
                          <div className="flex w-fit gap-10">
                            {readbook?.tags?.map((tag, index) => (
                              <p
                                key={index}
                                className="text-[#23BE0A] bg-[#23BE0A0D] w-fit p-3 rounded-full font-semibold"
                              >
                                {tag}{" "}
                              </p>
                            ))}
                          </div>
                          <div className="flex gap-2 items-center">
                            <CiLocationOn className="text-2xl" />
                            <p>
                              Year of Publishing: {readbook?.year_of_publishing}
                            </p>
                          </div>
                        </div>
                        <div className="text-[#13131399] flex gap-x-7 items-center flex-wrap justify-center lg:justify-start mb-3">
                          <div className="flex gap-2 text-lg font-medium items-center ">
                            <MdGroups2 />
                            <p>Publisher : {readbook?.publisher}</p>
                          </div>
                          <div className="flex gap-2 text-lg font-medium items-center">
                            <MdContactPage />
                            <p>Page : {readbook?.total_pages}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ny-3">
                        <div className="flex items-center gap-x-7 flex-wrap justify-center lg:justify-start">
                          <div className="my-3">
                            <p className="bg-[#328EFF26] rounded-full text-[#328EFF] w-fit p-2 font-medium">
                              Category : {readbook?.category}
                            </p>
                          </div>
                          <div className="my-3">
                            <p className="bg-[#FFAC3326] rounded-full text-[#FFAC33] w-fit p-2 font-medium">
                              Rating : {readbook?.rating}
                            </p>
                          </div>
                          <div className="my-3">
                            <Link
                              to={`/bookdetails/${readbook?.book_id}`}
                              state={readbook}
                            >
                              <button className="bg-[#23BE0A] rounded-full text-white w-fit p-2 font-medium">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No books found.</p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {/* <SelectedBooks /> */}

            {Array.isArray(wishlistBooks) && wishlistBooks.length > 0 ? (
              wishlistBooks.map((readbook) => (
                // <SelectedBooks key={readbook.book_id} readbook={readbook} />
                <div key={readbook.book_id}>
                  <div className="flex justify-between flex-col lg:flex-row  my-6 gap-3 text-center lg:text-left border border-[#13131326] p-3 rounded-lg">
                    <div className="w-full lg:w-1/4 bg-gray-200  flex justify-center items-center  rounded-lg">
                      <img
                        src={readbook?.image}
                        className=" rounded-lg w-2/4 h-3/4 p-4 lg:p-0"
                        alt={readbook.book_name}
                        style={{ transform: "skewX(-10deg)" }}
                      />
                    </div>
                    <div className=" w-full   px-5 divide-y-2 ">
                      <div className="mb-3">
                        <h3 className="font-bold text-3xl">
                          {readbook?.book_name}
                        </h3>
                        <p className="font-medium text-[#131313CC] my-3">
                          By : {readbook?.author}
                        </p>
                      </div>

                      <div className="">
                        <div className="flex w-fit gap-x-10 items-center my-3 flex-wrap justify-center lg:justify-start ">
                          <div className="flex w-fit gap-10">
                            {readbook?.tags?.map((tag, index) => (
                              <p
                                key={index}
                                className="text-[#23BE0A] bg-[#23BE0A0D] w-fit p-3 rounded-full font-semibold"
                              >
                                {tag}{" "}
                              </p>
                            ))}
                          </div>
                          <div className="flex gap-2 items-center">
                            <CiLocationOn className="text-2xl" />
                            <p>
                              Year of Publishing: {readbook?.year_of_publishing}
                            </p>
                          </div>
                        </div>
                        <div className="text-[#13131399] flex gap-x-7 items-center flex-wrap justify-center lg:justify-start mb-3">
                          <div className="flex gap-2 text-lg font-medium items-center ">
                            <MdGroups2 />
                            <p>Publisher : {readbook?.publisher}</p>
                          </div>
                          <div className="flex gap-2 text-lg font-medium items-center">
                            <MdContactPage />
                            <p>Page : {readbook?.total_pages}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ny-3">
                        <div className="flex items-center gap-x-7 flex-wrap justify-center lg:justify-start">
                          <div className="my-3">
                            <p className="bg-[#328EFF26] rounded-full text-[#328EFF] w-fit p-2 font-medium">
                              Category : {readbook?.category}
                            </p>
                          </div>
                          <div className="my-3">
                            <p className="bg-[#FFAC3326] rounded-full text-[#FFAC33] w-fit p-2 font-medium">
                              Rating : {readbook?.rating}
                            </p>
                          </div>
                          <div className="my-3">
                            <Link
                              to={`/bookdetails/${readbook?.book_id}`}
                              state={readbook}
                            >
                              <button className="bg-[#23BE0A] rounded-full text-white w-fit p-2 font-medium">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No books found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
