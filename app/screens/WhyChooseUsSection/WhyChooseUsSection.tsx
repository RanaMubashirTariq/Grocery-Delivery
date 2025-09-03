import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Safe & Contactless\nHome Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet euismod vel sem ac.",
      buttonIcon: "/6692584-1.png",
      image: "/frame-2147223420.png",
    },
    {
      title: "Delivery in 24h\nAt Your Step",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet euismod vel sem ac.",
      buttonIcon: "/6692584-1.png",
      image: "/frame-2147223421.png",
    },
    {
      title: "Corona Free\nDelivery",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet euismod vel sem ac.",
      buttonIcon: "/6692584-1.png",
      image: "/frame-2147223420-3.png",
    },
    {
      title: "Safe & Secure\nPayment",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quis vitae vitae amet euismod vel sem ac.",
      buttonIcon: "/6692584-1.png",
      image: "/frame-2147223420-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-10 max-[767px]:gap-5 relative pt-[71px] pr-[74px] pb-[110px] pl-[104px] max-[1300px]:px-[90px] max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:py-10">
      <h2 className="relative self-stretch font-Poppins font-medium text-[#000000] text-[65px] tracking-[0] leading-[106px] max-[1300px]:text-[50px]  max-[1300px]:leading-[80px] max-[1000px]:text-[36px] max-[1000px]:leading-[50px] max-[767px]:text-[28px] max-[767px]:leading-[40px]">
        Why Choose Us
      </h2>

      <div className="flex flex-wrap gap-[31px] relative self-stretch w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className=" relative w-[292px] h-[451px] bg-[#ffffff] rounded-[20px] overflow-hidden border border-solid border-[#9b9191] max-[1300px]:w-[48%] max-[1100px]:w-[45%] max-[768px]:w-full"
          >
            <CardContent className="pr-[24px] h-full relative">
              <img
                className="absolute w-[200px] h-[200px] top-[15px] left-[50px] object-cover max-[1300px]:left-1/2 max-[1300px]:-translate-x-1/2"
                alt="Feature illustration"
                src={feature.image}
              />

              <div className="absolute top-[255px] left-6 inline-flex flex-col items-center gap-3.5 max-[1300px]:left-1/2 max-[1300px]:-translate-x-1/2">
                <h3 className="font-Poppins font-semibold text-[#000000] text-xl max-[767px]:text-lg text-center tracking-[0] leading-7 whitespace-pre-line">
                  {feature.title}
                </h3>

                <p className="w-[244px] max-[1100px]:w-[300px] max-[1000px]:w-[230px] font-Poppins font-medium text-[#000000e6] text-[10px] text-center tracking-[0] leading-[normal] max-[1300px]:w-[80%]">
                  {feature.description}
                </p>

                <Button
                  variant="ghost"
                  className="p-0 w-[122px] h-auto bg-transparent hover:bg-transparent  cursor-pointer transform transition-transform duration-300 hover:scale-90"
                >
                  <img alt="Read more" src={feature.buttonIcon} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
