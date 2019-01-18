import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentsService} from "../../services/students.service";
import {Student} from "../student.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  private studentsSub: Subscription;
  private students: Student[] = [];
  constructor(public studentsService: StudentsService, public route: ActivatedRoute) { }

  ngOnInit() {
    console.log('StudentsListComponent init')
    this.studentsService.getStudents();
    this.studentsSub = this.studentsService.getUpdatedStudentsListener()
      .subscribe((students: Student[]) =>{
        this.students = students;
      });
    console.log('1: ' + this.students);
  }

  onDelete(studentId: string) {
    this.studentsService.deleteStudent(studentId);
  }

}
