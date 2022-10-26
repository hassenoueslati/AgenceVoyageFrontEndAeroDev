import { Component, OnInit } from '@angular/core';
import {PartenaireService} from "../services/partenaire.service";
import {Partenaire} from "../models/partenaire";
import {Router} from "@angular/router";

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  ListPartenaire : Partenaire[];
  categorie : string;
  constructor(private partenaireService : PartenaireService , private router : Router  ) { }

  ngOnInit(): void {
    this.getAllPartenaires()
    console.log(this.ListPartenaire)
  }

  getAllPartenaires(){
    this.partenaireService.getAllPartenaires().subscribe((data:any)=>{
      this.ListPartenaire = data;
    })
  }
  updatePartenaire(partenaire:Partenaire){
    this.router.navigate(["/edit/"+partenaire.id ]);
  }

  AddPartenaire(f : any){
    console.log(f);
}

  changeCategorie(e : any) {
    this.categorie = e.target.value;
  }

  // deletePartenaire(id : any)
  // {
  //     this.partenaireService.DeletePartenaire(id).subscribe((data=>{
  //       this.getAllPartenaires();
  //     }))
  // }
}
