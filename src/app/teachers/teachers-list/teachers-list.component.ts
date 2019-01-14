import { Component, OnInit } from '@angular/core';
import {TeachersService} from "../../services/teachers.service";
import {Subscription} from "rxjs";
import {Teacher} from "../teacher.model";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  private teachSub: Subscription;
  private teachers: Teacher[];
  constructor(private teachersService : TeachersService) { }

  ngOnInit() {
    this.teachersService.getTeachers();
    this.teachers = this.teachersService.getTeachersFromService();
    // this.teachersService.addTeacher("zvi", "king");
  }

  onDelete(teacherId: string) {
    this.teachersService.deleteTeacher(teacherId);
  }

}
