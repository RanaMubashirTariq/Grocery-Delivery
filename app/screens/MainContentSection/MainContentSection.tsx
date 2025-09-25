import React from "react";

export default function MainContentSection  () {
  return (
         <div className="w-full px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:pb-[40px] pb-[107px]">
                  <section className="w-full bg-[#faf6f1] rounded-[40px] max-[500px]:rounded-[25px] overflow-hidden border border-solid border-[#9b9191] relative">
      <div className="flex flex-col max-[1000px]:items-center lg:flex-row items-start justify-between px-[60px] max-[767px]:px-5 min-h-[648px]">
        <div className="flex flex-col items-start gap-[23px] max-[500px]:gap-4 max-w-[663px] z-0 relative pt-[107px] max-[1000px]:pt-10">
          <h1 className="font-Poppins font-medium text-[#000000f2] text-[75px] max-[1100px]:text-[52px] max-[1100px]:leading-[60px] max-[1000px]:text-[36px] max-[1000px]:leading-[45px] max-[767px]:text-[28px] max-[767px]:leading-[35px] tracking-[0] leading-[89px]">
            Freee Home Delivery in 24th
          </h1>

          <p className="w-full max-w-[484px] text-lg max-[1100px]:text-base font-Poppins font-medium text-[#000000e6] tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet
            euismod vel sem ac.
          </p>

          <img
            className="flex-[0_0_auto] cursor-pointer transform transition-transform duration-300 hover:scale-90"
            alt="Frame"
            src="/frame-2147223420-1.png"
          />
        </div>

        <div className="relative flex-shrink-0">
          <img
            className="w-[577px] max-[1300px]:w-[500px] max-[1100px]:w-[400px] max-[1000px]:h-[500px] max-[767px]:h-[400px] max-[1100px]:object-contain h-[700px] object-cover"
            alt="Happy delivery man"
            src="/happy-delivery-man-with-backpack-scooter-yellow-background-1.png"
          />
        </div>

        <img
          className="absolute w-[456px] h-[223px] max-[1000px]:w-[350px] max-[767px]:w-[250px] max-[767px]:h-[180px] max-[767px]:-bottom-[60px]   -bottom-[41px] z-11 left-[89px] max-[1100px]:left-0 object-cover"
          alt="Fruits still life"
          src="/fruits-still-life-background-1-1.png"
        />
      </div>
    </section>
         </div>
  );
};
