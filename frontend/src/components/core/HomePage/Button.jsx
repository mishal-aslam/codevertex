import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black " : "bg-[#2F343A]"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>


{/* <div className="flex min-h-screen flex-col items-center justify-center bg-black">
  <button className="relative overflow-hidden rounded-lg px-20 py-6">
    <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">Button</span>

    <span className="absolute inset-0 z-0 scale-x-[2.8] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"   />
  </button>
</div> */}


    </Link>
  );
};

export default Button;   


