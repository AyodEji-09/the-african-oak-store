"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import Image from "next/image";

const DefaultFooter = () => {
  const year = new Date().getFullYear();
  return (
    <>
      {/* footer */}
      <footer>
        <div className="container pt-5 sb-footer-frame">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="sb-footer-frame-desc">
                <Link href="/" className="sb-logo-frame">
                  {/* logo img */}
                  <img
                    src={AppData.header.logo2.image}
                    className="rounded shadow"
                    alt={AppData.header.logo.alt}
                  />
                  <h2 className="text-primary fs-2">
                    {AppData.settings.siteName}
                  </h2>
                </Link>
                <hr className="c5" />

                <p className="small mt-3 fw-light">
                  The African Oak Store, your ultimate source for an enticing
                  array of authentic African cuisine and culinary delights.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="px-lg-5">
                <h2 className="text-primary fs-3">Links</h2>
                <hr className="c5" />
                <ul className="sb-social">
                  {AppData.header.menu.map((item, key) => (
                    <li key={`footer-social-item-${key}`}>
                      <a
                        className="c7"
                        href={item.link}
                        title={item.label}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6">
              <img
                src={AppData.footer.payment.image}
                className="shadow"
                alt={AppData.footer.payment.alt}
              />
            </div>
          </div>

          <hr className="c7" />

          <div className="row">
            <div className="col-12 sb-copy text-center">
              <p className="small fw-light">
                &copy; {year} {AppData.footer.copy}
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
