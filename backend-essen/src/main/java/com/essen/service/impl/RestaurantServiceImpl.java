package com.essen.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
		
		if (listOfRestaurants.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(listOfRestaurants, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<RestaurantModel> getRestaurant(int restaurantId) {

		if (restaurantRepository.findById(restaurantId).isPresent())
			return new ResponseEntity<>(restaurantRepository.findById(restaurantId).get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@Override
	public ResponseEntity<RestaurantModel> editRestaurantDetails(RestaurantModel restaurantModel) {
		restaurantRepository.save(restaurantModel);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@Override
	public ResponseEntity<Void> createRestaurant(RestaurantModel restaurantModel) {
		restaurantRepository.save(restaurantModel);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<RestaurantModel> deleteRestaurant(int restaurantId) {
		
		restaurantRepository.deleteById(restaurantId);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@Override
	public ResponseEntity<List<String>> getLocations() {
		List<RestaurantModel> listOfRestaurants = (List<RestaurantModel>) restaurantRepository.findAll();
		List<String> locations = new ArrayList<String>();
		listOfRestaurants.forEach(restaurant ->{
			locations.add(restaurant.getRestaurantLocation());
		});
		
		return new ResponseEntity<>(locations.stream().distinct().collect(Collectors.toList()), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<RestaurantModel>> searchRestaurant(String location, String searchString) {
		// TODO Auto-generated method stub
		return null;
	}

}
