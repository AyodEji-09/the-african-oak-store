"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import CartData from "@data/cart.json";

const ProductItem = ({ item, index, marginBottom, moreType }) => {
  const addToCart = (e, item) => {
    e.preventDefault();
    const cartNumberEl = document.querySelector(".sb-cart-number");
    e.currentTarget.classList.add("sb-added");
    setTimeout(() => {
      cartNumberEl.classList.remove("sb-added");
    }, 600);

    //
    // const cartItems = window.localStorage.setItem('SHOPOAKSTORE_CART_ITEMS', [])
    // console.log(item);
  };

  return (
    <>
      <div className={`sb-menu-item sb-mb-${marginBottom}`}>
        <div className="sb-cover-frame">
          <img src={item.image} alt={item.title} />
          <div dangerouslySetInnerHTML={{ __html: item.badge }} />
        </div>
        <div className="sb-card-tp">
          <h4 className="sb-card-title">{item.title}</h4>
          <div className="sb-price">
            {item.currency} {item.price}
          </div>
        </div>
        <div className="sb-description">
          <p className="sb-text sb-mb-15">{item.text}</p>
        </div>
        <div className="sb-card-buttons-frame">
          {/* button */}
          {/* {moreType != 2 ? (
            <Link
              href="#."
              className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0"
            >
              <span className="sb-icon">
                <img src="/img/ui/icons/arrow.svg" alt="icon" />
              </span>
            </Link>
          ) : (
            <Link href="#." className="sb-btn sb-btn-gray">
              <span className="sb-icon">
                <img src="/img/ui/icons/arrow.svg" alt="icon" />
              </span>
              <span>Details</span>
            </Link>
          )} */}
          {/* button end */}
          {/* button */}
          <a
            href="#."
            className="sb-btn sb-atc w-100 d-flex"
            onClick={(e) => addToCart(e, item)}
          >
            <span className="sb-icon">
              <img src="/img/ui/icons/cart.svg" alt="icon" />
            </span>
            <span className="sb-add-to-cart-text">Add to cart</span>
            <span className="sb-added-text">Added</span>
          </a>
          {/* button end */}
        </div>
      </div>
    </>
  );
};
export default ProductItem;
