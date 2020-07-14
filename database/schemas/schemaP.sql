DROP DATABASE IF EXISTS reviewServer;

CREATE DATABASE reviewServer;

CREATE TABLE reviews (
  id SERIAL,
  user_id integer NOT NULL REFERENCES users(user_id),
  hotel_id integer NOT NULL REFERENCES hotels(hotel_id),
  review_date DATE NOT NULL,
  date_of_stay DATE NOT NULL,
  review_body text NOT NULL,
  trip_type text,
  overall_rating smallint NOT NULL,
  value_rating smallint,
  location_rating smallint,
  PRIMARY KEY (id, user_id, hotel_id)
);

/* maybe add constraints for all? */
/* inheritance could be a possiblity */

CREATE TABLE hotels (
  hotel_id SERIAL PRIMARY KEY,
  hotel_name varchar(40) NOT NULL,
  city varchar(15) NOT NULL
);


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username varchar(40) NOT NULL,
  email varchar(40) NOT NULL,
  user_city varchar(15) NOT NULL,
);

