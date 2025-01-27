"use client";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={` ${
        (pathname.startsWith("/immersivbox") ||
          pathname.startsWith("/contact")) &&
        "bg-transparent xl:absolute z-10 "
      } ${
        "/" === pathname && "bg-white/80 absolute z-10 "
      }  py-3 xl:py-5 text-textprinc h-[80px] w-full`}
    >
      <div className=" mx-auto flex justify-between items-center ">
        <Link href="/" className="justify-self-start ml-5">
          <Image
            src="/AssetSABOXBLUE.png"
            alt="Immersive Box demo"
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
