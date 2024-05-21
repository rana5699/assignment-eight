import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Book = ({ book }) => {
  const { author, book_name, book_id, image, rating, tags, publisher } = book;

  return (
    <div>
      <Link to={`/bookdetails/${book_id}`} state={book}>
        <div className="card my-5 bg-gray-100 shadow-xl  ">
          <figure>
            <img
              src={image}
              alt={book_name}
              className=" py-10 rounded-3xl rotate-96"
              style={{ transform: "skewX(20deg)" }}
            />
          </figure>
          <div className="card-body divide-y-2 divide-dashed">
            <div>
              <div className="flex w-fit gap-10">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-[#23BE0A] bg-[#23BE0A0D] w-fit p-3 rounded-full font-semibold"
                  >
                    {tag}{" "}
                  </p>
                ))}
              </div>
              <h2 className="card-title">{book_name}</h2>
              <p className="font-medium text-[#131313CC] my-3">By : {author}</p>
            </div>
            <div className=" font-medium ">
              <div className="mt-3 font-medium flex items-center">
                <p>{publisher}</p>
                <div className="flex items-center gap-3">
                  <p>{rating}</p>
                  <CiStar className="text-2xl font-semibold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
