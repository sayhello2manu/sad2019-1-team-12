package com.essen.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.essen.model.ReviewsModel;
import com.essen.repository.ExtendedReviewRepository;

@Repository
public class ExtendedReviewRepositoryImpl implements ExtendedReviewRepository {
	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	@Override
	public List<ReviewsModel> gerReviews(int restaurantId) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<ReviewsModel> criteriaQuery = criteriaBuilder.createQuery(ReviewsModel.class);
		Root<ReviewsModel> reviewsRoot = criteriaQuery.from(ReviewsModel.class);
		criteriaQuery.select(reviewsRoot);

		criteriaQuery.where(criteriaBuilder.equal(reviewsRoot.get("restaurantId"), restaurantId));

		return entityManager.createQuery(criteriaQuery).getResultList();
	}

}
