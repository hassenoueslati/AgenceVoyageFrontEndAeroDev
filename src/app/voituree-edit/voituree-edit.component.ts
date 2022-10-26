import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voituree } from '../models/voituree';
import { VoitureeService } from '../services/voituree.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-voituree-edit',
  templateUrl: './voituree-edit.component.html',
  styleUrls: ['./voituree-edit.component.css']
})
export class VoitureeEditComponent implements OnInit {
voituree : Voituree
  constructor(private voitureeService : VoitureeService, private router : Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.voituree = new Voituree();
    this.activated.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.voitureeService.getVoituree(id).subscribe(
        (data:any) =>{
          this.voituree = data;
        }
      )
    })
  }

  updateVoituree(f: any) {
    this.voitureeService.updateVoituree(this.voituree.id,f.value).subscribe((data:any)=>{
      console.log("data",data)
      this.router.navigate(["/voiturees"]);
    })
  }
}


