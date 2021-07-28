import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    /** o + antes do this converte string (padrão da rota) para number */
  }
}
