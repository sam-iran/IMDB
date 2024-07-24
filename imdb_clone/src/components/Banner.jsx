import React from "react";
import Weather from "./Weather";

function Banner() {
  return (
    
    <div
      className="h-[70vh] flex bg-cover items-end"
      style={{
        backgroundImage: `URL('https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg')`,
      }}
    >
      <Weather/>
      <div className="w-full p-2 bg-gray-200/75 text-center font-serif text-orange-900 font-bold">
      
        Captain America : Winter Soldier
      </div>
    </div>
  );
}

export default Banner;
