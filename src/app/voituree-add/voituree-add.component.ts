import { Component, OnInit } from '@angular/core';
import {VoitureeService} from "../services/voituree.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voituree-add',
  templateUrl: './voituree-add.component.html',
  styleUrls: ['./voituree-add.component.css']
})
export class VoitureeAddComponent implements OnInit {
  categorie : string;
  constructor(private voitureeService : VoitureeService , private router : Router ) { }

  ngOnInit(): void {
  }

  AddVoituree(f : any){
    let data = f.value;
    let voituree ={name : data.name ,description :data.description , typeinj : data.typeinj  }
    this.voitureeService.addVoituree(voituree).subscribe((data:any)=>{
      this.router.navigate(["/voituree"]);
    })
  }
  

}
