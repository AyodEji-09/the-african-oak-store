import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from "@data/products";

import PageBanner from "@components/PageBanner";
// import PromoSection from "@components/sections/Promo";
import TeamSection from "@components/sections/Team";
import CategoriesSection from "@components/sections/Categories";
import CallToActionTwoSection from "../../_components/sections/CallToActionTwo";

const ProductsSlider = dynamic(() => import("@components/sliders/Products"), {
  ssr: false,
});

export const metadata = {
  title: {
    default: "Shop",
  },
  description: AppData.settings.siteDescription,
};

const Shop = () => {
  return (
    <>
      <PageBanner pageTitle={"Online Store"} breadTitle={"Shop"} type={1} />
      <CategoriesSection heading={0} paddingTop={90} />
      <ProductsSlider
        items={Products.items}
        title={"Most <span>popular</span> foodstuffs"}
        description={
          "Embark on a culinary journey through the most beloved flavors of Africa with our selection of popular foodstuffs. At The African Oak Store, we celebrate the richness and diversity of African cuisine, bringing you the most sought-after ingredients and delicacies that capture the essence of our culinary heritage. "
        }
        button={{
          link: "/products",
          label: "All Products",
          icon: "/img/ui/icons/arrow.svg",
        }}
        slidesPerView={4}
        itemType={"product"}
      />
      <ProductsSlider
        items={Products.items}
        title={"Our <span>Bestsellers</span>"}
        description={
          "Discover vibrant flavors and rich traditions in this collection of irresistible African culinary delights. Savor the essence of Africa's cuisine."
        }
        button={{
          link: "/products",
          label: "All Products",
          icon: "/img/ui/icons/arrow.svg",
        }}
        slidesPerView={4}
        itemType={"product"}
      />
      <div className="my-5">
        <CallToActionTwoSection />
      </div>

      <div className="my-5">
        <TeamSection />
      </div>
      {/* <PromoSection /> */}
    </>
  );
};
export default Shop;
