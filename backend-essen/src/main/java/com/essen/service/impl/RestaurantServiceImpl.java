package com.essen.service.impl;

import java.util.List;
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
		if (listOfRestaurants.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(listOfRestaurants.stream().limit(10).collect(Collectors.toList()),
					HttpStatus.OK);
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
		List<String> locations = listOfRestaurants.stream().
				map(RestaurantModel::getRestaurantLocation).
				collect(Collectors.toList()).
				stream().
				distinct().collect(Collectors.toList());
		if (locations.isEmpty())
			return new ResponseEntity<>(HttpStatus.OK);
		else
			return new ResponseEntity<>(locations, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<List<RestaurantModel>> searchRestaurant(String location, String searchString) {
		List<RestaurantModel> restaurants = restaurantRepository.searchRestaurant(searchString, location);
		if (restaurants.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(restaurants, HttpStatus.OK);
			
	}

}
