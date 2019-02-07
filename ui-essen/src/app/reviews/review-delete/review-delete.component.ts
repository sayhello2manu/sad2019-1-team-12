import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { ReviewService } from '../review-service/review-service.service';
import { ReviewModel } from '../review-model'

@Component({
  selector: 'app-review-delete',
  templateUrl: './review-delete.component.html',
  styleUrls: ['./review-delete.component.css']
})
@NgModule({
  exports: [ReviewDeleteComponent]
})
export class ReviewDeleteComponent implements OnInit {

  reviewId : number;
  constructor(
    public dialogRef: MatDialogRef<ReviewDeleteComponent>,
    private reviewService: ReviewService,
    @Inject(MAT_DIALOG_DATA) public data: number) {
      this.reviewId= data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onClickDelete(reviewId: number): void {
    this.reviewService.delete(this.reviewId).subscribe((deletedData: ReviewModel) => {
      console.log("After Deleting Restaurant")
      this.dialogRef.close();
    }
    )
  }

}



