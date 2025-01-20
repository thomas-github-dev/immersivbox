"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: "/1.jpg" },
    { url: "/2.jpg" },
    { url: "/3.jpg" },
    { url: "/4.jpg" },
  ];

  const nextSlide = () => {
    setCurrentImage((next) => (next === images.length - 1 ? 0 : next + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="h-[850px] w-full relative">
      <div
        style={{
          backgroundImage: `url(${images[currentImage].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}
