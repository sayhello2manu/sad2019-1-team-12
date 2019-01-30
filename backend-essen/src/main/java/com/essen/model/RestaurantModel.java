package com.essen.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RestaurantModel {

	private int restaurantId;
	private String restaurantName;
	private String restaurantLocation;
	private String restaurantContactNo;
	private String restaurantAddress;
	private String restaurantCategory;
	private int restaurantExpense;
}
