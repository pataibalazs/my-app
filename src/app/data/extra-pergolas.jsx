export const products = {
  malibu: {
    name: "Malibu",
    basePrice: 739000,
    priceDisplay: "Bruttó: 739.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/pergolas/malibu/haz1.png",
        alt: "Ház",
      },
      {
        id: 2,
        name: "Terv",
        src: "/pictures/pergolas/malibu/haz2.png",
        alt: "Terv",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    ],
    extras: [
      {
        id: 1,
        name: "LED világítási rendszer",
        price: 120000,
        description: "Beépített LED világítás a teljes szerkezetben",
      },
      {
        id: 2,
        name: "Polikarbonát tetőfedés",
        price: 180000,
        description: "UV-álló, átlátszó polikarbonát tetőpanelek",
      },
      {
        id: 3,
        name: "Méretbővítés",
        price: 150000,
        description: "4m x 4m-re bővített alapterület",
      },
    ],
  },

  "malibu-xl": {
    name: "Malibu XL",
    basePrice: 1189000,
    priceDisplay: "Bruttó: 1.189.000-től",
    rating: 5,
    images: [
      {
        id: 1,
        name: "Malibu XL",
        src: "/pictures/pergolas/malibu-xl/haz1.png",
        alt: "Malibu XL",
      },
      {
        id: 2,
        name: "Malibu XL",
        src: "/pictures/pergolas/malibu-xl/haz2.png",
        alt: "Malibu XL",
      },
    ],
    colors: [
      {
        name: "Dark Brown",
        bgColor: "bg-stone-700",
        selectedColor: "ring-stone-700",
      },
    ],
    extras: [
      {
        id: 1,
        name: "Prémium LED világítás",
        price: 220000,
        description: "RGB LED szalagok távirányítóval",
      },
      {
        id: 2,
        name: "Árnyékoló vászon",
        price: 280000,
        description: "Vízálló, kihúzható árnyékoló vászon",
      },
      {
        id: 3,
        name: "Extra méret",
        price: 350000,
        description: "8m x 4m-re bővített kivitel",
      },
    ],
  },

  yukon: {
    name: "Yukon",
    basePrice: 1459000,
    priceDisplay: "Bruttó: 1.459.000-től",
    rating: 5,
    images: [
      {
        id: 1,
        name: "Yukon",
        src: "/pictures/pergolas/yukon/haz1.png",
        alt: "Yukon",
      },
    ],
    colors: [
      {
        name: "Natural Wood",
        bgColor: "bg-amber-700",
        selectedColor: "ring-amber-700",
      },
    ],
    extras: [
      {
        id: 1,
        name: "Cseréptető",
        price: 420000,
        description: "Prémium minőségű cseréptetős kivitel",
      },
      {
        id: 2,
        name: "Kőburkolatos oszlopok",
        price: 380000,
        description: "Természetes kővel burkolt oszlopok",
      },
      {
        id: 3,
        name: "Járólapozott padló",
        price: 350000,
        description: "Választható csempe vagy kőburkolat",
      },
    ],
  },

  "saint-tropez": {
    name: "Saint-Tropez",
    basePrice: 859000,
    priceDisplay: "Bruttó: 859.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Saint-Tropez",
        src: "/pictures/pergolas/saint-tropez/haz1.png",
        alt: "Saint-Tropez",
      },
      {
        id: 2,
        name: "Saint-Tropez",
        src: "/pictures/pergolas/saint-tropez/haz2.png",
        alt: "Saint-Tropez",
      },
    ],
    colors: [
      {
        name: "Dark Brown",
        bgColor: "bg-neutral-800",
        selectedColor: "ring-neutral-800",
      },
    ],
    extras: [
      {
        id: 1,
        name: "Bővített méret",
        price: 320000,
        description: "8m x 4m-re bővített kivitel",
      },
      {
        id: 2,
        name: "Polikarbonát tetőfedés",
        price: 240000,
        description: "UV-álló, átlátszó polikarbonát tetőpanelek",
      },
      {
        id: 3,
        name: "LED világítás csomag",
        price: 180000,
        description: "Beépített LED szalagok és spotlámpák",
      },
    ],
  },
};
