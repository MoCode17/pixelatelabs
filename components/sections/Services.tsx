import React from "react";
import logo from "@/public/images/icon.svg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="relative grid grid-cols-2 px-[40px] py-[60px] justify-center items-center">
      <div className="flex justify-self-start items-center ">
        <Image src={logo} alt="Logo" className="w-6 h-6 mr-4" />
        <h3 className="text-lg text-electric font-bold">OUR SERVICES</h3>
      </div>
      <div>
        <h2 className="text-[64px] font-bold font-['Avantt_TRIAL'] text-black tracking-[-0.02%] leading-[1.04]">
          Everything You Need To Succeed Online
        </h2>
      </div>
      <div>
        <div>
          <h3>Web Design</h3>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Services;
