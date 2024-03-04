"use client";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";

const CartProviderComponent = ({ children }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      successUrl="https://www.shopoakstore.com/payment_success"
      cancelUrl="https://www.shopoakstore.com/payment_failure"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      {children}
      <Toaster />
    </CartProvider>
  );
};

export default CartProviderComponent;
