"use client";

import { useEffect, useState } from "react";
import Logo from "@/src/components/Logo";
import Button from "@/src/components/Button";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavigationBar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const pages = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/#events" },
    { name: "MEMORIES", path: "/#memos" },
    { name: "ABOUT US", path: "/#about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 h-20 w-full z-50
          flex justify-between items-center
          py-5 px-6 md:px-10 text-white
          bg-linear-to-b from-white/5 via-black/10 to-white/5 backdrop-blur-md
          transition-transform duration-500
          ${visible ? "translate-y-0" : "-translate-y-full"}
          after:content-[''] after:absolute after:left-0 after:bottom-0
          after:w-full after:h-0.5
          after:bg-linear-to-r after:from-transparent after:via-blue-500/40 after:to-transparent
        `}
      >
        <div className="w-[45px] cursor-pointer hover:scale-110 transition-transform duration-300">
          <Logo />
        </div>

        <ul className="hidden md:flex gap-10 items-center text-lg font-medium">
          {pages.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer relative group transition-colors duration-300"
            >
              <Link href={item.path}>
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link href={"/contact-us"} className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
            CONTACT
          </Button>
        </Link>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen
          bg-black/80 backdrop-blur-xl text-white z-49
          flex flex-col items-center justify-center gap-8
          text-2xl font-semibold
          transition-all duration-500
          ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {pages.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={() => setOpenMenu(false)}
            className="hover:text-blue-400 transition-colors"
          >
            {item.name}
          </Link>
        ))}

        <Link href={"/contact-us"} onClick={() => setOpenMenu(false)}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-xl py-3 px-8">
            CONTACT
          </Button>
        </Link>
      </div>
    </>
  );
}
