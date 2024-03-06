import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import CheckoutPageComponent from "./CheckoutPageComponent";

export const metadata = {
  title: {
    default: "Order checkout",
  },
  description: AppData.settings.siteDescription,
};

const Checkout = () => {

  return (
    <>
      <PageBanner pageTitle={"Checkout"} breadTitle={"Checkout"} type={1} />
      <CheckoutPageComponent />
    </>
  );
};
export default Checkout;
