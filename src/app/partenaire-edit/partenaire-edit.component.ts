import { Component, OnInit } from '@angular/core';
import {Partenaire} from "../models/partenaire";
import {PartenaireService} from "../services/partenaire.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-partenaire-edit',
  templateUrl: './partenaire-edit.component.html',
  styleUrls: ['./partenaire-edit.component.css']
})
export class PartenaireEditComponent implements OnInit {
  partenaire : Partenaire
  categorie : string;
  constructor(private partenaireService : PartenaireService, private router : Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.partenaire = new Partenaire();
    this.activated.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.partenaireService.getPartenaire(id).subscribe(
        (data:any) =>{
          this.partenaire = data;
        }
      )
    })

  }

  changeCategorie(e: any) {
    this.categorie = e.target.value;
  }

  updateOffre(f: any) {
    let data = f.value;
    let partenairedata ={nom : data.nom ,specialite :data.specialite , domaine : data.domaine, nationalite : data.nationalite , categorie : this.categorie   }
    this.partenaireService.updatePartenaire(this.partenaire.id,partenairedata).subscribe((data:any)=>{
      console.log("data",data)
      this.router.navigate(["/partenaire"]);
    })
  }
}
