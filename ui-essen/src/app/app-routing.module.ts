import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant-home',
    pathMatch: 'full'
  },
  {
    path: 'restaurant-home',
    component: RestaurantHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


