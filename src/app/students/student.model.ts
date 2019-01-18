import {Lecture} from '../lectures/lecture.model';

export class Student {
  public _id: string;
  public name: string;
  public lecturesList: Lecture[] = [];

  constructor(id: string, name: string) {
    this._id = id;
    this.name = name;
  }
}
