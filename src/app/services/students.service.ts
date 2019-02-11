import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Lecture} from '../lectures/lecture.model';
import {Student} from "../students/student.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Teacher} from "../teachers/teacher.model";

@Injectable()
export class StudentsService {
  lectureOnFocusChanged = new Subject<Lecture>();

  // students: Student[] = [
  //   new Student('zvi'),
  //   new Student('ayala')
  // ];

  students: Student[] = [];
  private updatedStudents = new Subject<Student[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getStudents(){
    this.http.get<{message: string, students: Student[]}>("http://localhost:3001/api/students")
      .subscribe((studentData)=>{
        this.students = studentData.students;
        this.updatedStudents.next([...this.students]);
      });
  }

  getStudentsList(){
    return this.students;
  }
  getUpdatedStudentsListener(){
    return this.updatedStudents.asObservable()
  }

  getStudent(studentId: string){
    return {...this.students.find(s=> s._id===studentId)};
  }

  addStudent(name:string){
    const s1: Student = new Student(null, name);
    this.http.post<{message: string, studentId: string}>("http://localhost:3001/api/students", s1)
      .subscribe((resData) =>{
        const id = resData.studentId;
        s1._id = id;
        console.log("post student res: " + id)
        this.students.push(s1);
        // this.studentsUpdated.next([..this.students]);
        this.router.navigate(["/students"]);
      });
  }

  deleteStudent(studentId: string){
    this.http.delete<{message: string}>("http://localhost:3001/api/students/" + studentId)
      .subscribe((resData) => {
        console.log(resData.message);
        const studentsWithoutDeleded = this.students.filter(student => student._id !== studentId);
        this.students = studentsWithoutDeleded;
        this.updatedStudents.next([...this.students]);
      });
  }

  updateStudent(studentId: string, name: string){
    const student = new Student(studentId, name);
    this.http.put<{message: string}>("http://localhost:3001/api/students/" + studentId, student)
      .subscribe((resData)=>{
        console.log(resData);
        this.router.navigate(["/students"]);

      });
  }

  removeStudent(newStudent: Student) {
//todo
  }

  onSelectLecture(lecture: Lecture) {
    this.lectureOnFocusChanged.next(lecture);
  }

}
