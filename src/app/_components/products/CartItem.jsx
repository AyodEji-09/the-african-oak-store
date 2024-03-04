"use client";

import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

const CartItem = ({ item, key }) => {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();

  const removeFromCart = (id) => {
    removeItem(id);
    toast.success(`${item.title} has been removed from your cart.`);
  };

  return (
    <>
      <div className={`sb-cart-item sb-cart-item-${key}`}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="sb-product">
              <div className="sb-cover-frame">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="sb-prod-description">
                <p className="sb-text sb-text-sm">{item.title}</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="sb-input-number-frame">
              <div
                className="sb-input-number-btn sb-sub"
                onClick={() => decrementItem(item.id)}
              >
                -
              </div>
              <input type="number" value={item.quantity} readOnly />
              <div
                className="sb-input-number-btn sb-add"
                onClick={() => incrementItem(item.id)}
              >
                +
              </div>
            </div>
          </div>
          <div className="col-3 col-lg-1">
            <div className="sb-price-1">
              <span>Price: </span>
              {item.currency} {""}
              {item.price / 100}
            </div>
          </div>
          <div className="col-3 col-lg-1">
            <div className="sb-price-2">
              <span>Total: </span>
              {item.currency} {""}
              {(item.quantity * item.price) / 100}
            </div>
          </div>
          <div className="col-1">
            <a
              href="#."
              className="sb-remove"
              onClick={(e) => removeFromCart(item.id)}
            >
              +
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
