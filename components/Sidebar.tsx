"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    slug: "introduction-to-neit",
    title: "Introduction to Neit",
  },
  {
    slug: "neit-requirements",
    title: "Neit Requirements",
    subLinks: [
      { slug: "semigen-engine", title: "Semigen Engine" },
      { slug: "compiler", title: "Compiler" },
      { slug: "interpreter", title: "Interpreter" },
      { slug: "artificial-intelligence", title: "Artificial Intelligence" },
    ],
  },
  {
    slug: "neit-cli",
    title: "Neit Command-Line Interface",
    subLinks: [
      { slug: "main-commands", title: "Main Commands" },
      { slug: "options", title: "Options" },
    ],
  },
  { slug: "neit-syntax", title: "Neit Syntax" },
  { slug: "functions-in-neit", title: "Functions (Commands)" },
  { slug: "control-flow", title: "Control Flow" },
  { slug: "semigen-grammar", title: "Semigen Grammar" },
];

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="hidden lg:block w-[20vw] bg-transparent h-screen p-6">
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.slug}>
              {/* Change href for "Introduction to Neit" to / */}
              <Link
                href={link.slug === "introduction-to-neit" ? "/" : `/${link.slug}`}
                className="text-white text-lg hover:underline"
              >
                {link.title}
              </Link>
              {/* Check for subLinks and display them */}
              {link.subLinks && (
                <ul className="ml-4 space-y-2">
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.slug}>
                      <Link
                        href={`/${link.slug}#${subLink.slug}`}
                        className="text-white text-md hover:underline"
                      >
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 lg:hidden">
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <ul className="hidden lg:flex list-none justify-end items-center space-x-6">
            {links.map((link) => (
              <li key={link.slug} className="text-white hover:underline">
                {/* Change href for "Introduction to Neit" to / */}
                <Link href={link.slug === "introduction-to-neit" ? "/" : `/${link.slug}`}>
                  {link.title}
                </Link>
                {/* Check for subLinks and display them */}
                {link.subLinks && (
                  <ul className="ml-4 space-y-2">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.slug}>
                        <Link
                          href={`/${link.slug}#${subLink.slug}`}
                          className="text-white text-md hover:underline"
                        >
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="lg:hidden flex items-center">
            <Image
              width={24}
              height={24}
              src="/menu.svg"
              alt="menu"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          {toggle && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center w-full h-full">
              <div className="flex flex-col items-center space-y-6">
                <Image
                  width={24}
                  height={24}
                  src="/close.svg"
                  alt="close"
                  className="w-6 h-6 cursor-pointer self-end mr-4 mt-4"
                  onClick={() => setToggle(false)}
                />
                <ul className="flex flex-col items-center space-y-4">
                  {links.map((link) => (
                    <li
                      key={link.slug}
                      className="text-white text-xl hover:underline"
                    >
                      {/* Change href for "Introduction to Neit" to / */}
                      <Link
                        href={link.slug === "introduction-to-neit" ? "/" : `/${link.slug}`}
                        onClick={() => setToggle(false)}
                      >
                        {link.title}
                      </Link>
                      {/* Check for subLinks and display them */}
                      {link.subLinks && (
                        <ul className="ml-4 space-y-2">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.slug}>
                              <Link
                                href={`/${link.slug}#${subLink.slug}`}
                                className="text-white text-lg hover:underline"
                                onClick={() => setToggle(false)}
                              >
                                {subLink.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </main>
    </div>
  );
};

export default Sidebar;
