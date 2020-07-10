CREATE KEYSPACE reviewServer WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'} AND durable_writes = 'true';

USE reviewServer;

CREATE TABLE hotelReviews (
  review_id uuid,
  hotel_name text NOT NULL,
  username text NOT NULL,
  user_avatar text,
  user_city text NOT NULL,
  hotel_name text NOT NULL,
  city text NOT NULL,
  review_date DATE NOT NULL,
  date_of_stay DATE NOT NULL,
  review_body text NOT NULL,
  room_tip text,
  trip_type text,
  overall_rating tinyint NOT NULL,
  value_rating tinyint,
  location_rating tinyint,
  service_rating tinyint,
  rooms_rating tinyint,
  cleanliness_rating tinyint,
  sleep_quality_rating tinyint,
  PRIMARY KEY (hotel_name, review_date)
);

CREATE TABLE userReviews (
  review_id uuid,
  username text NOT NULL,
  hotel_name text NOT NULL,
  user_avatar text,
  user_city text NOT NULL,
  hotel_name text NOT NULL,
  city text NOT NULL,
  review_date DATE NOT NULL,
  date_of_stay DATE NOT NULL,
  review_body text NOT NULL,
  room_tip text,
  trip_type text,
  overall_rating tinyint NOT NULL,
  value_rating tinyint,
  location_rating tinyint,
  service_rating tinyint,
  rooms_rating tinyint,
  cleanliness_rating tinyint,
  sleep_quality_rating tinyint,
  PRIMARY KEY (username, review_date)
);

