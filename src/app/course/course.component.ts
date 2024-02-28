import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  title = "DevashishAngularCourse"
  courses : String[];

  constructor(service : CourseService){
    this.courses = service.getCourses();
    
  }

  

  getTitle(){
    return this.title;
  }



}
