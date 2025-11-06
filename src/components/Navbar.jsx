import React from "react";
import { Link } from "react-router-dom";
import trava from "/logobis.svg";


export const Navbar = () => {
  return (
      <div className="pt-[30px] grid grid-cols-3 items-center pr-[20px] gap-[10px] font-sans">
        <div className="flex w-[100px]">
          <img 
            src={trava} 
            alt="Logo" 
            className="relative top-[-2px] left-[170px] h-[50px] w-[50px] rounded-[18px] shadow-[-5px_5px_15px_rgba(9,0,255,0.2)]" 
          />
        </div>
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="text-[20px] mr-[80px] text-[#6B6B6B] font-[550] no-underline hover:text-[#4C40F7] font-sans"
          >
            Home
          </Link>
          <Link 
            to="/" 
            className="text-[20px] mr-[80px] text-[#6B6B6B] font-[550] no-underline hover:text-[#4C40F7] font-sans"
          >
            Works
          </Link>
          <Link 
            to="/" 
            className="text-[20px] mr-[50px] text-[#6B6B6B] font-[550] no-underline hover:text-[#4C40F7] font-sans"
          >
            About
          </Link>
        </div>

        <div className="flex justify-end pr-[10px]">
          <button
            className="mr-[130px] h-[55px] w-[140px] flex items-center justify-center rounded-[12px] text-[#FFFFFF] font-[550] text-[13px] outline-none border-none shadow-[-5px_5px_15px_rgba(76,64,247,0.38)] hover:bg-[#FFFFFF] hover:scale-105 transition-all duration-200 tracking-[.10em]"
            style={{
              backgroundColor: "#4C40F7"
            }}
          >
            Contact us
          </button>
        </div>

      </div>
  );
};

export default Navbar;