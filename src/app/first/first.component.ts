import { Component, OnInit, SimpleChange } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
kolor = "red"

constructor(){
  console.log("initializerCD");
}
ngOnInit(): void {
  console.log("initializer");
  
}

ngOnChange(changes:SimpleChange):void{
  
}
}
