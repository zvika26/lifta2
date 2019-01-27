import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {LectureItemComponent} from './lectures/lecture-item/lecture-item.component';
import {LectureListComponent} from './lectures/lecture-list/lecture-list.component';
import {StudentItemComponent} from './students/student-item/student-item.component';
import {StudentListComponent} from './students/student-list/student-list.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {LecturesService} from "./services/lectures.service";
import {StudentsService} from "./services/students.service";
import {TeachersListComponent} from './teachers/teachers-list/teachers-list.component';
import {NewLectureComponent} from './lectures/new-lecture/new-lecture.component';
import {EditItemComponent} from './lectures/edit-item/edit-item.component';
import {DayTableComponent} from './days/day-table/day-table.component';
import {SchoolHourComponent} from './school-hour/school-hour.component';
import {ServerService} from "./services/server.service";
import {HttpClientModule} from "@angular/common/http";
import {TeachersService} from "./services/teachers.service";
import {TeacherCreateComponent} from './teachers/teacher-create/teacher-create.component';
import {FormsModule} from "@angular/forms";
import {StudentCreateComponent} from './students/student-create/student-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LectureItemComponent,
    LectureListComponent,
    StudentItemComponent,
    StudentListComponent,
    NavbarComponent,
    TeachersListComponent,
    NewLectureComponent,
    EditItemComponent,
    DayTableComponent,
    SchoolHourComponent,
    TeacherCreateComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LecturesService, StudentsService, ServerService, TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
