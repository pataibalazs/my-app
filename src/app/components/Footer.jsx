import Link from "next/link";

const navigation = {
  main: [
    { name: "Főoldal", href: "/" },
    { name: "Termékek", href: "/" },
    { name: "Kiegészítések", href: "/" },
    { name: "Csapat", href: "/teams" },
    { name: "Rólunk", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href} // ✅ Changed from 'to' to 'href'
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          <div className="flex items-center flex-none">
            <Link href="/" className="no-underline mt-5">
              <img
                src="/pictures/logo_wo_bg.png"
                alt="DECKBAE Logo"
                className="h-10 w-auto hover:h-11 transition-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} DECKBAE Kft. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
