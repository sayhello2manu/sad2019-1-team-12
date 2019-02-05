import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReviewService } from '../../reviews/review-service/review-service.service';
import { ReviewModel } from '../review-model';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
@NgModule({
  exports: [ReviewAddComponent]
})
export class ReviewAddComponent implements OnInit {
  addReviewForm: FormGroup;
  review: ReviewModel
  
  constructor(
    public dialogRef: MatDialogRef<ReviewAddComponent>,
    private reviewService: ReviewService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: number) {
  }

  ngOnInit() {
    this.addReviewForm = this.formBuilder.group({
      costumerName: ['', Validators.required],
      feedback: ['', Validators.required],
      rating: ['', Validators.pattern('^[0-9]*$')]
    });
  }

  onClickAdd() {
    console.log(this.addReviewForm.value.costumerName);
    console.log(this.addReviewForm.value.feedback);
    console.log(this.addReviewForm.value.rating);
    console.log(this.data);
    this.review = {
      restaurantId: this.data,
      customerName: this.addReviewForm.value.costumerName,
      feedback: this.addReviewForm.value.feedback,
      rating: this.addReviewForm.value.rating
    }
    this.reviewService.save(this.review).subscribe((addedData: ReviewModel) => {
      console.log("After Adding Review"),
        console.log(addedData),
        this.dialogRef.close();
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
