"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const Hero = () => {
  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
      {/* banner */}
      <section className="sb-banner">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* main title */}
              <div className="sb-main-title-frame">
                <div className="sb-main-title">
                  <span className="sb-suptitle sb-mb-30">{Data.subtitle}</span>
                  <h1 className="sb-mb-30">
                    Explore the <br /> vibrant
                    <span class="text-primary"> yummy flavors </span> of Africa.
                  </h1>

                  <p className="sb-text sb-text-lg sb-mb-30 fw-normal">
                    {Data.description}
                  </p>

                  {/* button */}
                  <Link
                    href={Data.button1.link}
                    className="sb-btn rounded shadow"
                  >
                    <span className="sb-icon">
                      <img src={Data.button1.icon} alt="icon" />
                    </span>
                    <span className="text-light">{Data.button1.label}</span>
                  </Link>
                  {/* button end */}
                  {/* button */}
                  <Link
                    href={Data.button2.link}
                    className="sb-btn sb-btn-2 sb-btn-gray"
                  >
                    <span className="sb-icon">
                      <img src={Data.button2.icon} alt="icon" />
                    </span>
                    <span>{Data.button2.label}</span>
                  </Link>
                  {/* button end */}
                </div>
              </div>
              {/* main title end */}
            </div>
            <div className="col-lg-6">
              <div className="sb-ilustration-fix">
                <div className="sb-illustration-1-2">
                  <img
                    src="/img/hero/1.jpg"
                    alt="food"
                    className="rounded-circle img-thumbnail shadow-lg sb-food-1"
                  />
                  <img
                    src="/img/hero/2.jpg"
                    alt="food"
                    className="rounded-circle img-thumbnail shadow-lg sb-food-2"
                  />
                  <img
                    src="/img/hero/3.jpg"
                    alt="food"
                    className="rounded-circle img-thumbnail shadow-lg sb-food-3"
                  />

                  <div className="sb-illu-dialog-1">
                    <span>😋</span> Om-nom-nom...
                  </div>
                  <div className="sb-illu-dialog-2">
                    <span>🥰</span> Sooo delicious!
                  </div>

                  <div className="sb-cirkle-1"></div>
                  <div className="sb-cirkle-2"></div>
                  <div className="sb-cirkle-3"></div>
                  <div className="sb-cirkle-4"></div>
                  <div className="sb-cirkle-5"></div>

                  <img
                    src="/img/illustrations/3.svg"
                    alt="phones"
                    className="sb-pik-1"
                  />
                  <img
                    src="/img/illustrations/1.svg"
                    alt="phones"
                    className="sb-pik-2"
                  />
                  <img
                    src="/img/illustrations/2.svg"
                    alt="phones"
                    className="sb-pik-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default Hero;
