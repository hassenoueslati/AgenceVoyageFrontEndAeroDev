import { Component, OnInit } from '@angular/core';
import { offre } from '../models/offre';
import { OffreService } from '../services/offre.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
})
export class OffreComponent implements OnInit {
  ListOffre: offre[];
  constructor(
    private offreService: OffreService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllOffre();
    console.log(this.ListOffre);
  }

  getAllOffre() {
    this.offreService.retrieveAllOffres().subscribe((data: any) => {
      this.ListOffre = data;
    });
  }
  AddOffre(f: any) {
    console.log('f.value', f.value);

    this.offreService.addOffre(f.value).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/offre']);
      this.getAllOffre();
    });
  }

  UpdateOffre(offre: offre) {
    this.router.navigate(['/offreEdit/' + offre.idOffre]);
  }

  DeleteOffre(id: any) {
    this.offreService.Deleteoffre(id).subscribe((data: any) => {
      this.getAllOffre();
    });
  }
}
