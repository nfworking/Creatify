import { Braces } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-black tracking-wider text-white rounded-lg justify-center mt-10 ">
      <div className="flex justify-center gap-6">
        <Braces className="hover:scale-150 transition-all duration-500" />
        <a
          className=" hover:text-red-700 transition-all duration-500 hover:scale-125 "
          href="#"
        >
          Home
        </a>
        <a
          className="ml-3 hover:text-red-700 transition-all duration-500 hover:scale-125"
          href="#"
        >
          About
        </a>
        <a
          className="ml-3 hover:text-red-700 transition-all duration-500 hover:scale-125"
          href="#"
        >
          Our Team
        </a>
        <a
          className="ml-3 hover:text-red-700 transition-all duration-500 hover:scale-125"
          href="#"
        >
          Downloads
        </a>
      </div>
    </div>
  );
};

export default Navbar;
