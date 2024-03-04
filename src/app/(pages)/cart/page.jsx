import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import CartPageComponent from "./CartPageComponent";


export const metadata = {
  title: {
    default: "Cart",
  },
  description: AppData.settings.siteDescription,
};

const Cart = () => {

  return (
    <>
      <PageBanner pageTitle={"Your order."} breadTitle={"Cart"} type={1} />

      <CartPageComponent />
    </>
  );
};
export default Cart;
