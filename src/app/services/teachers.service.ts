import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Teacher} from "../teachers/teacher.model";
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable()
export class TeachersService {
  constructor(private http: HttpClient, private router: Router) { }
  private teachers: Teacher[] = [] ;
  private updatedTeachers = new Subject<Teacher[]>();
  private port: string = "3001";

  getTeachers(){
    this.http.get<{message: string, teachers: Teacher[]}>("http://localhost:3001/api/teachers")
      .subscribe((teachData)=>{
        this.teachers = teachData.teachers;
        this.updatedTeachers.next([...this.teachers]);
      });
  }

  getUpdatedTeachersListener(){
    return this.updatedTeachers.asObservable()
  }

  getTeacher(teacherId: string){
    return {...this.teachers.find(t=> t._id===teacherId)};
  }

  addTeacher(name:string, profession:string){
    const t1: Teacher = new Teacher(null, name, profession);
    this.http.post<{message: string, teacherId: string}>("http://localhost:3001/api/teachers", t1)
      .subscribe((resData) =>{
        const id = resData.teacherId;
        t1._id = id;
        console.log("post res: " + id)
        this.teachers.push(t1);

        // this.teachersUpdated.next([..this.teachers]);
        this.router.navigate(["/teachers"]);
      });

  }

  deleteTeacher(teacherId: string){
    this.http.delete<{message: string}>("http://localhost:3001/api/teachers/" + teacherId)
      .subscribe((resData) => {
        console.log(resData.message);
        const teachersWithoutDeleded = this.teachers.filter(teacher => teacher._id !== teacherId);
        this.teachers = teachersWithoutDeleded;
        this.updatedTeachers.next([...this.teachers]);
      });
  }

  updateTeacher(teacherId: string, name: string, profession:string){
    const teacher = new  Teacher(teacherId, name, profession);
    this.http.put<{message: string}>("http://localhost:3001/api/teachers/" + teacherId, teacher)
      .subscribe((resData)=>{
        console.log(resData);
        this.router.navigate(["/teachers"]);

      });
  }
}
