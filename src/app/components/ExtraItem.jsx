"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Link from "next/link";

function formatPrice(price) {
  return new Intl.NumberFormat("hu-HU").format(price || 0);
}

export default function ExtraItem({ product }) {
  const basePrice = product?.basePrice || 0;
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const extras = product?.extras || [];

  useEffect(() => {
    if (!product) return;

    const extrasTotal = selectedExtras.reduce((sum, id) => {
      const extra = extras.find((e) => e.id === id);
      return sum + (extra?.price || 0);
    }, 0);

    setTotalPrice(basePrice + extrasTotal);
  }, [selectedExtras, product, basePrice, extras]);

  const toggleExtra = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const isExtraSelected = (id) => selectedExtras.includes(id);

  if (!product) {
    return <div>Termék betöltése...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image Gallery */}
          <TabGroup className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-4">
                {product.images?.map((image) => (
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
            <TabPanels>
              {product.images?.map((image) => (
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
              Bruttó: {formatPrice(totalPrice)} Ft
            </p>
            <p className="text-sm text-gray-500">
              Alap ár: {formatPrice(basePrice)} Ft
            </p>

            {/* Extras */}
            {extras.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Kiegészítők
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        isExtraSelected(extra.id)
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium text-gray-900">
                          {extra.name}
                        </h4>
                        {isExtraSelected(extra.id) ? (
                          <CheckCircleIcon className="h-6 w-6 text-red-600" />
                        ) : (
                          <XCircleIcon className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {extra.description}
                      </p>
                      <p className="mt-2 text-gray-900 font-medium">
                        + {formatPrice(extra.price)} Ft
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Final Price & CTA */}
            <div className="mt-10 border-t pt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Összesen</h3>
                <p className="text-2xl font-bold text-red-600">
                  {formatPrice(totalPrice)} Ft
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                A végső ár tartalmazza az alapárat és a kiválasztott
                kiegészítőket.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-md bg-red-600 px-6 py-3 text-white text-lg font-medium hover:bg-red-700 transition-colors"
              >
                Felkeresem a DECKBAE csapatát
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
