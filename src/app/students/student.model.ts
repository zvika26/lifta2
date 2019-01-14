import {Lecture} from '../lectures/lecture.model';

export class Student {
  public name: string;
  public lecturesList: Lecture[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
