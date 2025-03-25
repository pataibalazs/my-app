export const products = {
  "santa-cruz": {
    name: "Santa Cruz",
    basePrice: 29380000,
    priceDisplay: "Bruttó: 29.380.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/santa-cruz/haz.png",
        alt: "Ház",
      },
      {
        id: 2,
        name: "Terv",
        src: "/pictures/houses/santa-cruz/terv.png",
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
        name: "Wellness részleg",
        price: 3500000,
        description: "Szauna és jakuzzi beépítése",
      },
      {
        id: 2,
        name: "Napelemes rendszer",
        price: 2800000,
        description: "6kW teljesítményű rendszer tetőre szerelve",
      },
      {
        id: 3,
        name: "Prémium konyha",
        price: 1500000,
        description: "Prémium konyhagépek és gránit munkapult",
      },
    ],
  },

  oslo: {
    name: "Oslo",
    basePrice: 39900000,
    priceDisplay: "Bruttó: 39.900.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/oslo/haz.png",
        alt: "Ház külső nézete",
      },
      {
        id: 2,
        name: "Minta",
        src: "/pictures/houses/oslo/minta.png",
        alt: "Minta alaprajz",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    extras: [
      {
        id: 1,
        name: "Házcsatlakozású garázs",
        price: 4500000,
        description: "Saját bejáratú garázs a házhoz csatlakozva",
      },
      {
        id: 2,
        name: "Hőszivattyús fűtés",
        price: 2300000,
        description: "Energiahatékony levegő-víz hőszivattyús rendszer",
      },
      {
        id: 3,
        name: "Napelemes rendszer",
        price: 3200000,
        description: "8kW teljesítményű napelemes rendszer",
      },
    ],
  },

  montana: {
    name: "Montana",
    basePrice: 38650000,
    priceDisplay: "Bruttó 38.650.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/montana/haz.png",
        alt: "Ház külső nézete",
      },
      {
        id: 2,
        name: "Minta",
        src: "/pictures/houses/montana/minta.png",
        alt: "Minta alaprajz",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    extras: [
      {
        id: 1,
        name: "James Hardie falburkolat",
        price: 1800000,
        description: "Időtálló, esztétikus James Hardie burkolat",
      },
      {
        id: 2,
        name: "Fa padlóburkolat",
        price: 950000,
        description: "Természetes fa padlóburkolat az egész házban",
      },
      {
        id: 3,
        name: "Emelt belmagasság",
        price: 1200000,
        description: "3 méteres belmagasság a 2,7 méteres helyett",
      },
    ],
  },

  dallas: {
    name: "Dallas",
    basePrice: 47300000,
    priceDisplay: "Bruttó 47.300.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/dallas/haz.png",
        alt: "Ház külső nézete",
      },
      {
        id: 2,
        name: "Terv",
        src: "/pictures/houses/dallas/terv.png",
        alt: "Alaprajz",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    extras: [
      {
        id: 1,
        name: "Természetes kőburkolat",
        price: 2800000,
        description: "Prémium kőburkolat a homlokzatra",
      },
      {
        id: 2,
        name: "Hőszivattyús rendszer",
        price: 3500000,
        description: "Teljes körű padlófűtéssel és hőszivattyúval",
      },
      {
        id: 3,
        name: "Prémium konyha csomag",
        price: 2100000,
        description: "High-end konyhai berendezések és gépek",
      },
    ],
  },

  helsinki: {
    name: "Helsinki",
    basePrice: 59200000,
    priceDisplay: "Bruttó 59.200.000-től",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Ház",
        src: "/pictures/houses/helsinki/haz.png",
        alt: "Ház külső nézete",
      },
      {
        id: 2,
        name: "Terv",
        src: "/pictures/houses/helsinki/terv.png",
        alt: "Alaprajz",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    extras: [
      {
        id: 1,
        name: "Prémium teraszburkolat",
        price: 1800000,
        description: "Thermo kőris vagy tölgy teraszburkolat",
      },
      {
        id: 2,
        name: "Napelemes rendszer",
        price: 4200000,
        description: "10kW teljesítményű rendszer teljes tetőfedéssel",
      },
      {
        id: 3,
        name: "Smart home rendszer",
        price: 2500000,
        description: "Teljes otthonautomatizálás és távirányítás",
      },
    ],
  },
};
