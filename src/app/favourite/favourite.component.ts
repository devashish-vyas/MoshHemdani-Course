import { Component, EventEmitter, Input, Output } from '@angular/core';


// Shadow Dom allow us to apply styles and templates to a element without bleeding to outer components 

@Component({
  selector: 'favourite',
  standalone: true,
  imports: [],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})
export class FavouriteComponent {

  @Input() flag : boolean ;

  @Output() change = new EventEmitter();

  onClick(){
    this.flag=!this.flag;
    this.change.emit(this.flag);
  }

}
