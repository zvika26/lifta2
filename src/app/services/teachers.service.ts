import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Teacher} from "../teachers/teacher.model";
import { map } from 'rxjs/operators';

@Injectable()
export class TeachersService {
  //todo change string[] to teachers
  constructor(private http: HttpClient) { }
  private teachers: Teacher[] = [] ;
  private updatedTeachers = new Subject<Teacher[]>();
  private port: string = "3001";

  getTeachers(){
    this.http.get<{message: string, teachers: Teacher[]}>("http://localhost:3001/api/teachers")
      .subscribe((teachData)=>{
        this.teachers = teachData.teachers;
        // this.updatedTeachers.next([..this.teachers]); //todo
      });
  }

  getTeacher(teacherId: string){
    return {...this.teachers.find(t=> t._id===teacherId)};
  }

  getTeachersFromService(){
    return this.teachers; //todo
  }

  addTeacher(name:string, profession:string){
    const t1: Teacher = new Teacher(null, name, profession);
    this.http.post<{message: string, teacherId: string}>("http://localhost:3001/api/teachers", t1)
      .subscribe((resData) =>{
        const id = resData.teacherId;
        t1._id = id;
        console.log("post res: " + id)
        // this.teachers.push();
        // this.teachersUpdated.next([..this.teachers]);
      });

  }

  deleteTeacher(teacherId: string){
    this.http.delete<{message: string}>("http://localhost:3001/api/teachers/" + teacherId)
      .subscribe((resData) => {
        // console.log(teacherId);
        console.log(resData.message);

        // const updatedPosts = this.teachers.filter(post => post.id !== teacherId);
        // this.posts = updatedPosts;
        // this.postsUpdated.next([...this.posts]);
      });
  }

  updateTeacher(teacherId: string, name: string, profession:string){
    const teacher = new  Teacher(teacherId, name, profession);
    this.http.put<{message: string}>("http://localhost:3001/api/teachers/" + teacherId, teacher)
      .subscribe((resData)=>{
        console.log(resData);
      });
  }
}
