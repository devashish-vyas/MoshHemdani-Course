import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses : String[] =["c1","c2","c3"];
  
  getCourses(){
    return this.courses;
  }

  constructor() { }
}
