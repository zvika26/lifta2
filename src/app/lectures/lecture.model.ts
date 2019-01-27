import {Student} from '../students/student.model';

export class Lecture {
  public name: string;
  public _id: string;
  public day: number;
  public hour: number;
  public students: Student[] = [];
  // public students: Student[] = [new Student("", 'demo')];


  constructor(id: string, name: string, day: number, hour: number) {
    this.name = name;
    this._id = id;
    this.day = day;
    this.hour = hour;
  }

  addStudent(newStudent: Student) {
    this.students.push(newStudent);
  }
}
