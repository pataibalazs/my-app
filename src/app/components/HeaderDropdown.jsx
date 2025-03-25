import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  ChevronDoubleUpIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

export default function HeaderDropdown({ buttonText = "Termék" }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center gap-x-1 text-lg font-semibold italic text-black hover:text-slate-500 transition duration-100">
          {buttonText}
          <ChevronDownIcon
            aria-hidden="true"
            className="h-5 w-5 text-red-600"
          />
        </MenuButton>
      </div>

      <MenuItems className="absolute left-0 z-10 mt-2 w-44 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div className="py-2 flex flex-col">
          <MenuItem>
            <Link
              href="/houses"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic flex items-center gap-x-3 px-4 py-2 group"
            >
              <HomeIcon className="h-5 w-5 text-red-600 flex-shrink-0 group-hover:text-slate-500 transition-colors" />
              Házak
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/pregolas"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic flex items-center gap-x-3 px-4 py-2 group"
            >
              <ChevronDoubleUpIcon className="h-5 w-5 text-red-600 flex-shrink-0 group-hover:text-slate-500 transition-colors" />
              Pregolák
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/garages"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic flex items-center gap-x-3 px-4 py-2 group"
            >
              <ViewColumnsIcon className="h-5 w-5 text-red-600 flex-shrink-0 group-hover:text-slate-500 transition-colors" />
              Garázsok
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
