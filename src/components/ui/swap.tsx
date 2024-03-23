"use client";
import { GoArrowDown } from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";

interface SwapProps {
  hrefLink: string;
}
const Swap = ({ hrefLink }: SwapProps) => {
  return (
    <div>
      <ScrollLink to={hrefLink} smooth={true} duration={1000} offset={-95}>
        <button className="border animate-bounce border-white w-12 h-12 rounded-full text-center shadow-xl  cursor-pointer text-white duration-700 transform hover:bg-white hover:text-black hover:scale-105 transition ease-in-out mt-10">
          <GoArrowDown className="m-[31%]"></GoArrowDown>
        </button>
      </ScrollLink>
    </div>
  );
};

export default Swap;
