import React from "react";
import { Animated } from "react-animated-css";
import plants from "/plants.png";
import line from "/line.svg"; // импорт линии
import { ArrowRight } from "lucide-react";

export default function Baner() {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
      <div className="relative flex justify-center mt-[50px]">
        
        {/* Line SVG на фоне */}
        <img
          src={line}
          alt="Line Background"
          style={{
            position: "absolute",
            top: "-80px", // двигаем вверх, можно менять
            left: "50%",
            transform: "translateX(-50%)",
            width: "1510px",
            height: "auto",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="relative flex w-[1300px] h-[450px] rounded-[25px] z-10">
          <div>
            <p className="text-[#111029] font-[600] pl-[65px] text-[50px] leading-[62px] max-w-[550px] mb-[20px] break-words">
              Make your business{" "}
              <span className="text-[#FF6800]">more powerful</span> with us
            </p>
            <p className="text-[#6B6B6B] pl-[65px] text-[18px] leading-[32px] w-[365px] h-[96px] mt-[5px] pb-[10px]">
              We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.
            </p>
            <div className="flex justify-end pr-[350px]">
              <button className="h-[55px] w-[180px] flex items-center gap-[8px] justify-center rounded-[12px] text-[#FFFFFF] font-[600] text-[14px] outline-none border-none bg-[#4C40F7] shadow-[10px_10px_20px_rgba(76,64,247,0.38)] hover:scale-105 transition-all duration-200 tracking-[.10em] gap-2">
                Get Started
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <img
            src={plants}
            alt="Plants"
            className="h-[507px] w-[736px] relative z-10"
          />
        </div>
      </div>
    </Animated>
  );
}