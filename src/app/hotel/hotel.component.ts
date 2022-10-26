import { Component, OnInit } from '@angular/core';
import {HotelService} from "../services/hotel.service";
import {Hotel} from "../models/hotel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  ListHotel : Hotel[];
  categorie : string;
  constructor(private hotelService : HotelService , private router : Router  ) { }

  ngOnInit(): void {
    this.getAllHotels()
  }

  getAllHotels(){
    this.hotelService.getAllHotel().subscribe((data:any)=>{
      this.ListHotel = data;
    })
  }
  updateHotel(hotel:Hotel){
    this.router.navigate(["/hotelEdit/"+hotel.idHotel ]);
  }

  changeCategorie(e : any) {
    this.categorie = e.target.value;
  }

  deleteHotel(id : any)
  {
      this.hotelService.DeleteHotel(id).subscribe((data=>{
        this.getAllHotels();
      }))
  }
}
