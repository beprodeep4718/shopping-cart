import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ size }) => {
  return (
    <nav className="py-8">
      <div className="px-10 mx-auto max-w-screen-2xl flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">LOGO</h1>
        </div>
        <div className="flex">
          <span className="text-4xl">
            <IoCartOutline />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
