'use client'
import React from "react";
import { Separator } from "../../components/ui/separator";

export default function AppPromotionSection() {
  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const exploreLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Blogs", id: "blogs" },
  ];

  const resourceLinks = [
    { label: "Whitepaper", id: "whitepaper" },
    { label: "Documentation", id: "documentation" },
    { label: "Faqs", id: "faq" },
    { label: "Terms & Conditions", id: "terms" },
  ];

  return (
    <div className="w-full px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px] pb-[86px] max-[1000px]:pb-10">
      <footer className="w-full bg-[#fbf6f0] rounded-[40px] max-[500px]:rounded-[25px] border border-solid border-[#000000] p-[74px] max-[1300px]:p-10 max-[500px]:p-10 relative">
        <div className="flex items-start justify-start max-[1020px]:flex-wrap gap-[61px] max-[1100px]:gap-10 mb-[79px] max-[500px]:mb-[30px]">
          {/* Logo and description */}
          <div className="flex flex-col w-[207px] items-start gap-5">
            <img className="w-20 h-20" alt="Logo" src="/logo.png" />
            <h3 className="self-stretch font-Poppins font-semibold text-[#000000] text-lg">
              NFT
            </h3>
            <p className="self-stretch font-Poppins font-normal text-[#000000] text-[13px] leading-6">
              Pioneering intelligent NFTs that blend AI, art, and utility in a
              decentralized future.
            </p>
          </div>

          <img src="/line-143.png" className="h-[183px] w-px max-[500px]:hidden" />

          {/* Explore links */}
          <div className="flex flex-col w-[119px] items-center gap-[15px]">
            <h4 className="w-[99px] font-Poppins font-semibold text-[#000000] text-lg text-center">
              EXPLORE
            </h4>
            <nav className="flex flex-col w-[88px] items-center gap-4">
              {exploreLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="w-fit font-Poppins text-[#000000] text-[15px] text-center tracking-[0.75px] hover:underline"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <img src="/line-143.png" className="h-[183px] w-px" />

          {/* Resource links */}
          <div className="flex flex-col w-[119px] items-center gap-[15px]">
            <h4 className="font-Poppins font-semibold text-[#000000] text-lg text-center">
              RESOURCES
            </h4>
            <nav className="flex flex-col w-[88px] items-center gap-4">
              {resourceLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="font-Poppins text-[#000000] text-[15px] text-center tracking-[0.75px] hover:underline whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <img src="/line-143.png" className="h-[183px] w-px max-[500px]:hidden max-[400px]:block" />

          {/* Newsletter section */}
          <div className="flex flex-col w-[301px] items-start gap-[33px]">
            <div className="flex flex-col w-[209px] items-start gap-[15px]">
              <h4 className="self-stretch font-semibold text-[#000000] text-lg font-Poppins">
                NUMBER
              </h4>
              <p className="self-stretch h-[42px] text-xs font-Poppins font-medium text-[#000000e6]">
                Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet
                euismod vel sem ac.
              </p>
            </div>

            <div className="self-stretch w-full h-[54px] relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full py-[12.5px] pl-5 placeholder:text-[#9b9191] text-[#9b9191] rounded-[14px] text-[14px] font-medium font-Poppnis bg-white outline-none border-none"
              />
              <img
                className="w-[135px] h-[36px] max-[1300px]:w-[110px] absolute top-[10px] right-[20px] cursor-pointer transform transition-transform duration-300 hover:scale-90"
                alt="Frame"
                src="/6692584-1.png"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-end gap-[59px] max-[767px]:gap-5">
          <div className="flex items-center justify-between w-full max-[767px]:flex-col gap-5">
            <p className="font-Poppins text-[#000000] text-lg max-[1000px]:text-base max-[767px]:text-sm text-justify leading-[22.4px] max-[500px]:text-center">
              Copyright © 2024 Botminds. All rights reserved.
            </p>
            <div className="w-[131px] h-[30.45px] flex items-center justify-between gap-5">
              <img src="/whatsapp.png" className="w-[30.45px] h-[30.45px] cursor-pointer hover:scale-90 transition-transform" alt="WhatsApp" />
              <img src="/instagram.png" className="w-[30.45px] h-[30.45px] cursor-pointer hover:scale-90 transition-transform" alt="Instagram" />
              <img src="/facebook.png" className="w-[30.45px] h-[30.45px] cursor-pointer hover:scale-90 transition-transform" alt="Facebook" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
