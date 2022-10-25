import { Component, OnInit } from '@angular/core';
import { offre } from '../models/offre';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
})
export class OffreComponent implements OnInit {
  ListOffre: offre[];
  constructor(private offreService: OffreService) {}

  ngOnInit(): void {
    this.getAllOffre();
    console.log(this.ListOffre);
  }

  getAllOffre() {
    this.offreService.retrieveAllOffres().subscribe((data: any) => {
      this.ListOffre = data;
    });
  }
}
