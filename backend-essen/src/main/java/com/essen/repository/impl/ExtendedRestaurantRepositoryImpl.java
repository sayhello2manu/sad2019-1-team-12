package com.essen.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.metamodel.EntityType;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.essen.model.RestaurantModel;
import com.essen.repository.ExtendedRestaurantRepository;
@Repository
public class ExtendedRestaurantRepositoryImpl implements ExtendedRestaurantRepository {
    @PersistenceContext
    private EntityManager entityManager;
    
    @Transactional
	@Override
	public List<RestaurantModel> searchRestaurant(String searchString, String location) {
    	CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<RestaurantModel> criteriaQuery = criteriaBuilder.createQuery(RestaurantModel.class);
		Root<RestaurantModel> restaurantsRoot = criteriaQuery.from(RestaurantModel.class);
		criteriaQuery.select(restaurantsRoot);
		
		
		EntityType<RestaurantModel> type = entityManager.getMetamodel().entity(RestaurantModel.class);
		
		Predicate restaurantCategory = criteriaBuilder.like(
				criteriaBuilder.lower(restaurantsRoot.get(type.getDeclaredSingularAttribute("restaurantCategory", String.class))),"%" + searchString.toLowerCase() + "%");
		
		Predicate restaurantName = criteriaBuilder.like(
				criteriaBuilder.lower(restaurantsRoot.get(type.getDeclaredSingularAttribute("restaurantName", String.class))),"%" + searchString.toLowerCase() + "%");
		
		
		
//		criteriaQuery.where(
//				criteriaBuilder.like(
//						criteriaBuilder.lower(restaurantsRoot.get(type.getDeclaredSingularAttribute("restaurantCategory", String.class))),"%" + searchString.toLowerCase() + "%"));
//
//
//		List<RestaurantModel> listOfRestaurants = entityManager.createQuery(criteriaQuery).getResultList();
//		getListOfDiscussionModelFromQuestionsEntity(listOfQuestionsWithGivenCategory);
        
		return null;
	}
	

}
