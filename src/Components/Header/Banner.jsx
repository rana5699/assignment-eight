import { Link } from "react-router-dom";
import Button from "../../Button/Button";

const Banner = () => {
  return (
    <div>
      <div className="hero 96 bg-gray-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse px-5 py-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            style={{ transform: "skewX(-20deg)" }}
          />
          <div className="">
            <h1 className="text-5xl font-bold">
              Dive into the World of <br /> Words with Us
              <br />
            </h1>

            <Link to="/listedtbooks">
              {" "}
              <Button bgstyle=" bg-[#23BE0A] " text="  View The List" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
