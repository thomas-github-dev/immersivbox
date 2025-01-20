"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-3 xl:py-5 text-textprinc ">
      <div className=" mx-auto flex justify-between items-center ">
        <Link href="/" className="justify-self-start ml-5">
          <Image
            src="/AssetSABOXBLUE.png"
            alt="Immersive Box"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "200px", height: "auto" }}
          />
        </Link>
        <div className="hidden xl:flex items-center gap-8 mr-5">
          <Nav />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
