import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function NewProductsSection  ()  {
  const productCategories = [
    {
      title: "Bread & Pastries",
      backgroundImage: "url(./frame-2147223476.jpg)",
    },
    {
      title: "Fruits & Veggies",
      backgroundImage: "url(./frame-2147223484.jpg)",
    },
    {
      title: "Meat & Dairy",
      backgroundImage: "url(./frame-2147223486.jpg)",
    },
    {
      title: "Snacks & Foods",
      backgroundImage: "url(./frame-2147223485.jpg)",
    },
  ];

  return (
    <section className="flex items-center max-[1020px]:flex-wrap max-[1020px]:justify-center gap-[29px] w-full px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
      {productCategories.map((category, index) => (
        <Card
          key={index}
          className="relative w-[293px] h-[280px] max-[767px]:w-[100%] max-[500px]:h-[200px] rounded-[20px]  overflow-hidden border border-solid border-black cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            background: `${category.backgroundImage} 50% 50% / cover`,
          }}
        >
          <CardContent className="p-0 h-full flex items-end justify-center pb-[30px]">
            <h3 className="font-['Roboto'] font-semibold text-white text-[25px] max-[1000px]:text-[22px] max-[500px]:text-[18px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              {category.title}
            </h3>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
