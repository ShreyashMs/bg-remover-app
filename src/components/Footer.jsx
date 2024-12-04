import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <img width={50} src={assets.logo} />
      <p className="flex-1 border-1 border-gray-400 pl-1 text-sm text-gray-500 max-sm:hidden">
        Copyright @ShreyashMs.dev | All rights reserved.
      </p>
      <div className="flex ga[-1">
        {/* <img src={assets.facebook_icon} alt="" /> */}
        <a href="https://x.com/Shreyash_Ms10" target="_blank" rel="noopener noreferrer">
          <img src={assets.twitter_icon} alt=""   />
        </a>
        {/* <img src={assets.google_plus_icon} alt="" /> */}
      </div>
    </div>
  );
}
