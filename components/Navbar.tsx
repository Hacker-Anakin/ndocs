import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center lg:p-4">
      <Link href="/" className="hover:underline">
        <Image src="/Logo.png" height={100} width={100} alt="Logo" />
      </Link>
      <ul className="flex items-center justify-around gap-2">
        <li className="relative group">
          <Image src="/search.svg" height={24} width={24} alt="Search" className="absolute right-0"/>
          <input type="text" className="bg-transparent" placeholder="Search" />
        </li>
        <li className="flex gap-8">
          <div className="relative group flex items-center gap-2 cursor-pointer border border-black-200 p-2 rounded-sm">
            <Link
              href="/"
              className="text-md text-gray-50 transition-all hover:font-bold flex items-center gap-2"
            >
              NEiT
            </Link>
          </div>
          <div className="relative group flex items-center gap-2 cursor-pointer border border-black-200 p-2 rounded-sm">
            <Link
              href="/"
              className="text-md text-gray-50 transition-all hover:font-bold flex items-center gap-2"
            >
              Oxum Labs
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
