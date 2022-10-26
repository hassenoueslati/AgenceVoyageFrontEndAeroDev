import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelComponent} from "./hotel/hotel.component";
import {HotelEditComponent} from "./hotel-edit/hotel-edit.component";
import {HotelAddComponent} from "./hotel-add/hotel-add.component";
import {AireportComponent} from "./aireport/aireport.component";
import {AireportEditComponent} from "./aireport-edit/aireport-edit.component";
import {AireportAddComponent} from "./aireport-add/aireport-add.component";

const routes: Routes = [
  { path: 'hotel',component: HotelComponent},
  { path: 'hotelEdit/:id',component: HotelEditComponent},
  { path: 'hotelAdd',component: HotelAddComponent},
  { path: 'aireport',component: AireportComponent},
  { path: 'aireportEdit/:id',component: AireportEditComponent},
  { path: 'aireportAdd',component: AireportAddComponent},
  { path: 'partenaire',component: PartenaireComponent},
  { path: 'partenaireEdit/:id',component: PartenaireEditComponent},
  { path: 'partenaireAdd',component: PartenaireAddComponent},
  { path: 'voituree',component: VoitureeComponent},
  { path: 'voitureeEdit/:id',component: VoitureeEditComponent},
  { path: 'addVoituree',component: VoitureeAddComponent},
  { path: 'offre', component: OffreComponent },
  { path: 'offreEdit/:id', component: OffreEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
