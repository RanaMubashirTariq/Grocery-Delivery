"use client";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";


export default function NavbarSection(){





    const navigationItems = [
        { label: "About Us", href: "#about" },
        { label: "FAQ", href: "#faq" },
        { label: "Help", href: "#help" },
        { label: "Desk", href: "#desk" },
        { label: "Contact Us", href: "#contact" },
      ];
      
      const companyDropdownItems = [
        { label: "Foods & Veggies", id: "foods-veggies" },
        { label: "Dairy & Eggs", id: "dairy-eggs" },
        { label: "Bakery", id: "bakery" },
        { label: "Beverages", id: "beverages" },
        { label: "Snacks", id: "snacks" },
        { label: "Meat & Seafood", id: "meat-seafood" },
        { label: "Household Essentials", id: "household-essentials" },
      ];
      
      const forYouDropdownItems = [
        { label: "Coupons", id: "coupons" },
        { label: "Deals", id: "deals" },
        { label: "Promotions", id: "promotions" },
      ];

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isCompanyOpen, setIsCompanyOpen] = useState(false);
      const [companySelected, setCompanySelected] = useState("Foods & Veggies");
      const [isForYouOpen, setIsForYouOpen] = useState(false);
      const [forYouSelected, setForYouSelected] = useState("Coupons");





      const CustomDropdown = ({
        options,
        selected,
        setSelected,
      }: {
        options: { label: string; id: string }[];
        selected: string;
        setSelected: (value: string) => void;
      }) => {
        const [open, setOpen] = useState(false);
      
        const handleSelect = (option: { label: string; id: string }) => {
          setSelected(option.label);
          setOpen(false);
      
          // Scroll to the section
          if (option.id) {
            const element = document.getElementById(option.id);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        };
      
        return (
          <div className="relative w-full max-w-[81px] z-20">
            <div
              onClick={() => setOpen(!open)}
              className="z-10 bg-transparent font-['Inter'] font-medium text-white text-[18px] leading-[120%] border-none rounded-[10px] py-1 cursor-pointer flex justify-between items-center gap-[10px]"
            >
              <span>{selected}</span>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {open && (
              <ul className="absolute top-full mt-1 w-full bg-[#09090f] rounded-[10px] shadow z-40">
                {options.map((option) => (
                  <li
                    key={option.label}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-white cursor-pointer hover:bg-white/10 font-['Inter'] font-medium text-[16px] leading-[120%]"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      };



    return(
         <div className="w-full relative">
        <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-sm bg-white flex w-full  px-[90px] items-center justify-between pt-10 pb-[6px] px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px] ">
                                    <img className="w-16 h-16 max-[767px]:w-10 max-[767px]:h-10" alt="Logo" src="/logo.png" />

                                    <div className="flex items-center gap-[92px] max-[1100px]:hidden">
                                    <nav className="flex items-center gap-[30.94px] px-2.5 py-[5px] rounded-lg">
                                    {navigationItems.map((item, index) => (
  <React.Fragment key={item.label}>
    <button
  onClick={() => {
    if (item.href !== "#") {
      const section = document.querySelector(item.href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }}
  className="font-Poppins font-medium text-[#000000] text-[15.7px] hover:text-[#019e54] transition-colors cursor-pointer"
>
  {item.label}
</button>

    {index < navigationItems.length - 1 && (
      <div className="h-6 w-px bg-[linear-gradient(270deg,_rgba(155,145,145,0)_0%,_#9B9191_50%,_rgba(155,145,145,0)_100%)]" />
    )}
  </React.Fragment>
))}
                                    </nav>

                                    <div className="flex w-[247px] items-center justify-between">
                                            <button>
                                                <img src="/account-btn.png" className="w-[151px] h-[36px] cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
                                            </button>

                                        <div className="relative">
                                        <img
                                            className="w-[45px] h-[45px]"
                                            alt="Shopping cart"
                                            src="/fi_535234.png"
                                        />
                                        <Badge className="absolute -top-1 -right-1 w-[17px] h-[17px] bg-[#000000] text-[#ffffff] text-[10.7px] font-medium rounded-full flex items-center justify-center p-0">
                                            1
                                        </Badge>
                                        </div>
                                    </div>
                                    </div>

                                    {/* Mobile hamburger (visible below 1100px) */}
                                    <button
                                      aria-label="Toggle menu"
                                      className="hidden max-[1100px]:flex items-center justify-center flex-col w-10 h-10 rounded-md border border-[#e5e7eb]"
                                      onClick={() => setIsMenuOpen((v) => !v)}
                                    >
                                      <span className="block w-5 h-px bg-black my-1" />
                                      <span className="block w-5 h-px bg-black my-1" />
                                      <span className="block w-5 h-px bg-black my-1" />
                                    </button>
  </header>

  {/* Mobile menu panel */}
  {isMenuOpen && (
    <div className="max-[1100px]:block hidden px-[50px] pb-4 z-50 pt-[100px]">
      <nav className="flex flex-col gap-4 py-3">
      {navigationItems.map((item) => (
  <button
    key={item.label}
    onClick={() => {
      const section = document.querySelector(item.href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }}
    className="font-Poppins font-medium text-[#000000] text-[16px] hover:text-[#019e54]"
  >
    {item.label}
  </button>
))}

      </nav>
      <div className="flex items-center justify-between">
      <button>
                                                <img src="/account-btn.png" className="w-[151px] h-[36px] cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="" />
                                            </button>
        <div className="relative ml-4">
          <img className="w-[40px] h-[40px]" alt="Shopping cart" src="/fi_535234.png" />
          <Badge className="absolute -top-1 -right-1 w-[17px] h-[17px] bg-[#000000] text-[#ffffff] text-[10.7px] font-medium rounded-full flex items-center justify-center p-0">
            1
          </Badge>
        </div>
      </div>
    </div>
  )}

  <Separator className="w-full h-px bg-[#9b9191]/39" />

  {/* Search and Controls Section */}
  <section className="flex items-center justify-between max-[1000px]:flex-col max-[1000px]:items-start gap-[86px] max-[1000px]:gap-[20px]  pt-[157px] pb-[71px] max-[1000px]:pb-10 px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:pt-[130px]  w-full">
    <div className="flex items-center gap-[30px] max-[1100px]:gap-5 w-[379.62px] max-[500px]:w-full">
      <div className="flex flex-col w-[196px] items-start gap-1.5">
        <div className="font-Poppins font-medium text-[#adb0c2] text-[18.7px] max-[767px]:text-[15px] tracking-[0] leading-[100%]">
          Company:
        </div>
        <div
          className="relative w-full"
          tabIndex={0}
          onBlur={(e) => {
            const next = (e as unknown as React.FocusEvent<HTMLDivElement>).relatedTarget as Node | null;
            if (!e.currentTarget.contains(next)) {
              setIsCompanyOpen(false);
            }
          }}
        >
          <Button
            variant="ghost"
            className="flex items-center gap-[7px] p-0 h-auto hover:bg-transparent"
            onClick={() => setIsCompanyOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={isCompanyOpen}
          >
            <span className="font-Poppins font-semibold text-[#019e54] text-[19px] max-[767px]:text-[16px] tracking-[0] leading-[100%]">
              {companySelected}
            </span>
            <img
              className={`w-6 h-6 max-[767px]:h-[20px] max-[767px]:w-[20px] transition-transform  cursor-pointer ${isCompanyOpen ? "rotate-90" : ""}`}
              alt="Chevron left"
              src="/chevron-left-green.png"
            />
          </Button>
          {isCompanyOpen && (
            <ul
              className="absolute z-20 mt-2 w-[196px] bg-white border border-[#e5e7eb] rounded-[10px] shadow"
              role="listbox"
            >
              {companyDropdownItems.map((option) => (
                <li
                  key={option.id}
                  role="option"
                  aria-selected={companySelected === option.label}
                  className="px-4 py-2 cursor-pointer hover:bg-[#f3f4f6] font-Poppins text-[16px] text-[#111827]"
                  onMouseDown={() => {
                    setCompanySelected(option.label);
                    setIsCompanyOpen(false);
                    if (option.id) {
                      const element = document.getElementById(option.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Separator
        orientation="vertical"
        className="w-[1.62px] h-[69.01px]  bg-[linear-gradient(270deg,_rgba(155,145,145,0)_0%,_#9B9191_50%,_rgba(155,145,145,0)_100%)]"
      />

      <div className="flex flex-col items-start gap-1.5">
        <div className="font-Poppins font-medium text-[#adb0c2] text-[18.7px] max-[767px]:text-[15px] tracking-[0] leading-[100%]">
          For You:
        </div>
        <div
          className="relative w-full"
          tabIndex={0}
          onBlur={(e) => {
            const next = (e as unknown as React.FocusEvent<HTMLDivElement>).relatedTarget as Node | null;
            if (!e.currentTarget.contains(next)) {
              setIsForYouOpen(false);
            }
          }}
        >
          <Button
            variant="ghost"
            className="flex items-center gap-[7px] p-0 h-auto hover:bg-transparent"
            onClick={() => setIsForYouOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={isForYouOpen}
          >
            <span className="font-Poppins font-semibold text-[#019e54] text-[19px] max-[767px]:text-[16px] tracking-[0] leading-[100%]">
              {forYouSelected}
            </span>
            <img
              className={`w-6 h-6 max-[767px]:h-[20px] max-[767px]:w-[20px] transition-transform cursor-pointer ${isForYouOpen ? "rotate-90" : ""}`}
              alt="Chevron left"
              src="/chevron-left-green.png"
            />
          </Button>
          {isForYouOpen && (
            <ul
              className="absolute z-20 mt-2 w-[196px] bg-white border border-[#e5e7eb] rounded-[10px] shadow"
              role="listbox"
            >
              {forYouDropdownItems.map((option) => (
                <li
                  key={option.id}
                  role="option"
                  aria-selected={forYouSelected === option.label}
                  className="px-4 py-2 cursor-pointer hover:bg-[#f3f4f6] font-Poppins text-[16px] text-[#111827]"
                  onMouseDown={() => {
                    setForYouSelected(option.label);
                    setIsForYouOpen(false);
                    if (option.id) {
                      const element = document.getElementById(option.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>

    <div className="flex items-center gap-12 max-[1100px]:gap-5 max-[420px]:gap-[10px] w-full max-w-[794px]">
      <div className="relative w-full max-w-[603px]  h-[69px] max-[767px]:h-10">
        <Input
          placeholder="Search 10,000+ Groceries..."
          className="w-full h-full bg-[#ffffff] rounded-[14px] border border-[#9b91913b] px-5 max-[420px]:px-3 py-5 max-[767px]:py-3 font-Poppins font-medium text-[#bab9bc] text-[19px] max-[767px]:text-[14px] tracking-[0] leading-[100%]"
        />
         <img
          className="absolute right-5 max-[420px]:right-3  cursor-pointer  top-1/2 transform -translate-y-1/2 w-[23px] h-[23px] max-[767px]:h-[18px] max-[767px]:w-[18px]"
          alt="Search"
          src="/fi_54481.png"
        />

      </div>

      <div className="flex items-end gap-1.5 w-[143px] max-[1300px]:w-[200px] max-[500px]:w-[160px] max-[420px]:w-[110px] max-[365px]:hidden">
        <div className="relative">
          <img
            className="w-[47px] h-[47px] max-[767px]:h-[30px] max-[767px]:w-[30px]"
            alt="Wishlist"
            src="/fi_4906355.png"
          />
          <Badge className="absolute -top-1 -right-1 w-[17px] h-[17px] max-[767px]:w-[13px] max-[767px]:h-[13px] bg-[#000000] text-[#ffffff] max-[767px]:text-[7px] text-[10.7px] font-medium rounded-full flex items-center justify-center p-0">
            7
          </Badge>
        </div>

        <div className="flex items-center gap-1.5 max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-0">
          <span className="font-Poppins font-semibold text-[#000000] max-[767px]:text-[8px] text-[11.7px] tracking-[0] leading-[100%] whitespace-nowrap">
            PKR
          </span>
          <span className="font-Poppins font-semibold text-[#000000] max-[767px]:text-[17px] text-[22.7px] leading-[100%] whitespace-nowrap tracking-[0]">
            3, 129
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* Background Elements */}
  <div className="absolute w-[1643px] h-[943px] top-[307px]  left-[-143px] max-[1300px]:left-[-323px] max-[1100px]:left-[-580px] max-[1000px]:left-[-680px] pointer-events-none">
    <div className="top-[398px] left-[1343px] absolute w-[300px] h-[300px] bg-[#faf6f1] rounded-[150px] blur-[50px]" />
    <div className="top-[370px] left-0 absolute w-[300px] h-[300px] bg-[#faf6f1] rounded-[150px] blur-[50px]" />
    <img
      className="absolute w-[363px] h-[304px] max-[1100px]:w-[300px] max-[1100px]:h-[250px] max-[1100px]:top-[560px] max-[1000px]:top-[650px] top-[500px] right-[0px] object-cover"
      alt="Fruits still life"
      src="/fruits-still-life-background-1-1.png"
    />
  </div>

  <div className="absolute w-[1626px] h-[493px] top-[1261px] left-[-143px] pointer-events-none">
    <div className="top-[165px] left-[1326px] absolute w-[300px] h-[300px] bg-[#faf6f1] rounded-[150px] blur-[50px]" />
    <div className="top-0 left-0 absolute w-[300px] h-[300px] bg-[#faf6f1] rounded-[150px] blur-[50px]" />
  </div>
         </div>
    )
}