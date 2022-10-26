import { Component, OnInit } from '@angular/core';
import {VoitureeService} from "../services/voituree.service";
import {Voituree} from "../models/voituree";
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-voituree',
  templateUrl: './voituree.component.html',
  styleUrls: ['./voituree.component.css']
})

export class VoitureeComponent implements OnInit {
  ListVoituree : Voituree[];
  categorie : string;
  constructor(private voitureeService : VoitureeService , private router : Router  ) { }

  ngOnInit(): void {
    this.getAllVoiturees()
    console.log(this.ListVoituree)
  }

  getAllVoiturees(){
    this.voitureeService.getAllVoituree().subscribe((data:any)=>{
      this.ListVoituree = data;
    })
  }
  updateVoituree(voituree:Voituree){
    this.router.navigate(["/voitureeEdit/"+voituree.id ]);
  }

  

  

  deleteVoituree(id : any)
  {
      this.voitureeService.DeleteVoituree(id).subscribe((datadata:any)=>{
        this.getAllVoiturees();
      })
  }
}
