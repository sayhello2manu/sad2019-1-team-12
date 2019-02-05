package com.essen.service.impl;

import java.util.List;
import java.util.OptionalDouble;
import java.util.stream.Collectors;

import org.apache.commons.math3.util.Precision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.essen.model.ReviewsModel;
import com.essen.repository.ReviewRepository;
import com.essen.service.ReviewService;

@Service

public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewRepository reviewRepository;

	@Override
	public ResponseEntity<List<ReviewsModel>> getRestaurantReviews(int restaurantId) {
		List<ReviewsModel> reviews = reviewRepository.gerReviews(restaurantId);
		if (reviews.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(reviewRepository.gerReviews(restaurantId), HttpStatus.OK);
	}

	@Override
	public ResponseEntity<Void> createRestaurantReviews(ReviewsModel reviewsModel) {
		reviewRepository.save(reviewsModel);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<Void> deleteRestaurantReviews(int restaurantId) {
		reviewRepository.deleteById(restaurantId);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@Override
	public ResponseEntity<Double> getAverageRating(int restaurantId) {
		List<ReviewsModel> reviews = reviewRepository.gerReviews(restaurantId);
		List<Integer> ratings = reviews.stream().map(ReviewsModel::getRating).collect(Collectors.toList());
		OptionalDouble average = ratings.stream().mapToDouble(rating -> rating).average();
		if (average.isPresent()) {
			return new ResponseEntity<>(Precision.round(average.getAsDouble(), 2), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(0.0d, HttpStatus.OK);
		}
	}

}
