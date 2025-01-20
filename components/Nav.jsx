"use client";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            }  font-medium link.path === text-accent hover:text-accent-hover transition-all uppercase`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
