"use client";

import Link from "next/link";
import Drawer from "./Drawer";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const trigger = (
    <div className="flex flex-col gap-1">
      <span className="block w-6 h-0.5 bg-gray-200"></span>
      <span className="block w-6 h-0.5 bg-gray-200"></span>
      <span className="block w-6 h-0.5 bg-gray-200"></span>
    </div>
  );

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800/65 text-white fixed top-0 w-full z-50">
      {/* Burger button */}
      <Drawer title="Navigation" trigger={trigger} hideCloseButton>
        <div className="flex flex-col">
          <Link
            href="/"
            className={`text-lg font-medium hover:scale-110 text-center w-full p-2 ${
              pathname === "/"
                ? "bg-gray-500 rounded-full text-shadow-none"
                : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="projects"
            className={`text-lg font-medium hover:scale-110 text-center w-full p-2 ${
              pathname === "/projects"
                ? "bg-gray-500 rounded-full text-shadow-none"
                : "text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="contact"
            className={`text-lg font-medium hover:scale-110 text-center w-full p-2 ${
              pathname === "/contact"
                ? "bg-gray-500 rounded-full text-shadow-none"
                : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </header>
  );
};
