package com.essen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.essen.model.RestaurantModel;
import com.essen.service.RestaurantService;

@RestController
@RequestMapping("/restaurants")
@CrossOrigin
public class RestaurantController {

	@Autowired
	RestaurantService restaurantService;

	@GetMapping("/")
	public ResponseEntity<List<RestaurantModel>> getRestaurants() {
		return restaurantService.getTrendingRestaurants();

	}

	@GetMapping("/{restaurantId}")
	public ResponseEntity<RestaurantModel> getRestaurantFromId(@PathVariable int restaurantId) {
		return restaurantService.getRestaurant(restaurantId);

	}

	@PutMapping("/{restaurantId}")
	public ResponseEntity<RestaurantModel> editRestaurantDetails(@PathVariable int restaurantId,
			@RequestBody RestaurantModel restaurantModel) {
		restaurantModel.setRestaurantId(restaurantId);
		return restaurantService.editRestaurantDetails(restaurantModel);
	}

	@PostMapping("/")
	public ResponseEntity<Void> createRestaurant(@RequestBody RestaurantModel restaurantModel) {
		return restaurantService.createRestaurant(restaurantModel);

	}

	@DeleteMapping("/{restaurantId}")
	public ResponseEntity<RestaurantModel> deleteRestaurant(@PathVariable int restaurantId) {
		return restaurantService.deleteRestaurant(restaurantId);
	}

	@GetMapping("/locations")
	public ResponseEntity<List<String>> getLocations() {
		return restaurantService.getLocations();
	}

	@GetMapping(value = "/", params = { "searchString", "location" })
	public ResponseEntity<List<RestaurantModel>> searchRestaurants(@RequestParam String searchString, @RequestParam String location) {
		return restaurantService.searchRestaurant(location, searchString);
	}
}
