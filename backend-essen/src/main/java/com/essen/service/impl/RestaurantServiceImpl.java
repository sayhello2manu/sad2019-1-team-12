package com.essen.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.essen.model.RestaurantModel;
import com.essen.repository.RestaurantRepository;
import com.essen.service.RestaurantService;

@Service

public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	RestaurantRepository restaurantRepository;

	@Override
	public ResponseEntity<List<RestaurantModel>> getTrendingRestaurants() {
		List<RestaurantModel> listOfRestaurants = (List<RestaurantModel>) restaurantRepository.findAll();
		listOfRestaurants.stream().limit(10);
		
		return new ResponseEntity<>(listOfRestaurants, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<RestaurantModel> getRestaurant(int restaurantId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<RestaurantModel> editRestaurantDetails(int restaurantId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Void> createRestaurant(RestaurantModel restaurantModel) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<RestaurantModel> deleteRestaurant(int restaurantId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<String>> getLocations() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<List<RestaurantModel>> searchRestaurant(String location, String searchString) {
		// TODO Auto-generated method stub
		return null;
	}

}
