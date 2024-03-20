import { MdOutlineCardTravel } from "react-icons/md";
import { FaPlane } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="text-center bg-[#f4a226] font-[Monoton]  p-10">
      <h1 className="font-normal text-9xl tracking-tighter uppercase flex items-center justify-center gap-5">
        <MdOutlineCardTravel />
        <span>Far Away</span>
        <FaPlane />
      </h1>
    </div>
  );
};

export default Logo;
