import {Student} from '../students/student.model';

export class Lecture {
  public name: string;
  public id: number;
  public day: string;
  public hour: number;

  public students: Student[] = [new Student('demo'), new Student('demo2')];


  constructor(name: string, id: number, day: string, hour: number) {
    this.name = name;
    this.id = id;
    this.day = day;
    this.hour = hour;
  }

  addStudent(newStudent: Student) {
    this.students.push(newStudent);
  }
}
