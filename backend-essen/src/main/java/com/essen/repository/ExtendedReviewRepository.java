package com.essen.repository;

import java.util.List;

import com.essen.model.ReviewsModel;

public interface ExtendedReviewRepository {

	List<ReviewsModel> gerReviews(int restaurantId);
}
