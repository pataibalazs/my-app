// data/products.js
export const products = {
  "santa-cruz": {
    name: "Santa Cruz",
    price: "Bruttó: 29.380.000-től",
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
    description: `
    <p>Ez a letisztult, modern ihletésű könnyűszerkezetes ház tökéletes választás azok számára,
akik kényelmet és nyugalmat szeretnének otthonukban, elérhető áron. A tágas, világos
terek, a természetközeli kialakítás és az opcionálisan választható wellness részleg
garantálják a pihenést és feltöltődést a mindennapokban. Ez az otthon lehetőséget kínál arra, hogy saját wellness részleggel élvezd a
mindennapi pihenést, elérhető áron. Tökéletes hétvégi háznak, állandó otthonnak
vagy befektetésnek. Lépj kapcsolatba velünk további információért!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Tágas és világos belső tér nagyméretű üvegfelületekkel.",
          "Három oldalas kandalló a meghitt hangulatért.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Opcionális fűtési rendszer: hőszivattyú, gázkazán vagy klíma.",
          "Nagy amerikai konyha prémium kivitelben, háztartási gépek csak csomagban elérhetőek.",
          "Külön nyári konyha pulttal és mosogatóval a kültéri kényelmet szolgálva.",
          "SPC padlóburkolat, opcionálisan fa burkolat választható.",
          "Wellness élmény otthon: medence alapterv kérésre elérhető, vagy akár szaunával, jakuzzival kiegészíthető.",
          "Alapfelszereltségként kültéri zuhanyzó a maximális komfortért.",
          "Napelemes rendszer opcionálisan választható.",
          "Akár wellness házzá is alakítható, a szoba megszüntetésével.",
        ],
      },
    ],
  },

  oslo: {
    name: "Oslo",
    price: "Bruttó: 39.900.000-től",
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
    description: `
    <p>Ez a kompakt, mégis tágas könnyűszerkezetes ház ötvözi a modern minimalizmust és a
klasszikus vidéki hangulatot. A letisztult fekete külső burkolat, a fedett veranda és a
természetes anyagok meleg, otthonos légkört teremtenek.
Elegáns, modern és energiatakarékos otthon – tökéletes választás családoknak vagy
nyaralónak!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Standard kivitelű amerikai konyha.",
          "Prémium kivitelű konyha opcionálisan választható.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Látszó bontott gerendák a természetes hangulatért.",
          "2,7 m alap belmagasság, opcionálisan 3 méter.",
          "Sima fatüzelésű kandalló a nappaliban.",
          "Opciósan cseréptető a fém tető helyett.",
          "SPC padlóburkolat, opcionálisan fa burkolat.",
          "Háztartási gépek csak csomagban elérhetőek.",
          "Opcionálisan választható fűtési rendszer: hőszivattyú, gázkazán vagy klíma.",
          "Festett fa burkolat (Borovi fenyő), opcionálisan James Hardie falburkolattal.",
          "Opcionálisan napelemes rendszerrel is elérhető.",
          "Opcionális házcsatlakozású garázs.",
          "Opcionális fedett hátsó terasz a még nagyobb kényelemért.",
        ],
      },
    ],
  },

  montana: {
    name: "Montana",
    price: "Bruttó 38.650.000-től",
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
    description: `
    <p>Ez a modern, mégis meleg és otthonos könnyűszerkezetes ház tökéletes választás
azoknak, akik értékelik a természetes anyagokat és az energiahatékony megoldásokat. A
látszó bontott gerendák, a tágas amerikai konyha és a nagy nyílászárók világos,
barátságos életteret biztosítanak.
Kiváló választás otthonnak vagy nyaralónak – modern megoldásokkal és természetközeli
stílussal!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Standard kivitelű amerikai konyha.",
          "Prémium kivitelű konyha opcionálisan választható.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Látszó bontott gerendák a természetes hangulatért.",
          "2,7 m alap belmagasság, opcionálisan 3 méter.",
          "Opciósan cseréptető a fém tető helyett.",
          "SPC padlóburkolat, opcionálisan fa burkolat.",
          "Háztartási gépek csak csomagban elérhetőek.",
          "Opcionálisan választható fűtési rendszer: hőszivattyú, gázkazán vagy klíma.",
          "Festett fa burkolat, opcionálisan James Hardie falburkolattal.",
          "Opcionálisan napelemes rendszerrel is elérhető.",
        ],
      },
    ],
  },

  dallas: {
    name: "Dallas",
    price: "Bruttó 47.300.000-től",
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
    description: `
    <p>Ez a lenyűgöző, kő-tégla és faelemekkel díszített könnyűszerkezetes ház ötvözi a
klasszikus vidéki stílust a modern kényelemmel. A nagy fedett terasz, a tágas
nyílászárók és a természetközeli kialakítás ideális otthont biztosítanak egész évben.
Tökéletes választás családi otthonnak, nyaralónak vagy befektetésnek. Kérjen további
információt!</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Könnyűszerkezetes, energiahatékony kivitelezés.",
          "Tágas, világos belső terek nagyméretű ablakokkal.",
          "Fedett terasz pihenősarokkal és természetközeli hangulattal.",
          "Opcionális burkolatok: bontott tégla, fa burkolat.",
          "Beton járófelület a teraszon.",
          "Nappaliban kazettás mennyezet, egyedi hangulatos LED világítással.",
          "A látszó szerkezeti elem bontott gerenda és oszlopokhoz a szebb struktúra érdekében.",
          "Alap Klímás fűtés-hűtés, alap elektromos padlófűtés a fürdőszobában.",
          "Opcionálisan választható fűtési rendszerek: hőszivattyú, gázkazán, padlófűtés.",
          "Természetes kőburkolat választható a homlokzatra és teraszra.",
          "Cseréptető a hagyományos, időtálló megjelenésért.",
          "Opcionálisan hagyományos csomagban szigetelt és színezett nemes vakolat külső burkolat.",
          "SPC padlóburkolat, opcionálisan fa burkolat választható.",
          "Nagy amerikai konyha prémium kivitelben, háztartási gépek csak csomagban elérhetőek.",
          "Opcionálisan napelemes rendszerrel is elérhető.",
        ],
      },
    ],
  },

  helsinki: {
    name: "Helsinki",
    price: "Bruttó 59.200.000-től",
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
    description: `
    <p>Ez a stílusos, modern könnyűszerkezetes ház tökéletes választás azok számára, akik
kényelmes, energiahatékony és természetközeli otthonra vágynak. A letisztult,
skandináv ihletésű dizájn, a nagy üvegfelületek és a minőségi anyagok garantálják a
kellemes lakóérzetet.</p>
  `,
    details: [
      {
        name: "Tulajdonságok",
        items: [
          "Tágas és világos belső tér nagyméretű nyílászárókkal és nagy belmagassággal.",
          "Fatüzelésű kandalló a meghitt hangulatért.",
          "Klímás fűtés-hűtés, elektromos padlófűtés a fürdőszobában.",
          "Opcionálisan választható fűtési rendszer: hőszivattyú, gázkazán vagy klíma.",
          "Opcionálisan választható Nagy amerikai konyha prémium kivitelben, háztartási gépekkel.",
          "SPC padlóburkolat, opcionálisan fa burkolat választható.",
          "Thermo fenyő burkolat elöl és hátul, természetes, időtálló megjelenéssel.",
          "Premium teraszburkolatok választhatók: thermo kőris és tölgy.",
          "Opcionálisan napelemes rendszerrel is elérhető.",
        ],
      },
    ],
  },
};
