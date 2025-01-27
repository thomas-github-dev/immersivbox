"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: "/covering-accueil01.png" },
    { url: "/covering-accueil02.png" },
    { url: "/covering-accueil03.png" },
  ];

  const nextSlide = () => {
    console.log("passage");
    setCurrentImage((next) => (next === images.length - 1 ? 0 : next + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div
      key="accueil du site"
      className="bg-top bg-cover bg-no-repeat h-[945px] overflow-hidden relative"
      style={{
        backgroundImage: `url('/fond_accueil.jpg')`,
      }}
    >
      <div className="absolute top-[0px] left-[50%] translate-x-[-52%] text-accent w-[310px] h-[875px]">
        <div
          style={{
            backgroundImage: `url(${images[currentImage].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>
      </div>

      <div className="absolute top-[520px] left-[50%] translate-x-[-50%] text-accent w-[55px] animate-pulse ">
        <Link href="/immersivbox">
          <Image
            src="/accueil_croix.png"
            width={55}
            height={55}
            alt="lien immersive box"
          ></Image>
        </Link>
      </div>
      <div className="absolute hidden xxl:block xl:block top-[565px] left-[50%] translate-x-[11%] text-accent w-[191px]  ">
        <Image
          src="/accueil_line.png"
          alt="decoration"
          width={191}
          height={102}
        ></Image>
      </div>
      <div className="absolute top-[885px] text-center xxl:text-left xxl:top-[648px] xl:top-[648px] left-[50%] translate-x-[-50%]  xl:translate-x-[72%] xxl:translate-x-[72%]">
        <div className="environment"></div>
        <h2
          className="typo steve_glitch layers font-second text-[18px] font-thin "
          data-text="DECOUVREZ L'IMMERSIVBOX"
        >
          <span>DECOUVREZ L'IMMERSIVBOX</span>
        </h2>
      </div>
    </div>
  );
}
