import { Component, OnInit } from '@angular/core';
import {HotelService} from "../services/hotel.service";
import {Hotel} from "../models/hotel";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  ListHotel : Hotel[];
  categorie : string;
  constructor(private hotelService : HotelService) { }

  ngOnInit(): void {
    this.getAllHotels()
    console.log(this.ListHotel)
  }

  getAllHotels(){
    this.hotelService.getAllHotel().subscribe((data:any)=>{
      this.ListHotel = data;
    })
  }
  AddHotel(f : any){
      console.log(f);
    console.log(this.categorie)
  }

  changeCategorie(e : any) {
    this.categorie = e.target.value;
  }
}
