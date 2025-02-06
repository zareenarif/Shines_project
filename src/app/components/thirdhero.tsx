/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaHamburger, FaCookie, FaWineGlassAlt } from "react-icons/fa";

const ThirdSec = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Image Section */}
        <div className="grid grid-cols-2 mt-20 grid-rows-3 gap-4">
          <img
            src="1.jpeg"
            alt="Tacos"
            className="rounded-lg object-cover w-full h-60 row-span-2 shadow-lg"
          />
          <img
            src="2.jpeg"
            alt="Burger"
            className="rounded-lg object-cover w-full h-40 md:w-40 md:h-40 shadow-lg"
          />


          <img
            src="02.jpeg"
            alt="Dinner"
            className="rounded-lg object-cover w-full h-40 md:w-40 md:h-40 shadow-lg"
          />          
          <img
            src="03.jpeg"
            alt="Chicken"
            className="rounded-lg object-cover w-full h-40 -mt-20 md:w-40 md:h-52 shadow-lg"
/>
          <img
            src="3.jpeg"
            alt="Fast Food"
            className="rounded-lg object-cover w-full h-20  md:w-20 md:h-20 shadow-lg"
          />
          <img
            src="15.jpeg"
            alt="Fast Food"
            className="rounded-lg object-cover ml-48 -mt-60 w-full h-20 md:w-20 md:h-20 shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">
            Why Choose Us
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">Extraordinary Taste</span> <br />
            And Experienced
          </h1>
          <p className="text-gray-300 mb-8">
            Enjoy delicious, well-prepared meals made with fresh ingredients. Our years of expertise ensure top-quality flavors and presentation that will leave you wanting more.
          </p>

          {/* Food Categories */}
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
            <div className="flex flex-col items-center">
              <FaHamburger className="text-yellow-400 text-4xl mb-2" />
              <p className="text-lg font-semibold">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCookie className="text-yellow-400 text-4xl mb-2" />
              <p className="text-lg font-semibold">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <FaWineGlassAlt className="text-yellow-400 text-4xl mb-2" />
              <p className="text-lg font-semibold">Dinner</p>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 text-black px-6 py-4 rounded-lg text-center font-bold text-3xl shadow-lg">
              30+
            </div>
            <p className="text-lg font-semibold">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
