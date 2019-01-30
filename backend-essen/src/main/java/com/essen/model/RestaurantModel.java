package com.essen.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "restaurants")
public class RestaurantModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Restaurant_ID")
	private int restaurantId;
	@Column(name = "Restaurant_Name")
	private String restaurantName;
	@Column(name = "Restaurant_Location")
	private String restaurantLocation;
	@Column(name = "Restaurant_Category")
	private String restaurantCategory;
	@Column(name = "Restaurant_Address")
	private String restaurantAddress;
	@Column(name = "Restaurant_Contact_No")
	private String restaurantContactNo;
	@Column(name = "Restaurant_Expense")
	private int restaurantExpense;

}
