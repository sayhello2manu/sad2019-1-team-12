import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material-module';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantEditComponent,
    RestaurantAddComponent,
    RestaurantHomeComponent,
  ],
  entryComponents: [RestaurantEditComponent, RestaurantAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
