import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { offre } from '../models/offre';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css'],
})
export class OffreEditComponent implements OnInit {
  offre: offre;
  constructor(
    private offreService: OffreService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offre = new offre();
    this.activated.paramMap.subscribe((params) => {
      let idOffre = params.get('id');
      this.offreService.retrieveOffre(idOffre).subscribe((data: any) => {
        this.offre = data;
      });
    });
  }

  UpdateOffre(f: any) {
    this.offreService
      .modifyOffre(this.offre.idOffre, f.value)
      .subscribe((data) => {
        this.router.navigate(['/offre']);
      });
  }
 
}
