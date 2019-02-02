package com.essen.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
		List<String> listOfLocations = new ArrayList<>();
		listOfLocations.add("Heidelberg HBF");
		listOfLocations.add("Bismark Platz");
		listOfLocations.add("Heidelberg Altstad");
		listOfLocations.add("SRH Campus");
		// Query to get all the locations as list or set. Should return a unique list
		// of locations
		return new ResponseEntity<>(listOfLocations, HttpStatus.OK);
	}

	@GetMapping(value = "/", params = { "searchString", "location" })
	public List<RestaurantModel> searchRestaurants(@RequestParam String searchString, @RequestParam String location) {
		List<RestaurantModel> list = new ArrayList<>();
		RestaurantModel model = new RestaurantModel();
		model.setRestaurantId(11);
		model.setRestaurantLocation("Heidelberg");
		model.setRestaurantName("Raja Rani In SEARCH");
		model.setRestaurantAddress("Prof. Kehrer Str 9");
		model.setRestaurantContactNo("31232323");
		model.setRestaurantCategory("Indian Fine Dine");
		model.setRestaurantExpense(50);
		list.add(model);
		RestaurantModel model1 = new RestaurantModel();
		model1.setRestaurantId(12);
		model1.setRestaurantLocation("Bismark Platz SEARCH");
		model1.setRestaurantName("Arbil");
		model1.setRestaurantAddress("Berliner Str 10");
		model1.setRestaurantContactNo("31232323");
		model1.setRestaurantCategory("Lebanese and Doner");
		model1.setRestaurantExpense(10);
		list.add(model1);
		return list;
	}
}
