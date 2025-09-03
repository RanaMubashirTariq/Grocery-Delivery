import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function DeliveryInfoSection  ()  {
  const deliveryCards = [
    {
      title: "#Stayhome & Shop Securly With",
      subtitle: "Free Door Delivery!",
      image: "/happy-customer-receiving-delivery-1.png",
      imageAlt: "Happy customer",
      imageClasses: "w-[380px] h-[236px] max-[1100px]:h-[200px] max-[1100px]:mt-[60px] mt-[30px] ",
      decorativeIcon: "/group-1707486731.png",
      decorativeClasses:
        "absolute w-[60px] h-[60px] max-[1300px]:w-[45px] max-[1300px]:h-[45px] bottom-[42px] right-[59px] z-10 cursor-pointer transform transition-transform duration-300 hover:scale-90",
    },
    {
      title: "We Delivery Any Where you",
      subtitle: "Want in Your's City",
      image: "/3d-render-delivery-van-with-geolocation-icon 1.png",
      imageAlt: "Element render delivery",
      imageClasses: "w-[351px] h-[242px] max-[1100px]:h-[200px] max-[1100px]:mt-[40px]  ml-[25px] max-[1300px]:ml-[0px] object-contain",
      decorativeIcon: "/group-1707486731.png",
      decorativeClasses:
        "absolute w-[60px] h-[60px] max-[1300px]:w-[45px] max-[1300px]:h-[45px] bottom-[42px] right-[59px] z-10 cursor-pointer transform transition-transform duration-300 hover:scale-90",
    },
  ];

  return (
    <section className="flex items-center max-[1000px]:flex-col gap-[52px] w-full pt-[95px] px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px]">
      {deliveryCards.map((card, index) => (
        <Card
          key={index}
          className="relative w-full max-w-[604px] max-[1000px]:max-w-[100%] h-[409px] bg-[#faf6f1] rounded-[40px] overflow-hidden border border-solid border-[#9b9191]"
        >
          <CardContent className="relative w-full h-full p-0">
            <div className="absolute top-[49px] left-10 max-[1300px]:left-5  max-[1300px]:pr-[41px] max-[1000px]:pr-[0px] max-[435px]:pr-[30px] w-full max-w-[523px]  font-Poppins font-medium text-[#000000] text-[31px] max-[1000px]:text-[26px] max-[500px]:text-[22px] tracking-[0] leading-[normal]">
              {card.title}
              <br />
              {card.subtitle} 
            </div>

            <img
              className={`absolute top-[155px] left-10 max-[1300px]:left-5 ${card.imageClasses}`}
              alt={card.imageAlt}
              src={card.image}
            />

            <img
              className={card.decorativeClasses}
              alt="Group"
              src={card.decorativeIcon}
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
