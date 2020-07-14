CREATE KEYSPACE reviewServer WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE reviewServer;

CREATE TABLE hotelReviews (
  review_id uuid,
  hotel_name text,
  username text,
  email text,
  user_city text,
  hotel_city text,
  review_date DATE,
  date_of_stay DATE,
  review_body text,
  trip_type text,
  overall_rating tinyint,
  value_rating tinyint,
  location_rating tinyint,
  PRIMARY KEY (hotel_name, review_date)
);

CREATE TABLE userReviews (
  review_id uuid,
  hotel_name text,
  username text,
  email text,
  user_city text,
  hotel_city text,
  review_date DATE,
  date_of_stay DATE,
  review_body text,
  trip_type text,
  overall_rating tinyint,
  value_rating tinyint,
  location_rating tinyint,
  PRIMARY KEY (username, review_date)
);

