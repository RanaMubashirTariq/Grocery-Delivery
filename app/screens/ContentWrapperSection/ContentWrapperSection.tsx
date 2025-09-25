import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function ContentWrapperSection  () {
  const serviceCards = [
    {
      image: "/3d-shopping-paper-bag-with-fresh-products-1.png",
      alt: "Element shopping paper",
      title: "Groceries\nDelivery",
      imageWidth: "w-[93px]",
      imageHeight: "h-[100px]",
      leftPosition: "left-6",
    },
    {
      image:
        "/vector-fast-food-set-realistic-hamburger-classic-burger-potatoes.png",
      alt: "Vector fast food set",
      title: "Fast Food\nDelivery",
      imageWidth: "w-[88px]",
      imageHeight: "h-[100px]",
      leftPosition: "left-[27px]",
    },
    {
      image:
        "/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present.png",
      alt: "Purple open gift box",
      title: "Discount\nVoucher",
      imageWidth: "w-[100px]",
      imageHeight: "h-[102px]",
      leftPosition: "left-[26px]",
    },
    {
      image:
        "/purple-gift-box-surprise-minimal-present-birthday-party-celebrat.png",
      alt: "Purple gift box",
      title: "Something\nFor You",
      imageWidth: "w-[90px]",
      imageHeight: "h-[71px]",
      leftPosition: "left-[17px]",
    },
  ];

  return (
    <div className="flex items-center justify-between gap-[15px] w-full px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[350px]:px-[35px] max-[330px]:px-[25px] max-[1400px]:flex-wrap">
      {serviceCards.map((card, index) => (
        <Card
          key={index}
          className="w-[304px] max-[1400px]:w-[48%]  max-[767px]:w-full flex-[0_0_auto] h-[188px] bg-white rounded-[15px] overflow-hidden border border-solid border-[#9b9191] z-11"
        >
          <CardContent className="p-0">
            <div
              className={`inline-flex items-center gap-[17px] relative top-11 ${card.leftPosition} max-[365px]:left-[10px]`}
            >
              <img
                className={`relative ${card.imageWidth} ${card.imageHeight} max-[500px]:w-[70px] max-[500px]:h-[70px]`}
                alt={card.alt}
                src={card.image}
              />

              <img
                className="relative w-[1.9px] h-[100.01px] mb-[-0.01px] object-cover"
                alt="Line"
                src="/line-143.png"
              />

              <div className="relative  font-Poppins font-medium text-[#000000] text-[26px] max-[1000px]:text-[23px] max-[500px]:text-[19px] tracking-[0] leading-[normal] max-[350px]:whitespace-wrap">
                {card.title}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
