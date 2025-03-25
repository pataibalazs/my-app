import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Item({ product }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Thumbnails */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-4">
                {product.images.map((image) => (
                  <Tab key={image.id} className="relative cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-md object-cover"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            {/* Main images */}
            <TabPanels>
              {product.images.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-video w-full object-cover sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <p className="text-3xl tracking-tight text-gray-900 mt-2">
              {product.price}
            </p>

            <div
              className="mt-6 space-y-6 text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <div className="mt-6">
              <Link
                href="/contact"
                className="block w-full rounded-md bg-green-600 px-6 py-3 text-center text-lg font-medium text-white hover:bg-green-500 transition-colors duration-200"
              >
                Kiegészítések
              </Link>
            </div>

            <section className="mt-12">
              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((section) => (
                  <Disclosure key={section.name} as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-lg font-medium text-gray-900 group-data-open:text-red-600">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-open:hidden"
                            aria-hidden="true"
                          />
                          <MinusIcon
                            className="hidden h-6 w-6 text-red-500 group-hover:text-red-600 group-data-open:block"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pb-6">
                      <ul className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-red-600">
                        {section.items.map((item, index) => (
                          <li key={index} className="pl-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
