package com.essen.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.essen.model.RestaurantModel;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin
public class RestaurantController {

	@GetMapping("/all")
	public List<RestaurantModel> getRestaurants() {
		List<RestaurantModel> list = new ArrayList<>();

		RestaurantModel model = new RestaurantModel();
		model.setRestaurantId(11);
		model.setRestaurantLocation("Heidelberg");
		model.setRestaurantName("Raja Rani");
		list.add(model);
		RestaurantModel model1 = new RestaurantModel();
		model1.setRestaurantId(11);
		model1.setRestaurantLocation("Bismark Platz");
		model1.setRestaurantName("Arbil");
		list.add(model1);
		return list;
	}

	@GetMapping("/{restaurantId}")
	public RestaurantModel getRestaurantFromId(@PathVariable String restaurantId) {
		List<RestaurantModel> list = new ArrayList<>();

		RestaurantModel model = new RestaurantModel();
		model.setRestaurantId(11);
		model.setRestaurantLocation("Heidelberg");
		model.setRestaurantName("Raja Rani");
		list.add(model);
		RestaurantModel model1 = new RestaurantModel();
		model1.setRestaurantId(11);
		model1.setRestaurantLocation("Bismark Platz");
		model1.setRestaurantName("Arbil");
		list.add(model1);

		return model;
	}

	@PutMapping("/edit/{restaurantId}")
	public RestaurantModel editRestaurantDetails(@PathVariable String restaurantId,
			@RequestBody RestaurantModel restaurantModel) {
		RestaurantModel model = new RestaurantModel();
		model.setRestaurantId(11);
		model.setRestaurantLocation("Heidelberg");
		model.setRestaurantName("Raja Rani");
		
		return model;
	}

	@PostMapping("/create")
	public RestaurantModel createRestaurant(@RequestBody RestaurantModel restaurantModel) {
		return restaurantModel;
	}

	@PostMapping("/delete/{restaurantId}")
	public void deleteRestaurant() {
	}
}
