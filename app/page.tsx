import Image from "next/image";
import NavbarSection from "./screens/NavbarSection/NavbarSection";
import  HeroSection  from "./screens/HeroSection/HeroSection";
import NewProductsSection from "./screens/NewProductsSection/NewProductsSection";
import ContentWrapperSection from "./screens/ContentWrapperSection/ContentWrapperSection";
import DeliveryInfoSection from "./screens/DeliveryInfoSection/DeliveryInfoSection";
import FeatureHighlightSection from "./screens/FeatureHighlightSection/FeatureHighlightSection";
import PopularProductsSection from "./screens/PopularProductsSection/PopularProductsSection";
import FruitsAndVeggiesSection from "./screens/FruitsAndVeggiesSection/FruitsAndVeggiesSection";
import WhyChooseUsSection from "./screens/WhyChooseUsSection/WhyChooseUsSection";
import AppPromotionSection from "./screens/AppPromotionSection/AppPromotionSection";
import MainContentSection from "./screens/MainContentSection/MainContentSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      
      <div id="about">
      <NavbarSection/>
      <MainContentSection/>
      </div>
      <ContentWrapperSection/>
      <DeliveryInfoSection/>
      <HeroSection/>
       <div id="help">
       <NewProductsSection/>
       </div>
      <div id="desk">
      <FeatureHighlightSection/>
      </div>
      <PopularProductsSection/>
      <div id='contact'>
      <FruitsAndVeggiesSection/>
      </div>
      <div id="faq">
      <WhyChooseUsSection/>
      </div>
      
      <AppPromotionSection/>
    </div>
  );
}
