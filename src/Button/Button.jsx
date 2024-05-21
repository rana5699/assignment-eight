/* eslint-disable react/prop-types */
const Button = ({ text, bgstyle, hnadlebtn }) => {
  return (
    <div>
      <button
        onClick={hnadlebtn}
        className={`btn ${bgstyle} hover:outline-2 my-4 text-white font-bold mr-3 hover:bg-base-100 hover:text-[#23BE0A]`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
