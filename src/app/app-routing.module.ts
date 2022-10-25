import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelComponent} from "./hotel/hotel.component";
import {HotelEditComponent} from "./hotel-edit/hotel-edit.component";

const routes: Routes = [
  { path: 'hotel',component: HotelComponent},
  { path: 'hotelEdit',component: HotelEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
