import React from "react";
import { testimonialsData } from "../assets/assets";

export default function Testimonials() {
  return (
    <div>
      <h1 className="p-1 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700"
          >
            <p className="text-4xl text-gray-500">&ldquo;{item.text}&rdquo;</p>
            <div className="flex items-center gap-3 mt-5">
              <img src={item.image} alt={`${item.author}'s testimonial`} className="w-9 rounded-full"/>
              <p className="text-sm text-gray-600">{item.author}</p>
              <p>{item.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
