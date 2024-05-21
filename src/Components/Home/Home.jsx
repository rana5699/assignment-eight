import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
