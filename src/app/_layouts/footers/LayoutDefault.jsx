"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
      {/* footer */}
      <footer className="main">
        <div className="container pt-5">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="widget-about font-md mb-md-5 mb-lg-0">
                <div className="logo logo-width-1 wow fadeIn animated">
                  <Link
                    href="/"
                    className="d-flex gap-2 align-items-center text-primary fs-1"
                  >
                    {/* <Image src={logo} height={100} width={"auto"} alt="logo" /> */}
                    <h3 className="text-primary">The African Oak Store</h3>
                  </Link>
                </div>
                <div className="my-2">
                  <p className="small text-grey-5">
                    The African Oak Store, your ultimate source for an enticing
                    array of authentic African cuisine and culinary delights.
                  </p>
                </div>

                <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                  {/* <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5 className="widget-title text-primary wow fadeIn animated">
                Quick Links
              </h5>
              <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                <li className="text-gray-5">
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link className="text-gray-5" href="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-5" href="/store">
                    Store
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3  col-md-3 col-sm-6">
              <h5 className="widget-title text-primary wow fadeIn animated">
                My Account
              </h5>
              <ul className="footer-list wow fadeIn animated">
                <li>
                  <Link href="/cart">My Cartlist</Link>
                </li>
                <li>
                  <Link href="/wish">My Wishlist</Link>
                </li>
                {/* <li>
                  <Link href="#">Track My Order</Link>
                </li>
                <li>
                  <a href="#">Order</a>
                </li> */}
                {/* <Image src={paymentMethod} width={'auto'} height={30} alt="payment methods"/> */}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-20">
              <div className="footer-bottom"></div>
            </div>
            <div className="col-lg-6">
              <p className="float-md-left font-sm text-muted mb-0">
                <Link href="#">Privacy Policy</Link> |{" "}
                <Link href="#">Terms & Conditions</Link>
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-lg-end text-start font-sm text-muted mb-0">
                &copy;{" "}
                <strong className="text-brand">The African Oak Store</strong>{" "}
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
