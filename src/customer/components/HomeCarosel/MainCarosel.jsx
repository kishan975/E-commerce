import React from "react";
import { MainCaroselData } from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarosel = () => {
  const items = MainCaroselData.map((item, index) => (
    <div key={index} className="relative w-full h-96 md:h-[500px]">
      
      {/* Image */}
      <img
        className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
        role="presentation"
        src={item.image}
        alt={item.title}
        onClick={() => (window.location.href = item.path)}
      />

      {/* Overlay */}
      <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md text-white p-4 rounded-lg">
        <h3 className="text-lg md:text-xl font-bold">{item.brand}</h3>
        <p className="text-sm md:text-lg">{item.title}</p>
        <p className="text-xl md:text-2xl font-bold text-green-400">
          ₹{item.discountedPrice}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="py-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <AliceCarousel
        items={items}

        // 🔥 AUTOPLAY SETTINGS
        autoPlay={true}
        autoPlayInterval={1000}   // 👉 1 second
        infinite={true}
        autoPlayStrategy="all"   // smoother autoplay

        // UX improvements
        disableDotsControls
        disableButtonsControls
        mouseTracking

        // Smooth animation
        animationType="fadeout"
        animationDuration={800}

        // Responsive (1 item always best for hero carousel)
        responsive={{
          0: { items: 1 },
          568: { items: 1 },
          1024: { items: 1 },
        }}
      />
    </div>
  );
};

export default MainCarosel;