import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  id : any ;  
constructor(private activatedRouter:ActivatedRoute){

}
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params["id"]
    console.log("id in params ", this.id);

    this.activatedRouter.params.subscribe((res)=>{
      console.log(res);
      
      
    })
    
  }
}
