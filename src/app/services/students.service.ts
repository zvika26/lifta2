import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Lecture} from '../lectures/lecture.model';
import {Student} from "../students/student.model";

@Injectable()
export class StudentsService {

  lectureOnFocusChanged = new Subject<Lecture>();

  students: Student[] = [
    new Student('zvi'),
    new Student('ayala')
  ];


  constructor() { }

  addStudent(newStudent: Student) {
    this.students.push(newStudent);
  }

  removeStudent(newStudent: Student) {
//todo
  }

  onSelectLecture(lecture: Lecture) {
    this.lectureOnFocusChanged.next(lecture);
  }

}
