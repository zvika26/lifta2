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
  private teachers: Teacher[] = [];
  constructor(private teachersService : TeachersService) { }

  ngOnInit() {
    console.log('TeachersListComponent init')
    this.teachersService.getTeachers();
    this.teachSub = this.teachersService.getUpdatedTeachersListener()
      .subscribe((teachers: Teacher[]) =>{
        this.teachers = teachers;
    });
    console.log('1: ' + this.teachers);
  }

  onDelete(teacherId: string) {
    this.teachersService.deleteTeacher(teacherId);
  }

  ngOnDestroy() {
    this.teachSub.unsubscribe();
  }

}
