import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirectiveDirective } from './input-format-directive.directive';
import { ZippyComponent } from './zippy/zippy.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CourseComponent,FavouriteComponent,PanelComponent,InputFormatDirectiveDirective,ZippyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  someField = undefined
  flag = false;
  courses = [
    {id : 1, name : "Course1"},
    {id : 2, name : "Course2"},
    {id : 3, name : "Course3"}

  ];
  view = 'list'
  property = 'btn btn-danger'
  flip(){
    if(this.property == 'btn btn-danger') this.property ='btn btn-success';
    else this.property ='btn btn-danger'
  }

  post ={
    title : "Title",
    flag : true
  }
  
  onFavouriteChange(isflag){
    console.log("method called");
    console.log(isflag);
  }


}
