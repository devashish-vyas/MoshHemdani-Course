import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'zippy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.scss'
})
export class ZippyComponent {

  flag1 : boolean = false;
  flag2 : boolean = false;

  func1(){
    console.log("func1 fired");
    this.flag1=!this.flag1;
  }
  func2(){
    console.log("func2 fired");
    this.flag2 = !this.flag2;
  }

}
