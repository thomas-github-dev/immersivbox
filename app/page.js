"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div
      key="accueil du site"
      className="bg-top bg-cover bg-no-repeat h-[945px] overflow-hidden relative"
      style={{
        backgroundImage: `url('/fond_accueil.jpg')`,
      }}
    >
      <div className="absolute top-[520px] left-[50%] translate-x-[-50%] text-accent w-[55px] animate-pulse ">
        <Link href="/immersivbox" target="_blank">
          <Image
            src="/accueil_croix.png"
            width={55}
            height={55}
            alt="lien immersive box"
          ></Image>
        </Link>
      </div>
      <div className="absolute top-[523px] left-[50%]  text-accent w-[102px]  ">
        <Image
          src="/accueil_line.png"
          alt="decoration"
          width={191}
          height={102}
        ></Image>
      </div>
    </div>
  );
}
