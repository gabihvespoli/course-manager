import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: './assets/images/forms.png',
        price: 99.99,
        code: 'AAA-000',
        duration: 120,
        rating: 3.5,
        releaseDate: '21/04/2007'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: './assets/images/http.png',
        price: 199.99,
        code: 'AAA-111',
        duration: 240,
        rating: 5,
        releaseDate: '21/04/2007'
      }
    ]
  }
}
