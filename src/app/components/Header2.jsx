"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  BuildingStorefrontIcon,
  FireIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const products = [
  {
    name: "Házak",
    description: "Modern, energiahatékony könnyűszerkezetes házak",
    href: "/houses",
    icon: HomeModernIcon,
  },
  {
    name: "Pergolák",
    description: "Elegáns, időtálló kerti és teraszmegoldások",
    href: "/pergolas",
    icon: SunIcon,
  },
  {
    name: "Garázs",
    description: "Praktikus tárolók és többcélú melléképületek",
    href: "/garages",
    icon: BuildingStorefrontIcon,
  },
];

const accessories = [
  {
    name: "Házak",
    description: "Modern, energiahatékony könnyűszerkezetes házak",
    href: "/houses",
    icon: HomeModernIcon,
  },
  {
    name: "Pergolák",
    description: "Elegáns, időtálló kerti és teraszmegoldások",
    href: "/pergolas",
    icon: SunIcon,
  },
  {
    name: "Garázs",
    description: "Praktikus tárolók és többcélú melléképületek",
    href: "/garages",
    icon: BuildingStorefrontIcon,
  },
];

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false);

  const productsRef = useRef(null);
  const accessoriesRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
      if (
        accessoriesRef.current &&
        !accessoriesRef.current.contains(event.target)
      ) {
        setAccessoriesOpen(false);
      }
    }

    // Add scroll fix
    document.documentElement.style.overflowY = "scroll";

    // Add outside click handler
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.style.overflowY = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DECKBAE</span>
            <img
              src="/pictures/logo.png"
              alt="DECKBAE Logo"
              className="h-10 w-auto hover:h-11 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Főoldal
          </Link>

          {/* Termékek dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => {
                setProductsOpen(!productsOpen);
                setAccessoriesOpen(false);
              }}
              className="flex items-center gap-x-1 text-lg font-semibold italic text-black hover:text-slate-500 focus:outline-none"
            >
              Termékek
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-red-600"
              />
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 ring-gray-900/5 shadow-lg">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-red-600 group-hover:text-red-700" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={() => setProductsOpen(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Kiegészítések dropdown */}
          <div className="relative" ref={accessoriesRef}>
            <button
              onClick={() => {
                setAccessoriesOpen(!accessoriesOpen);
                setProductsOpen(false);
              }}
              className="flex items-center gap-x-1 text-lg font-semibold italic text-black hover:text-slate-500 focus:outline-none"
            >
              Kiegészítések
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-red-600"
              />
            </button>

            {accessoriesOpen && (
              <div className="absolute top-full left-0 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 ring-gray-900/5 shadow-lg">
                <div className="p-4">
                  {accessories.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-red-600 group-hover:text-red-700" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={() => setAccessoriesOpen(false)}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/team"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Csapat
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Kontakt
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DECKBAE</span>
              <img
                className="h-8 w-auto"
                src="/pictures/logo.png"
                alt="DECKBAE Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Főoldal
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Termékek
                        <ChevronDownIcon
                          className={`h-5 w-5 text-red-600 ${
                            open ? "rotate-180 transform" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Kiegészítések
                        <ChevronDownIcon
                          className={`h-5 w-5 text-red-600 ${
                            open ? "rotate-180 transform" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {accessories.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Csapat
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="tel:+36306127858"
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold italic group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneIcon className="h-5 w-5 text-red-600 group-hover:text-red-800 transition-colors" />
                  <span className="group-hover:text-red-800 transition-colors">
                    +36 30 612 7858
                  </span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
