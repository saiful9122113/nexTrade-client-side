import React from "react";
import img from "../../../Assets/images/about.jpg";

const About = () => {
  return (
    <div className="my-12">
      <div className="hero mt-12 p-4">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/3">
            <img alt="" src={img} />
          </div>
          <div className="w-2/3">
            <p className="text-2xl font-bold text-orange-600">About Our Site</p>
            <h3 className="text-2xl font-bold">
              Our site has largest collection
            </h3>
            <p className="py-4">
            In our site you will find the largest collection of a feature phone, smartphone, and smartwatch. We also offer the longest possible warranty and guaranty of products. So, what are you waiting for? Need a mobile phone? Why you don’t visit our site?
            </p>
            <p className="py-1">
            First of all, there is no hassle of getting out of your bed. You have a laptop or smartphone, a net connection, and your credit card or Bkash with you; well you are good to go. No getting dressed, no stepping out required at all, so from the comfort of your home, you can purchase the phones of your choice. The largest online platform othoba.com have an array of branded mobile phones to choose from, including, Nokia, Samsung, Lava, Micromax
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
