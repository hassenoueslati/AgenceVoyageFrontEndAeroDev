import { Component, OnInit } from '@angular/core';
import {AireportService} from "../services/aireport.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-aireport-add',
  templateUrl: './aireport-add.component.html',
  styleUrls: ['./aireport-add.component.css']
})
export class AireportAddComponent implements OnInit {

  constructor(private aireportService : AireportService, private router : Router) { }

  ngOnInit(): void {
  }

  AddAireport(f : any){
    console.log("f.value",f.value)
    this.aireportService.addAireport(f.value).subscribe((data:any)=>{
      this.router.navigate(["/aireport"]);
    })
  }
}
