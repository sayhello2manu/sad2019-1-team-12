package com.essen.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@EqualsAndHashCode
@ToString

@Entity
@Table(name= "reviews")

public class ReviewsModel {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name= "Review_ID")
	private int reviewID;
	@Column(name= "Restaurant_ID")
	private int restaurantID;
	@Column(name= "Customer_Name")
	private String customerName;
	@Column(name= "Feedback")
	private String feedback;
	@Column(name= "Rating")
	private int rating;
	
}
