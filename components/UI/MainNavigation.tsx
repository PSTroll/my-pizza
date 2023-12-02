"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { paths } from "@/constants";

const MainNavigation = () => {
  const currentPath = usePathname();

  return (
    <nav>
      <ul className="flex justify-start">
        {paths.map((item, index) => (
          <Link href={`/${item.path}`} key={index}>
            <li
              className={`${
                currentPath === `/${item.path}` ||
                currentPath.includes(`/${item.path}/`)
                  ? "max-md:text-red-600 md:border-b-red-600 md:border-b-2"
                  : "text-black"
              } px-2 md:px-5 md:h-[6.2rem] py-8 cursor-pointer text-white font-bold hover:text-red-300 hover:duration-300`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
