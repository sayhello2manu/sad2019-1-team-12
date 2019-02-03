package com.essen.repository;

import java.util.List;

import com.essen.model.RestaurantModel;

public interface ExtendedRestaurantRepository {
	
	List<RestaurantModel> searchRestaurant(String searchString,String location);

}
