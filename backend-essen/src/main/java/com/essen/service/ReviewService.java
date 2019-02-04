package com.essen.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.essen.model.ReviewsModel;

public interface ReviewService {
	
public ResponseEntity<List<ReviewsModel>> getRestaurantReviews(int restaurantId);

public ResponseEntity<Void> createRestaurantReviews(ReviewsModel ReviewsModel);

public ResponseEntity<ReviewsModel> deleteRestaurantReviews(int restaurantId);

}
