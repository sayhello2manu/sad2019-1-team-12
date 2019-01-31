package com.essen.repository;

import org.springframework.data.repository.CrudRepository;

import com.essen.model.RestaurantModel;

public interface RestaurantRepository extends CrudRepository<RestaurantModel, Integer> {

}
