'use client'
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const products = [ 
  { id: 1, image: "/close-up-vegetable-against-white-background-1-2.png", discount: "-25%", category: "Fruits & Vegeos", name: "Chiness Cabbage 250g", price: "PKR 20", unit: "/ Kg", heartIcon: "/fi-535234-red.png", heartTwo: "/fi_1077035.png", plusIcon: "/frame-2147223461-5.png", cartIcon: "/group-1707486731-2.png", minusIcon: "/minus.png", },
  { id: 2, image: "/vertical-banners-sales-1.png", discount: null, category: "Beauty Products", name: "Lake Absolute 300g", price: "PKR 200", unit: "/ Kg", heartIcon: "/fi-535234-red.png", heartTwo: "/fi_1077035.png", plusIcon: "/frame-2147223461-5.png", cartIcon: "/group-1707486731-2.png", minusIcon: "/minus.png", },
  { id: 3, image: "/fresh-tomatoes-white-background-1.png", discount: "-25%", category: "Fruits & Vegeos", name: "Tomatoes 200g", price: "PKR 120", unit: "/ Kg", heartIcon: "/fi-535234-red.png", heartTwo:"/fi_1077035.png", plusIcon: "/frame-2147223461-5.png", cartIcon: "/group-1707486731-2.png", minusIcon: "/minus.png", }, 
  { id: 4, image: "/three-light-brown-eggs-together-food-cooking-breakfast-ingredien.png", discount: null, category: "Fruits & Vegeos", name: "Tomatoes 200g", price: "PKR 120", unit: "/ Kg", heartIcon: "/fi-535234-red.png", heartTwo:"/fi_1077035.png", plusIcon: "/frame-2147223461-5.png", cartIcon: "/group-1707486731-2.png", minusIcon: "/minus.png", },
  { id: 5, image: "/oil.png", discount: null, category: "Fruits & Vegeos", name: "Tomatoes 200g", price: "PKR 120", unit: "/ Kg", heartIcon: "/fi-535234-red.png", heartTwo:"/fi_1077035.png", plusIcon: "/frame-2147223461-5.png", cartIcon: "/group-1707486731-2.png", minusIcon: "/minus.png", },
];

export default function PopularProductSection () {
  const [productItems, setProductItems] = useState(
    products.map((p) => ({ ...p, isFavorite: false, quantity: 1 }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleFavorite = (id: number) => {
    setProductItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  const increaseQuantity = (id: number) => {
    setProductItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setProductItems((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === productItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? productItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col items-start gap-10 max-[500px]:gap-5 w-full  max-[1100px]:pl-[50px] max-[767px]:pl-[25px] pl-[90px] overflow-hidden">
      <h1 className="font-Poppins font-medium text-[#000000f2] text-[65px] max-[1100px]:text-[52px] max-[1000px]:text-[36px] max-[1000px]:leading-[70px] max-[767px]:text-[28px] max-[767px]:leading-[60px] leading-[106px]">
      Fruits &amp; Veggies
      </h1>

      <div className="flex flex-col items-start gap-[25px] w-full overflow-hidden">
        <div className="flex items-center gap-[25px] w-full transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * (403 - 80)}px)` }}>
          {productItems.map((product) => (
            <Card
              key={product.id}
              className="w-full max-w-[403px] max-[1000px]:w-[300px] h-[451px] bg-[#ffffff] rounded-[20px] overflow-hidden border border-solid border-[#9b9191] relative flex-shrink-0"
            >
              <CardContent className="p-0 relative h-full">
                <img
                  className="absolute w-[220px] h-[236px] max-[1000px]:w-[180px] max-[10000px]:h-[200px] top-[15px] left-[105px] max-[1000px]:left-[70px] max-[767px]:left-[50px] object-contain"
                  alt={product.name}
                  src={product.image}
                />

                {product.discount && (
                  <Badge className="absolute top-[30px] left-[30px] bg-[#e53c3c] text-[#ffffff] text-[15px] px-[9px] py-px rounded-[5px] font-Poppins font-medium">
                    {product.discount}
                  </Badge>
                )}

                <div className="flex flex-col  w-[343px] max-[1000px]:w-[250px] gap-[13px] absolute top-64 left-[30px]">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-Poppins font-medium text-[#bab9bc] text-xl max-[1000px]:text-[16px]">
                      {product.category}
                    </span>
                    <img
                      className="w-[30px] h-[30px] cursor-pointer"
                      alt="Heart"
                      src={product.isFavorite ? product.heartIcon : product.heartTwo}
                      onClick={() => toggleFavorite(product.id)}
                    />
                  </div>
                  <h3 className="font-Poppins font-medium text-[#000000] text-[22px] max-[1000px]:text-[18px]">
                    {product.name}
                  </h3>
                </div>

                <div className="flex flex-col w-[343px] max-[1000px]:w-[250px] gap-[23px] absolute top-[350px] left-[30px]">
                  <div className="font-Poppins font-medium text-[15px] ">
                    <span className="text-[#000000]">{product.price} </span>
                    <span className="text-[#bab9bc]">{product.unit}</span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div className="w-[104px] h-[33px] bg-[#f4f3f3] rounded overflow-hidden border border-solid border-[#d6d6d699] flex items-center justify-center">
                      <div className="flex items-center gap-[7px]">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-[26px] h-[26px] bg-[#ffffff] rounded-[3px] border border-solid border-[#d6d6d666] p-0"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          <img
                            className="w-[26px] h-[26px] cursor-pointer transform transition-transform duration-300 hover:scale-90"
                            alt="Minus"
                            src={product.minusIcon}
                          />
                        </Button>
                        <span className="w-[26px] h-[26px] flex items-center justify-center font-Poppins font-semibold text-[#000000] text-[13px]">
                          {product.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="w-[26px] h-[26px] p-0"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          <img
                            className="w-[26px] h-[26px] cursor-pointer transform transition-transform duration-300 hover:scale-90"
                            alt="Plus"
                            src={product.plusIcon}
                          />
                        </Button>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-10 h-10 max-[767px]:w-8 max-[767px]:h-8 p-0"
                    >
                      <img
                        className="w-10 h-10 max-[767px]:w-8 max-[767px]:h-8 cursor-pointer transform transition-transform duration-300 hover:scale-90"
                        alt="Add to cart"
                        src={product.cartIcon}
                      />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
        
      <div className="flex items-center gap-[26px] mx-auto pb-[73px] max-[1000px]:pb-10">
        <button 
          className="w-[57px] h-[57px] max-[767px]:w-10 max-[767px]:h-10 rounded-[10px] bg-[#ffff]"
          onClick={prevCard}
        >
          <img src="/group24.png" className="w-full h-full object-contain cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="Previous" />
        </button>
        <button 
          className="w-[57px] h-[57px] max-[767px]:w-10 max-[767px]:h-10 rounded-[10px] bg-[#ffff]"
          onClick={nextCard}
        >
          <img src="/group-22.png" className="w-full h-full object-contain cursor-pointer transform transition-transform duration-300 hover:scale-90" alt="Next" />
        </button>
      </div>
    </section>
  );
}