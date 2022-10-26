import { Component, OnInit } from '@angular/core';
import {PartenaireService} from "../services/partenaire.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-partenaire-add',
  templateUrl: './partenaire-add.component.html',
  styleUrls: ['./partenaire-add.component.css']
})
export class PartenaireAddComponent implements OnInit {
  categorie : string;
  constructor(private partenaireService : PartenaireService , private router : Router ) { }

  ngOnInit(): void {
  }

  AddPartenaire(f : any){
    let data = f.value;
    console.log("louay",data);

    let partenaire ={nom : data.nom ,specialite :data.specialite , domaine : data.domaine, nationalite : data.nationalite    }
    this.partenaireService.addPartenaire(partenaire).subscribe((data:any)=>{
      this.router.navigate(["/partenaires"]);
    })
  // }
  // changeCategorie(e : any) {
  //   this.categorie = e.target.value;
  // }
  }
}
