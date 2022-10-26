import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreEditComponent } from './offre-edit/offre-edit.component';
import { OffreComponent } from './offre/offre.component';

const routes: Routes = [
  { path: 'offre', component: OffreComponent },
  { path: 'offreEdit/:id', component: OffreEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
