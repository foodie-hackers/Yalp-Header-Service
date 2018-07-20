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