import { Directive, HostBinding ,HostListener} from '@angular/core';

@Directive({
  selector: '[appBackgroundColorChange]'
})
export class BackgroundColorChangeDirective {
  @HostBinding('style.color') color: any ; 
  @HostListener("mouseenter") mouseEnter(){
    this.color = "red"
  }
  @HostListener("mouseleave") mouseEnter2(){
    this.color = "white"
  }
  
  constructor() { }

}
