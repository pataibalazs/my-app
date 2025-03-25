import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import HeaderDropdown from "./HeaderDropdown";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-xl h-20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 h-20"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center flex-none">
          <Link href="/" className="no-underline">
            <img
              src="/pictures/logo.png"
              alt="DECKBAE Logo"
              className="h-10 w-auto hover:h-11 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>

        <div className="flex-grow flex justify-center items-center">
          <div className="flex gap-x-12 items-center">
            <Link
              href="/"
              className="mr-2 text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Főoldal
            </Link>
            <HeaderDropdown buttonText="Termék" />
            <HeaderDropdown buttonText="Kiegészítések" />
            <Link
              href="/team"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Csapat
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* Phone contact */}
        <div
          className="flex-none flex items-center justify-end"
          style={{ width: "180px" }}
        >
          <a
            href="tel:+36306127858"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold italic group"
          >
            <PhoneIcon className="h-5 w-5 text-red-600 group-hover:text-red-800 transition-colors" />
            <span className="group-hover:text-red-800 transition-colors">
              +36 30 612 7858
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
