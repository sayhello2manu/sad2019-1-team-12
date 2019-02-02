package com.essen.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.essen.model.RestaurantModel;

public interface RestaurantService {

	public ResponseEntity<List<RestaurantModel>> getTrendingRestaurants();

	public ResponseEntity<RestaurantModel> getRestaurant(int restaurantId);

	public ResponseEntity<Void> createRestaurant(RestaurantModel restaurantModel);

	public ResponseEntity<RestaurantModel> deleteRestaurant(int restaurantId);

	public ResponseEntity<List<String>> getLocations();

	public ResponseEntity<List<RestaurantModel>> searchRestaurant(String location, String searchString);

	ResponseEntity<RestaurantModel> editRestaurantDetails(RestaurantModel restaurantModel);

}
