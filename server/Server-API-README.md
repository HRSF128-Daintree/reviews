## Server API

### Get all review info for one hotel
  * GET `/hotels/:id`

**Path Parameters:**
  * `id` hotelId

**Success Status Code:** `200`

**Returns:** JSON

```json


[
 {
      "id": "Number",
      "user_id": "Number",
      "hotel_id": "Number",
      "review_date": "Timestamp",
      "review_body": "String",
      "date_of_stay": "Timestamp",
      "room_tip": "String",
      "trip_type": "String",
      "overall_rating": "Number",
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
      "review_helpful_votes": "Number",
      "month_of_stay": "Number",
      "hotel_name": "String",
      "hotel_city": "String",
      "username": "String",
      "user_avatar": "String",
      "user_city": "String",
      "user_contributions": "Number",
      "user_helpful_votes": "Number"
 },
 {
      "id": "Number",
      "user_id": "Number",
      "hotel_id": "Number",
      "review_date": "Timestamp",
      "review_body": "String",
      "date_of_stay": "Timestamp",
      "room_tip": "String",
      "trip_type": "String",
      "overall_rating": "Number",
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
      "review_helpful_votes": "Number",
      "month_of_stay": "Number",
      "hotel_name": "String",
      "hotel_city": "String",
      "username": "String",
      "user_avatar": "String",
      "user_city": "String",
      "user_contributions": "Number",
      "user_helpful_votes": "Number"
 },
 ...
]
```

### Get one review info
  * GET `/reviews/:id`

**Path Parameters:**
  * `id` reviewId

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "user_id": "Number",
      "hotel_id": "Number",
      "review_date": "Timestamp",
      "review_body": "String",
      "date_of_stay": "Timestamp",
      "room_tip": "String",
      "trip_type": "String",
      "overall_rating": "Number",
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
      "review_helpful_votes": "Number"
    }
```

### Add review
  * POST `/reviews`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user_id": "Number", -REQUIRED
      "hotel_id": "Number", -REQUIRED
      "review_date": "Timestamp", -REQUIRED
      "review_body": "String", -REQUIRED
      "date_of_stay": "Timestamp", -REQUIRED
      "room_tip": "String",
      "trip_type": "String",
      "overall_rating": "Number", -REQUIRED
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
      "review_helpful_votes": "Number"
    }
```


### Update restaurant info
  * PATCH `/reviews/:id`

**Path Parameters:**
  * `id` reviewId

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "review_body": "String", *OPTIONAL*
      "room_tip": "String", *OPTIONAL*
      "trip_type": "String", *OPTIONAL*
      "overall_rating": "Number", *OPTIONAL*
      "value_rating": "Number", *OPTIONAL*
      "location_rating": "Number", *OPTIONAL*
      "service_rating": "Number", *OPTIONAL*
      "rooms_rating": "Number", *OPTIONAL*
      "cleanliness_rating": "Number", *OPTIONAL*
      "sleep_quality_rating": "Number", *OPTIONAL*
      "collected_in_part_hotel": "Number", *OPTIONAL*
      "review_helpful_votes": "Number" *OPTIONAL*
    }
```

### Delete restaurant
  * DELETE `/reviews/:id`

**Path Parameters:**
  * `id` reviewId

**Success Status Code:** `204`
