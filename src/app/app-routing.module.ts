// import { AuthGuard } from './services/auth.guard';
// import { FeedComponent } from './components/feed/feed.component';
import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {LectureListComponent} from "./lectures/lecture-list/lecture-list.component";
import {StudentListComponent} from "./students/student-list/student-list.component";
import {TeachersListComponent} from "./teachers/teachers-list/teachers-list.component";
import {NewLectureComponent} from "./lectures/new-lecture/new-lecture.component";
import {EditItemComponent} from "./lectures/edit-item/edit-item.component";
import {DayTableComponent} from "./days/day-table/day-table.component";
import {TeacherCreateComponent} from "./teachers/teacher-create/teacher-create.component";
import {StudentCreateComponent} from "./students/student-create/student-create.component";

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'teachers', component: TeachersListComponent},
  { path: 'teachers/new', component: TeacherCreateComponent},
  { path: "teachers/edit/:teacherId", component: TeacherCreateComponent},
  { path: 'students', component: StudentListComponent},
  { path: 'students/new', component: StudentCreateComponent},
  { path: "students/edit/:studentId", component: StudentCreateComponent},

  { path: 'lectures', component: LectureListComponent},
  { path: 'lectures/new', component: NewLectureComponent},
  { path: 'lectures/edit/:lectureId', component: NewLectureComponent},

  { path: 'days/:day', component: DayTableComponent}

  // { path: 'cart/:id', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  // { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //todo : understand it
})
export class AppRoutingModule { }
