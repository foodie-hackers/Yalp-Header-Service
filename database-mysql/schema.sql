DROP DATABASE IF EXISTS yalp_header;

CREATE DATABASE yalp_header;

USE yalp_header;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  reviewCount int NOT NULL,
  averageRating decimal(2,1) NOT NULL,
  priceRange smallint NOT NULL,
  PRIMARY KEY (id)
);

INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tacorea', 486, 1.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Golden Boy Pizza', 976, 4, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Hot Sauce and Panko', 571, 3.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('El Farolito', 762, 1.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Volcano', 111, 4.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The Bird', 608, 1, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Pacific Eatery', 154, 1, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Super Duper Burgers', 835, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Yamo', 106, 2.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Fayala', 71, 4, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Sam Wo Restaurant', 372, 4.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Street Taco', 419, 3, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tselogs', 497, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('DragonEats', 531, 5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Bite', 181, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tacos Club', 618, 5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Grubbin', 880, 3, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tu Lan', 605, 4.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Mae Krua', 147, 2, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The View Cafe', 685, 1.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Crepes A Go Go', 318, 1.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tempest', 931, 4.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Kebab King', 459, 3, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Urban Ritual', 746, 3, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Taboun', 138, 1, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Hops & Hominy', 351, 1.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Barbacco', 863, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Barcha', 761, 2, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Sauce - Belden', 923, 3, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Per Diem', 696, 4.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Lao Table', 24, 5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('RM 212', 766, 1.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tropisueño', 853, 1.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Akiko’s Restaurant', 191, 4, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Caffe Macaroni', 8, 4, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('La Fusión', 965, 3.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Takoba SF', 951, 1, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Fog Harbor Fish House', 372, 4.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Izakaya Yoki', 973, 3.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The Pink Elephant Alibi', 381, 3, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Marlowe', 172, 2, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Hogwash', 775, 3.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Bask', 725, 3, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Archive Bar & Kitchen', 573, 5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Barbarossa Lounge', 790, 2.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Delarosa', 807, 2.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('E&O Kitchen and Bar', 637, 2, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The Barrel Room', 729, 1.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Aquitaine', 457, 4.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Matko', 516, 1, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Wayfare Tavern', 80, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Kokkari Estiatorio', 137, 4.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Hakkasan', 885, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Trestle', 35, 3, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The House', 722, 3.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('International Smoke', 88, 5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The Fly Trap', 903, 3.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Bluestem Brasserie', 949, 2.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('BIX', 620, 3.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Cotogna', 267, 1, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Perbacco', 218, 4.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Nico', 546, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Mourad Restaurant', 30, 2, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('5A5 Steak Lounge', 471, 5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Prospect', 123, 4, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Trou Normand', 988, 4, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('The Rotunda', 953, 3.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Pabu', 37, 3.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Cockscomb', 264, 1.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Tadich Grill', 36, 3, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Gaspar Brasserie', 712, 2, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Cafe Claude', 973, 4.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Town Hall', 78, 4, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Salt House', 95, 3.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Bouche', 359, 2.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Kusakabe', 260, 1.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Gary Danko', 571, 5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Californios', 198, 1.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Acquerello', 218, 2.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Ju-ni', 673, 1.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Lazy Bear', 977, 2.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Benu', 864, 2, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Ijji Sushi', 830, 5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('OzaOza', 134, 3.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Omakase', 211, 5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Hinata', 847, 4.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Wako Japanese Restaurant', 65, 1, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Atelier Crenn', 252, 4, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Khai', 186, 1.5, 1);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Keiko à Nob Hill', 257, 5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Quince', 210, 4.5, 3);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Roka Akor', 923, 3.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Kiss Seafood', 508, 4.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('An Japanese Restaurant', 432, 3, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Spruce', 77, 3, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Alexander\'s Steakhouse', 311, 1, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Sons & Daughters', 202, 1.5, 2);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Boulevard', 964, 4, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Eight Tables by George Chen', 599, 2.5, 4);
INSERT into restaurants (name, reviewCount, averageRating, priceRange) VALUES ('Jardiniere', 355, 1, 2);
