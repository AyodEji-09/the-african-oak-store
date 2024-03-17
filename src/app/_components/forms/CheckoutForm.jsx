"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getCarriers } from "../../_lib/shipstationApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CheckoutForm = () => {
  const { cartDetails, totalPrice, cartCount, clearCart } = useShoppingCart();
  const [carriers, setCarriers] = useState([]);
  const [loadingCarriers, setLoadingCarriers] = useState(false);
  const TotalPrice = totalPrice * 100;
  const adminEmail = process.env.ADMIN_EMAIL;

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    company: "",
    country: "",
    city: "",
    state: "",
    address: "",
    postcode: "",
    message: "",
    subject: "Order Confirmation",
    totalPrice: totalPrice,
    cartCount: cartCount,
    cartDetails: cartDetails,
    payment: parseFloat(TotalPrice / 100).toFixed(2),
    payment_method: 1,
    carrier: "",
    userType: adminEmail,
  });

  const handleChange = (e) => {
    let { value, name, type } = e.target;
    console.log({ value, name, type });
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ values });
    return;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const stripe = await loadStripe(
      //   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      // );
      // if (!stripe) throw new Error("Stripe failed to initialize.");

      toast.success("Your order has been recieved", {
        duration: 5000,
      });
      /* const checkoutResponse = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails }),
      }); */
      // const { sessionId } = await checkoutResponse.json();
      // const stripeError = await stripe.redirectToCheckout({ sessionId });

      // if (stripeError) {
      //   console.error({ stripeError });
      // }
      // clearCart();
    } catch (error) {
      console.error({ error });
    }
  };

  const Carriers = async () => {
    setLoadingCarriers(true);
    const res = await getCarriers();
    setCarriers(res);
    setLoadingCarriers(false);
  };

  useEffect(() => {
    Carriers();
  }, []);

  return (
    <>
      <form id="checkoutForm" className="sb-checkout-form">
        <div className="sb-mb-30">
          <h3>Billing details</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=""
                name="firstname"
                required="required"
                onChange={handleChange}
                value={values.firstname}
              />
              <span className="sb-bar"></span>
              <label>First name</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="lastname"
                required="required"
                onChange={handleChange}
                value={values.lastname}
              />
              <span className="sb-bar"></span>
              <label>Last name</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="company"
                onChange={handleChange}
                value={values.company}
              />
              <span className="sb-bar"></span>
              <label>Company name</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="country"
                required="required"
                onChange={handleChange}
                value={values.country}
              />
              <span className="sb-bar"></span>
              <label>Country</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="city"
                required="required"
                onChange={handleChange}
                value={values.city}
              />
              <span className="sb-bar"></span>
              <label>City</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="state"
                required="required"
                onChange={handleChange}
                value={values.state}
              />
              <span className="sb-bar"></span>
              <label>State / Province</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="address"
                required="required"
                onChange={handleChange}
                value={values.address}
              />
              <span className="sb-bar"></span>
              <label>Address</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="text"
                placeholder=" "
                name="postcode"
                required="required"
                onChange={handleChange}
                value={values.postcode}
              />
              <span className="sb-bar"></span>
              <label>Postcode</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="tel"
                placeholder=" "
                name="tel"
                required="required"
                onChange={handleChange}
                value={values.tel}
              />
              <span className="sb-bar"></span>
              <label>Phone</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-group-input">
              <input
                type="email"
                placeholder=" "
                name="email"
                required="required"
                onChange={handleChange}
                value={values.email}
              />
              <span className="sb-bar"></span>
              <label>Email</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb-mb-30">
          <h4>Select Preffered Carriers - Shipping Option </h4>
        </div>
        <div className="">
          {loadingCarriers && (
            <Skeleton count={5} height={25} className="mb-1" />
          )}
          {carriers?.map((carrier) => (
            <div key={carrier.shippingProviderId} className="form-check my-1">
              <input
                className="form-check-input"
                type="radio"
                onChange={handleChange}
                value={carrier.shippingProviderId}
                name="carrier"
                id={carrier.shippingProviderId}
              />
              <label
                className="form-check-label"
                htmlFor={carrier.shippingProviderId}
              >
                {carrier.name}
              </label>
            </div>
          ))}
        </div>
        <hr />

        <div className="sb-mb-30 my-4">
          <h4>Additional information</h4>
        </div>
        <div className="sb-group-input">
          <textarea
            placeholder=" "
            name="message"
            onChange={handleChange}
            value={values.message}
          />
          <span className="sb-bar"></span>
          <label>Order notes</label>
        </div>
        {/* button */}
        {cartCount > 0 && (
          <button
            onClick={handleSubmit}
            type="submit"
            className="sb-btn sb-m-0"
          >
            <span className="sb-icon">
              <img src="/img/ui/icons/arrow.svg" alt="icon" />
            </span>
            <span>Place order</span>
          </button>
        )}

        {/* button end */}
      </form>
    </>
  );
};
export default CheckoutForm;
