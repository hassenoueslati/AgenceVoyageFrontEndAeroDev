import { Component, OnInit } from '@angular/core';
import {HotelService} from "../services/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent implements OnInit {
  categorie : string;
  constructor(private hotelService : HotelService , private router : Router ) { }

  ngOnInit(): void {
  }

  AddHotel(f : any){
    let data = f.value;
    let hotel ={code : data.code ,libelle :data.libelle , adresse : data.adresse, nombreChambres : data.nombreChambres , categorie : this.categorie   }
    this.hotelService.addHotel(hotel).subscribe((data:any)=>{
      this.router.navigate(["/hotel"]);
    })
  }
  changeCategorie(e : any) {
    this.categorie = e.target.value;
  }

}
