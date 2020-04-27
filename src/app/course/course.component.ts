import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courseCategorys=[
    { id: 1, name:'Development'},
    { id: 2, name:'Art'},
    { id: 3, name:'Language'}];

  hasGuarantee:boolean;  
}
