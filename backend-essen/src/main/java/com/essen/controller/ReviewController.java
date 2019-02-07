package com.essen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.essen.model.ReviewsModel;
import com.essen.service.ReviewService;

@RestController
@RequestMapping("/reviews")
@CrossOrigin
public class ReviewController {
	@Autowired
	ReviewService reviewsService;

	@GetMapping("/{restaurantId}")
	public ResponseEntity<List<ReviewsModel>> getReview(@PathVariable int restaurantId) {
		return reviewsService.getRestaurantReviews(restaurantId);

	}

	@PostMapping("/")
	public ResponseEntity<Void> createReview(@RequestBody ReviewsModel reviewModel) {
		return reviewsService.createRestaurantReviews(reviewModel);

	}

	@DeleteMapping("/{restaurantId}")
	public ResponseEntity<Void> deleteRestaurantReviews(@PathVariable int restaurantId) {
		return reviewsService.deleteRestaurantReviews(restaurantId);
	}

	@GetMapping("/average/{restaurantId}")
	public ResponseEntity<Double> getAverageRating(@PathVariable int restaurantId) {
		return reviewsService.getAverageRating(restaurantId);
	}
}
