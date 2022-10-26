import { Component, OnInit } from '@angular/core';
import {Aireport} from "../models/aireport";
import {Router} from "@angular/router";
import {AireportService} from "../services/aireport.service";

@Component({
  selector: 'app-aireport',
  templateUrl: './aireport.component.html',
  styleUrls: ['./aireport.component.css']
})
export class AireportComponent implements OnInit {
  ListAireport : Aireport[];
  constructor(private aireportService :AireportService  ,private router : Router) { }

  ngOnInit(): void {
  this.getAllAireport();
  }

  getAllAireport(){
    this.aireportService.getAllAireport().subscribe((data:any)=>{
      this.ListAireport = data;
    })
  }

  deleteAireport(id : any)
  {
    this.aireportService.DeleteAireport(id).subscribe((data=>{
      this.getAllAireport();
    }))
  }

}
