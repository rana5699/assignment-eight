import { MdContactPage, MdGroups2 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const SelectedBooks = () => {
  // console.log("readBookSelect:", readBook);
  return (
    <div>
      <div className="flex justify-between flex-col lg:flex-row  my-6 gap-3 text-center lg:text-left border border-[#13131326] p-3 rounded-lg">
        <div className="w-full lg:w-1/4 bg-gray-200  flex justify-center items-center  rounded-lg">
          <img
            src=""
            className=" rounded-lg w-2/4 h-3/4 p-4 lg:p-0"
            alt=""
            style={{ transform: "skewX(-10deg)" }}
          />
        </div>
        <div className=" w-full   px-5 divide-y-2 ">
          <div className="mb-3">
            <h3 className="font-bold text-3xl">The Catcher in the Rye</h3>
            <p className="font-medium text-[#131313CC] my-3">
              By : Awlad Hossain
            </p>
          </div>

          <div className="">
            <div className="flex w-fit gap-x-10 items-center my-3 flex-wrap justify-center lg:justify-start ">
              <p className="text-lg text-black font-bold">Tags</p>
              <p className="text-[#23BE0A] bg-[#23BE0A0D] w-fit p-3 rounded-full font-semibold">
                # tags
              </p>
              <p className="text-[#23BE0A] bg-[#23BE0A0D] w-fit p-3 rounded-full font-semibold">
                # tags
              </p>
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-2xl" />
                <p>Year of Publishing: 1924</p>
              </div>
            </div>
            <div className="text-[#13131399] flex gap-x-7 items-center flex-wrap justify-center lg:justify-start mb-3">
              <div className="flex gap-2 text-lg font-medium items-center ">
                <MdGroups2 />
                <p>Publisher: Scribner</p>
              </div>
              <div className="flex gap-2 text-lg font-medium items-center">
                <MdContactPage />
                <p>Page : 192</p>
              </div>
            </div>
          </div>
          <div className="ny-3">
            <div className="flex items-center gap-x-7 flex-wrap justify-center lg:justify-start">
              <div className="my-3">
                <p className="bg-[#328EFF26] rounded-full text-[#328EFF] w-fit p-2 font-medium">
                  Category: Classic
                </p>
              </div>
              <div className="my-3">
                <p className="bg-[#FFAC3326] rounded-full text-[#FFAC33] w-fit p-2 font-medium">
                  Category: Classic
                </p>
              </div>
              <div className="my-3">
                <p className="bg-[#23BE0A] rounded-full text-white w-fit p-2 font-medium">
                  View Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedBooks;
