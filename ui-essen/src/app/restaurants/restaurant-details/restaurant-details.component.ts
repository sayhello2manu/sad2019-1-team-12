import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../reviews/review-service/review-service.service';
import { Observable } from 'rxjs';
import { ReviewModel } from '../../reviews/review-model';
import { RestaurantService } from '../restaurant-service/restaurant.service'
import { RestaurantModel } from '../restaurant-model/restaurant.model';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/';
import { ReviewAddComponent } from '../../reviews/review-add/review-add.component'

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css', './restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  selected = 0;
  hovered = 0;
  readonly = false;
  averageRating: number;
  reviews: Array<ReviewModel>;
  resturant: RestaurantModel;
  restaurantId: number;

  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    public dialog: MatDialog,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.
      addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/round-add-24px.svg')).
      addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete-icon.svg'))
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.restaurantId = parseInt(params.get('restaurantId'), 10);
      console.log(params.get('restaurantId'))
    });
    this.getRestaurantDetailsFromBackend();
    this.getListOfReviewsFromBackend();
    this.getAverageRatingFromBackend();
  }


  private getAverageRatingFromBackend(): void {
    this.reviewService.getAverageRating(this.restaurantId).
      subscribe(
        (data: number) => {
          this.averageRating = data;
          console.log(data);
        },
        error => {
          console.log("No Results")
        })
  }

  openDialogAddReview(): void {
    const dialogRef = this.dialog.open(ReviewAddComponent, {
      width: '600px',
      data: this.restaurantId,
      hasBackdrop: true,

    });

    dialogRef.afterClosed().subscribe(result => {
      this.getListOfReviewsFromBackend();
      this.getAverageRatingFromBackend()
      console.log('The dialog of Review ADD was closed');

    });
  }

  private getListOfReviewsFromBackend() {
    this.reviewService.getReviews(this.restaurantId).
      subscribe(
        (data: ReviewModel[]) => {
          this.reviews = data;
          console.log(data);
        },
        error => {
          console.log("No Results")
        })
  }

  private getRestaurantDetailsFromBackend() {
    this.restaurantService.getRestaurant(this.restaurantId).
      subscribe((data: RestaurantModel) => {
        this.resturant = data;
        console.log(this.resturant.restaurantName);
      }, error => {
        console.log("No Results");
      });
  }


  openDialogDeleteReview(): void {
  }
}
