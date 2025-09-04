'use client'
import React from "react";
import { Button } from "../../components/ui/button";

export default function FruitsAndVeggiesSection  ()  {
  const appStoreButtons = [
    {
      src: "/360_F_398059575_h3XJtdGMNhieUcDYwwkrSVt0PoVGAuai-removebg-preview 2.png",
      alt: "Download on App Store",
      className: "w-[266.48px] h-[97.87px] max-[767px]:w-[180px] max-[767px]:h-[60px]",
    },
    {
      src: "/360_F_398059575_h3XJtdGMNhieUcDYwwkrSVt0PoVGAuai-removebg-preview-1.png",
      alt: "Get it on Google Play",
      className: "w-[251.06px] h-[94.15px] ml-[-17.54px] max-[767px]:w-[180px] max-[767px]:h-[60px]",
    },
  ];



  return (
        <div className="w-full px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
       <section className="w-full h-[635px] max-[1000px]:h-[800px] max-[400px]:h-[760px] rounded-[40px] max-[500px]:rounded-[25px] overflow-hidden backgroundImage  relative">
      <div className="flex flex-col w-[616px] max-[1000px]:w-[100%] pr-[40px] items-start gap-2.5 absolute top-[72px] left-10 max-[1000px]:left-8 ">
        <h2 className="self-stretch   font-Poppins font-medium text-[#ffffff] text-3xl max-[1100px]:text-[24px] max-[767px]:text-[20px] tracking-[0] leading-[normal]">
          Comming soon....
        </h2>

        <h1 className="self-stretch  w-[616px] max-[1100px]:w-[480px] max-[1000px]:w-[100%] font-Poppins font-semibold text-[#ffffff] text-[57px] max-[1100px]:text-[44px] max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[40px] max-[1000px]:leading-[50px]  tracking-[0] leading-[73px]">
          Application Helps
          You To Order Grocery
          More Easiy
        </h1>
      </div>

      <div className="absolute   top-[377px] max-[1000px]:top-[250px] max-[365px]:top-[300px] left-12 max-[1000px]:left-8 font-Poppins font-medium text-[#ffffff] text-3xl max-[1100px]:text-[24px] max-[767px]:text-[20px] tracking-[0] leading-[normal]">
        Available on
      </div>

      <div className="inline-flex items-start max-[380px]:flex-col max-[365px]:items-center max-[1000px]:left-8  absolute top-[476px] max-[1000px]:top-[300px] max-[365px]:top-[350px] left-[42px]">
        {appStoreButtons.map((button, index) => (
          <img
            key={index}
            className={`relative ${button.className} cursor-pointer transform transition-transform duration-300 hover:scale-90`}
            alt={button.alt}
            src={button.src}
          />
        ))}
      </div>

         <img src="/phone-img.png" className="w-[500px] h-[594px] max-[1100px]:w-[400px]  max-[1100px]:h-[594px] max-[1100px]:top-[140px] max-[1000px]:top-[300px] max-[1100px]:right-[0px] max-[1000px]:right-[150px] max-[767px]:right-0  object-contain absolute right-[39px] top-[77px]" alt="" />

    </section>
        </div>
  );
};
