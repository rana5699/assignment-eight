import { Link, NavLink } from "react-router-dom";

import "../../App.css";
import Button from "../../Button/Button";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">Home</NavLink>

              <NavLink to="/listedtbooks">Bokks Listed </NavLink>

              <NavLink to="/readpages">Page Readed </NavLink>
            </nav>
          </div>
          <Link to="/">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-green-600 animate-bounce ">
              BooksLover
            </h1>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center justify-center gap-5">
            <NavLink to="/">Home </NavLink>

            <NavLink to="/listedtbooks">Books Listed </NavLink>

            <NavLink to="/readpages">Pages to Read </NavLink>
          </nav>
        </div>
        <div className="navbar-end">
          <div>
            <Button bgstyle=" bg-[#23BE0A]" text="Sign In" />
          </div>
          <div>
            <Button bgstyle=" bg-[#59C6D2] " text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
