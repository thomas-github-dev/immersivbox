"use client";

import { CiMenuBurger } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "Découvrez l'immersivbox",
    path: "/immersivbox",
  },
  {
    name: " Découvrez la tablette",
    path: "/tablette",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const currentPath = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="justify-center flex items-center">
        <CiMenuBurger className="text-[32px] text-accent mr-5" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col justify-center items-center gap-8 mt-20">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                className={`${
                  link.path === currentPath &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-[25px] hover:text-accent transition-all`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
