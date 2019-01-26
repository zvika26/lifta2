import {Component, Input, OnInit} from '@angular/core';
import {Lecture} from "../lecture.model";
import {Student} from "../../students/student.model";
import {StudentsService} from "../../services/students.service";
import {LecturesService} from "../../services/lectures.service";

@Component({
  selector: 'app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styleUrls: ['./lecture-item.component.css']
})
export class LectureItemComponent implements OnInit {
  @Input() lecture: Lecture;
  newStudent: Student;

  constructor(public studentsService: StudentsService,
              public lectureService :LecturesService) {
  }

  ngOnInit() {
    console.log('LectureItemComponent ngOnInit');
  }

  onDelete(lectureId: string) {
    this.lectureService.deleteLecture(lectureId);
  }

  focusOnClick() {
    this.studentsService.onSelectLecture(this.lecture);
  }

  addStudent(newStudent: Student) {
    this.lecture.students.push(this.newStudent);
    newStudent.lecturesList.push(this.lecture);
  }
}
