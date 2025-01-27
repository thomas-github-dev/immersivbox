"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/tablette")) return null;
  else
    return (
      <footer className="bg-gray-800 text-white p-8 ">
        <div className="flex flex-col xl:flex-row xl:gap-12 gap-4 px-20 pt-10 align-top items-center xl:items-start">
          <div className="flex-1 flex align-middle justify-center content-center items-center xl:justify-start order-1 xl:order-none ">
            ulrich@devenais3d.fr
            <br /> +33 6 89 72 30 38
          </div>
          <div className="flex-1 flex flex-col items-center order-1 xl:order-none ">
            2024 - 2025
            <div className="mx-auto flex flex-row align-middle justify-center content-center items-center">
              <Image
                src="/saboxblanc.png"
                alt="Immersive Box"
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain block"
                style={{ width: "auto", height: "55px" }}
              />

              <Image
                src="/ulrich.png"
                alt="Immersive Box"
                width={0}
                height={0}
                sizes="100vw"
                className="block object-contain"
                style={{ width: "auto", height: "120px" }}
              />
            </div>
            <Link href="/mentions-legales" className="underline">
              Mentions Légales
            </Link>
          </div>
          <div className="flex-1 flex align-middle justify-center content-center gap-6 items-center xl:justify-end order-1 xl:order-none ">
            <a
              href="https://www.linkedin.com/company/immersiv-box"
              target="_blank"
            >
              <FaLinkedinIn className="text-white text-3xl" />
            </a>
            <a href="https://www.instagram.com/immersivbox/" target="_blank">
              <GrInstagram className="text-white text-3xl" />
            </a>
          </div>
        </div>
      </footer>
    );
}
