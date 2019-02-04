package com.essen.repository;

import org.springframework.data.repository.CrudRepository;

import com.essen.model.ReviewsModel;

public interface ReviewRepository extends CrudRepository<ReviewsModel,Integer> {

}
