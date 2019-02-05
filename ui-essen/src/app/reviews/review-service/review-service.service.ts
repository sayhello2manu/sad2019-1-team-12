import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReviewModel } from '../review-model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) {
  }

  public HOSTNAME = '//localhost'

  public PORT = '8080'
  public URL = this.HOSTNAME + ':' + this.PORT + '/reviews/';
  public AVERAGE = 'average/';

  getReviews(restaurantId: number): Observable<Array<ReviewModel>> {
    return this.http.get<Array<ReviewModel>>(this.URL + restaurantId);
  }

  save(review: ReviewModel): Observable<ReviewModel> {
    let result: Observable<ReviewModel>;
    if (review.reviewId != null) {
      console.log("calling service put/edit" + review);
      result = this.http.put<ReviewModel>(this.URL + review.reviewId, review);
    } else {
      result = this.http.post<ReviewModel>(this.URL, review);
    }
    return result;
  }

  getAverageRating(restaurantId: number): Observable<number> {
    return this.http.get<number>(this.URL + this.AVERAGE + restaurantId);
  }
}
