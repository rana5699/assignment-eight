// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addReadBooks, addwishlistBooks } from "../Utilities/localStortage";

const BookDetails = () => {
  const location = useLocation();
  const book = location.state;
  const {
    author,
    book_name,
    category,
    book_id,
    image,
    review,
    total_pages,
    rating,
    tags,
    publisher,
    year_of_publishing,
  } = book;

  if (!book) return <div>Loading...</div>;

  const handleReadAdd = () => {
    addReadBooks(book_id);
  };
  const handleWishlist = () => {
    addwishlistBooks(book_id);
  };

  return (
    <div className="flex justify-between flex-col lg:flex-row  my-6 gap-3">
      <div className="w-full lg:w-2/4 bg-gray-200  flex justify-center items-center  rounded-lg">
        <img
          src={image}
          className=" rounded-lg shadow-2xl w-2/4 h-3/4"
          alt={book_name}
          style={{ transform: "skewX(-10deg)" }}
        />
      </div>
      <div className=" w-full lg:w-2/4  px-5 divide-y-2 ">
        <div className="mb-3">
          <h3 className="font-bold text-3xl">{book_name}</h3>
          <p className="font-medium text-[#131313CC] my-3">By : {author}</p>
        </div>
        <div className=" py-3">
          <p className="text-[#131313CC] font-medium ">{category}</p>
        </div>
        <div className="">
          <p className="text-[#131313B3] font-medium my-3">
            <span className="font-extrabold text-black">Review</span> : {review}
          </p>
          <div className="flex items-center gap-4 my-3">
            <p className="text-black font-bold text-lg">Tag</p>
            {Array.isArray(tags) &&
              tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-[#23BE0A] bg-[#23BE0A0D] w-fit py-3 px-3 rounded-full font-semibold"
                >
                  # <span>{tag}</span>
                </p>
              ))}
          </div>
        </div>

        <div>
          <div className="w-10/12  gap-5 flex justify-between p-1 ">
            <div className="text-[#131313B3] my-2">
              <p className="my-1">Number of Pages : </p>
              <p className="my-1">Publisher : </p>
              <p className="my-1">Year of Publishing : </p>
              <p className="my-1">Rating : </p>
            </div>
            <div className="my-2 font-bold text-black ">
              <p className="my-1">{total_pages}</p>
              <p className="my-1">{publisher}</p>
              <p className="my-1">{year_of_publishing}</p>
              <p className="my-1">{rating}</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <button
                onClick={handleReadAdd}
                className="btn bg-[#23BE0A] hover:bg-[#23BE0A] my-4 text-white font-bold mr-3"
              >
                Read
              </button>
            </div>
            <div>
              <button
                onClick={handleWishlist}
                className="btn bg-[#23BE0A] hover:bg-[#23BE0A] my-4 text-white font-bold mr-3"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
