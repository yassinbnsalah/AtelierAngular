import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {
  invoiceState !: string ;
  invoiceId !: 0;
  
  constructor(private activatedRouter: ActivatedRoute) {
   /* this.invoiceId = this.activatedRouter.snapshot.params["id"]
    this.invoiceState = this.activatedRouter.snapshot.params["active"]*/
   this.VerifyState() ;
  }

  
  VerifyState(){
    this.activatedRouter.params.subscribe((res: any)=>{
      console.log(res.active);
      this.invoiceId = res.id
      this.invoiceState = res.active; 
     
      
    })
  }

  ngOnInit(): void {
    /*this.activatedRouter.params.subscribe((res: any)=>{
      console.log(res.active);
      this.invoiceId = res.id
      this.invoiceState = res.active
      
    })
  */
  }

}
