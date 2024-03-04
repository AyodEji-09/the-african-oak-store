import React from "react";
import dynamic from "next/dynamic";

import AppData from '../../../data/app.json';

import PageBanner from "../../_components/PageBanner";;
import AboutTwoSection from "../../_components/sections/AboutTwo";
import FeaturesOneSection from '../../_components/sections/Features'
import PromoVideoSection from "../../_components/sections/PromoVideo";
import TeamSection from "../../_components/sections/Team";
import CallToActionSection from "../../_components/sections/CallToAction";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "About 2",
	},
  description: AppData.settings.siteDescription,
}

const About2 = () => {
  return (
    <>
      <PageBanner pageTitle={"There is no <span>love</span> more sincere <br> than the love of <span>food</span>."} breadTitle={"About us"} description={"Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi."} type={2} />
      <AboutTwoSection />
      <FeaturesOneSection />
      <PromoVideoSection />
      <TeamSection items={3} />
      <TestimonialSlider />
      <CallToActionSection />
    </>
  );
};
export default About2;