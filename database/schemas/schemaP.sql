DROP DATABASE IF EXISTS reviewServer;

CREATE DATABASE reviewServer;

CREATE TABLE reviews (
  id SERIAL,
  user_id integer NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  hotel_id integer NOT NULL REFERENCES hotels(hotel_id) ON DELETE CASCADE,
  review_date DATE NOT NULL,
  date_of_stay DATE NOT NULL,
  review_body varchar(200) NOT NULL,
  room_tip varchar(140),
  trip_type varchar(60),
  overall_rating smallint NOT NULL,
  CHECK (overall_rating > 0 AND overall_rating < 6),
  value_rating smallint,
  location_rating smallint,
  service_rating smallint,
  rooms_rating smallint,
  cleanliness_rating smallint,
  sleep_quality_rating smallint,
  PRIMARY KEY (id, user_id, hotel_id)
);

/* maybe add constraints for all? */
/* inheritance could be a possiblity */

CREATE TABLE hotels (
  hotel_id SERIAL PRIMARY KEY,
  hname varchar(40) NOT NULL,
  city varchar(15) NOT NULL
);


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username varchar(50) NOT NULL,
  user_avatar varchar(150),
  user_city varchar(15) NOT NULL,
/*  user_contributions int DEFAULT 0, */
);

