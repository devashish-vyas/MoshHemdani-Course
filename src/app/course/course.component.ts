import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CourseService } from './course.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../summary.pipe';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule,SummaryPipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  title = "DevashishAngularCourse"
  courses : String[];
  imageUrl = "http://lorempixel.com/400/200";
  isActive=false;
  email : String = "me@example.com";

  onClick($event){
    $event.stopPropagation();
    console.log("Button is clicked");
  }

  onDivClick(){
    console.log("div is also activated");
  }

  onKeyUp($event){

   console.log("ENTER Was pressed");
  }

  onKeyUp2($event){

    console.log($event.target.value);
   }

   demoTwoWayBinding(){
    console.log(this.email);
   }

  constructor(service : CourseService){
    this.courses = service.getCourses();
    
  }

  

  getTitle(){
    return this.title;
  }

  course = {
    title : "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }

  summ = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur repellat saepe! Molestiae aut aspernatur, reprehenderit eum perferendis voluptatem laudantium quo, deserunt velit vel natus unde quod dolorem facere nisi ipsa ut. Consequatur optio asperiores et iusto quas beatae totam, praesentium at necessitatibus. Ipsam nisi in, rem at laudantium delectus perspiciatis, ipsum porro dolorum deleniti fugit!"



}
