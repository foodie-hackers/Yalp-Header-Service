const data = [
  { id: 1, name: 'Tacorea' },
  { id: 2, name: 'Golden Boy Pizza' },
  { id: 3, name: 'Hot Sauce and Panko' },
  { id: 4, name: 'El Farolito' },
  { id: 5, name: 'Volcano' },
  { id: 6, name: 'The Bird' },
  { id: 7, name: 'Pacific Eatery' },
  { id: 8, name: 'Super Duper Burgers' },
  { id: 9, name: 'Yamo' },
  { id: 10, name: 'Fayala' },
  { id: 11, name: 'Sam Wo Restaurant' },
  { id: 12, name: 'Street Taco' },
  { id: 13, name: 'Tselogs' },
  { id: 14, name: 'DragonEats' },
  { id: 15, name: 'Bite' },
  { id: 16, name: 'Tacos Club' },
  { id: 17, name: 'Grubbin' },
  { id: 18, name: 'Tu Lan' },
  { id: 19, name: 'Mae Krua' },
  { id: 20, name: 'The View Cafe' },
  { id: 21, name: 'Crepes A Go Go' },
  { id: 22, name: 'Tempest' },
  { id: 23, name: 'Kebab King' },
  { id: 24, name: 'Urban Ritual' },
  { id: 25, name: 'Taboun' },
  { id: 26, name: 'Hops & Hominy' },
  { id: 27, name: 'Barbacco' },
  { id: 28, name: 'Barcha' },
  { id: 29, name: 'Sauce - Belden' },
  { id: 30, name: 'Per Diem' },
  { id: 31, name: 'Lao Table' },
  { id: 32, name: 'RM 212' },
  { id: 33, name: 'Tropisueño' },
  { id: 34, name: 'Akiko’s Restaurant' },
  { id: 35, name: 'Caffe Macaroni' },
  { id: 36, name: 'La Fusión' },
  { id: 37, name: 'Takoba SF' },
  { id: 38, name: 'Fog Harbor Fish House' },
  { id: 39, name: 'Izakaya Yoki' },
  { id: 40, name: 'The Pink Elephant Alibi' },
  { id: 41, name: 'Marlowe' },
  { id: 42, name: 'Hogwash' },
  { id: 43, name: 'Bask' },
  { id: 44, name: 'Archive Bar & Kitchen' },
  { id: 45, name: 'Barbarossa Lounge' },
  { id: 46, name: 'Delarosa' },
  { id: 47, name: 'E&O Kitchen and Bar' },
  { id: 48, name: 'The Barrel Room' },
  { id: 49, name: 'Aquitaine' },
  { id: 50, name: 'Matko' },
  { id: 51, name: 'Wayfare Tavern' },
  { id: 52, name: 'Kokkari Estiatorio' },
  { id: 53, name: 'Hakkasan' },
  { id: 54, name: 'Trestle' },
  { id: 55, name: 'The House' },
  { id: 56, name: 'International Smoke' },
  { id: 57, name: 'The Fly Trap' },
  { id: 58, name: 'Bluestem Brasserie' },
  { id: 59, name: 'BIX' },
  { id: 60, name: 'Cotogna' },
  { id: 61, name: 'Perbacco' },
  { id: 62, name: 'Nico' },
  { id: 63, name: 'Mourad Restaurant' },
  { id: 64, name: '5A5 Steak Lounge' },
  { id: 65, name: 'Prospect' },
  { id: 66, name: 'Trou Normand' },
  { id: 67, name: 'The Rotunda' },
  { id: 68, name: 'Pabu' },
  { id: 69, name: 'Cockscomb' },
  { id: 70, name: 'Tadich Grill' },
  { id: 71, name: 'Gaspar Brasserie' },
  { id: 72, name: 'Cafe Claude' },
  { id: 73, name: 'Town Hall' },
  { id: 74, name: 'Salt House' },
  { id: 75, name: 'Bouche' },
  { id: 76, name: 'Kusakabe' },
  { id: 77, name: 'Gary Danko' },
  { id: 78, name: 'Californios' },
  { id: 79, name: 'Acquerello' },
  { id: 80, name: 'Ju-ni' },
  { id: 81, name: 'Lazy Bear' },
  { id: 82, name: 'Benu' },
  { id: 83, name: 'Ijji Sushi' },
  { id: 84, name: 'OzaOza' },
  { id: 85, name: 'Omakase' },
  { id: 86, name: 'Hinata' },
  { id: 87, name: 'Wako Japanese Restaurant' },
  { id: 88, name: 'Atelier Crenn' },
  { id: 89, name: 'Khai' },
  { id: 90, name: 'Keiko à Nob Hill' },
  { id: 91, name: 'Quince' },
  { id: 92, name: 'Roka Akor' },
  { id: 93, name: 'Kiss Seafood' },
  { id: 94, name: 'An Japanese Restaurant' },
  { id: 95, name: 'Spruce' },
  { id: 96, name: 'Alexander\'s Steakhouse' },
  { id: 97, name: 'Sons & Daughters' },
  { id: 98, name: 'Boulevard' },
  { id: 99, name: 'Eight Tables by George Chen' },
  { id: 100, name: 'Jardiniere' },
];

// add reviewCount, averageRating and priceRange to each restuarant
const generateProps = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i].reviewCount = Math.floor(Math.random() * 1000);
    array[i].averageRating = (Math.floor(Math.random() * 9) * 0.5) + 1;
    array[i].priceRange = Math.floor(Math.random() * 4) + 1;
  }
};

generateProps(data);

const generateQueries = (array) => {
  const queries = [];
  for (let i = 0; i < array.length; i += 1) {
    queries.push(`INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('${array[i].name}', ${array[i].reviewCount}, ${array[i].averageRating}, ${array[i].priceRange});`);
  }

  return queries;
};

generateQueries(data);
