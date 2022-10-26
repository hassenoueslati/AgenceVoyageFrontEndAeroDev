import { Component, OnInit } from '@angular/core';
import {Hotel} from "../models/hotel";
import {HotelService} from "../services/hotel.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.css']
})
export class HotelEditComponent implements OnInit {
  hotel : Hotel
  categorie : string;
  constructor(private hotelService : HotelService, private router : Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.hotel = new Hotel();
    this.activated.paramMap.subscribe((params) => {
      let idHotel = params.get('id');
      this.hotelService.getHotel(idHotel).subscribe(
        (data:any) =>{
          this.hotel = data;
        }
      )
    })

  }

  changeCategorie(e: any) {
    this.categorie = e.target.value;
  }

  updateOffre(f: any) {
    let data = f.value;
    let hoteldata ={code : data.code ,libelle :data.libelle , adresse : data.adresse, nombreChambres : data.nombreChambres , categorie : this.categorie   }
    this.hotelService.updateHotel(this.hotel.idHotel,hoteldata).subscribe((data:any)=>{
      console.log("data",data)
      this.router.navigate(["/hotel"]);
    })
  }
}
