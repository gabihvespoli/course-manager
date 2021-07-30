import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) { }

  // retrieveAll(): Course[] {
  //   return COURSES;
  // }

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.courseUrl);
  }

  // retrieveById(id: number): Course {
  //   return COURSES.find((courseIterator: Course) => courseIterator.id === id);
  // }

  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
  }

  // save(course: Course): void {
  //   if(course.id) {
  //     const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
  //     COURSES[index]= course;
  //   }
  // }

  save(course: Course): Observable<Course> {
    if(course.id) {
      return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.courseUrl}`, course);
    }
  }
}
