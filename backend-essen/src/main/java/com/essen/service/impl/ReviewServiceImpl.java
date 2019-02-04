package com.essen.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.essen.model.ReviewsModel;
import com.essen.repository.RestaurantRepository;
import com.essen.repository.ReviewRepository;
import com.essen.service.ReviewService;

@Service

public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@Override
	public ResponseEntity<List<ReviewsModel>> getRestaurantReviews(int restaurantId) {
		
		reviewRepository.findById(restaurantId);
		return  new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@Override
	public ResponseEntity<Void> createRestaurantReviews(ReviewsModel ReviewsModel) {
		reviewRepository.save(ReviewsModel);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<ReviewsModel> deleteRestaurantReviews(int restaurantId) {
		reviewRepository.deleteById(restaurantId);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	

}
