"use client";
import CartItem from "../../_components/products/CartItem";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

const CartPageComponent = () => {
  const { cartDetails, totalPrice, cartCount, clearCart } = useShoppingCart();

  return (
    <>
      <section className="sb-p-90-90">
        <div className="container">
          <div className="sb-cart-table">
            {cartCount && cartCount > 0 ? (
              <div className="sb-cart-table-header">
                <div className="row">
                  <div className="col-lg-6">Product</div>
                  <div className="col-lg-3">Quantity</div>
                  <div className="col-lg-1">Price</div>
                  <div className="col-lg-1">Total</div>
                  <div className="col-lg-1"></div>
                </div>
              </div>
            ) : null}

            {cartCount && cartCount > 0 ? (
              Object.values(cartDetails ?? {}).map((item) => (
                <div key={item.id + item.title}>
                  <CartItem item={item} />
                </div>
              ))
            ) : (
              <div className="alert alert-danger">
                <p className="m-0 text-center">No items in your cart</p>
              </div>
            )}
          </div>

          {cartCount && cartCount > 0 ? (
            <>
              <div className="row justify-content-end mt-5">
                <div className="col-lg-6">
                  <div className="sb-cart-total">
                    <div className="sb-sum">
                      <div className="row">
                        <div className="col-8">
                          <div className="sb-total-title">Subtotal:</div>
                        </div>
                        <div className="col-4">
                          <div className="sb-price-1 text-right">
                            USD {totalPrice.toFixed(2) / 100}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sb-sum">
                      <div className="row">
                        <div className="col-8">
                          <div className="sb-total-title">
                            Estimated shipping:
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="sb-price-1 text-right">$5</div>
                        </div>
                      </div>
                    </div>
                    <div className="sb-realy-sum">
                      <div className="row">
                        <div className="col-8">
                          <div className="sb-total-title">Total:</div>
                        </div>
                        <div className="col-4">
                          <div className="sb-price-2 text-right">
                            USD {totalPrice.toFixed(2) / 100}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sb-cart-btns-frame text-right">
                    {/* button */}
                    <Link href="/shop" className="sb-btn sb-btn-2 sb-btn-gray">
                      <span className="sb-icon">
                        <img src="/img/ui/icons/arrow-2.svg" alt="icon" />
                      </span>
                      <span>Continue shopping</span>
                    </Link>
                    {/* button end */}
                    {/* button */}
                    <Link href={"/checkout"} className="sb-btn sb-m-0">
                      <span className="sb-icon">
                        <img src="/img/ui/icons/arrow.svg" alt="icon" />
                      </span>
                      <span>Checkout</span>
                    </Link>
                    {/* button end */}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
      {/* cart end */}
    </>
  );
};

export default CartPageComponent;
