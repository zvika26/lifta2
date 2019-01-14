import {Injectable} from '@angular/core';
import {Lecture} from "../lectures/lecture.model";
import {ServerService} from "./server.service";

@Injectable()
export class LecturesService {

  lectures: any[] = [
    new Lecture ('Art', 7, 'Sunday', 1),
    new Lecture ('Bible', 10, 'Friday', 1),
    new Lecture('math', 1, 'Sunday', 3),
    new Lecture('english', 5, 'Monday', 2),
    new Lecture('hebrew', 8, 'Monday', 1),
    new Lecture('chemistry', 21, 'Monday', 3)
  ]
  constructor(private myServer: ServerService) {  }

  // getLectures() : any{
  //   return this.lectures;
  // }

  getLectures() : any{
    // this.myServer.getLectures()
    //   .subscribe(
    //     (lects: Response)=> {
    //         console.log(lects);
    //
    //         this.lectures = lects[0].valueOf();
    //     },
    //     (error)=> console.log(error)
    //   );
    return this.lectures;
  }

  getLecturesByDayAndHour(day: string, hour: number) : any{
    return this.lectures.filter(
      (lecture: any) =>
        lecture.day === day && lecture.hour === hour);
  }

  getLecture(id : number) : any{

  }

  addLecture(newLecture: Lecture) {
    this.myServer.addLecture(newLecture)
      .subscribe(
        (response)=> console.log(response),
        (error)=> console.log(error),
      );
  }

  removeLecture(newLecture: Lecture) {
//todo
  }

  editLecture(){

  }
}
