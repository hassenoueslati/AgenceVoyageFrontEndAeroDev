import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PartenaireComponent} from "./partenaire/partenaire.component";
import {PartenaireEditComponent} from "./partenaire-edit/partenaire-edit.component";
import {PartenaireAddComponent} from "./partenaire-add/partenaire-add.component";

const routes: Routes = [
  { path: 'partenaire',component: PartenaireComponent},
  { path: 'partenaireEdit/:id',component: PartenaireEditComponent},
  { path: 'partenaireAdd',component: PartenaireAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
