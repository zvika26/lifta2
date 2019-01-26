import {Injectable} from '@angular/core';
import {Lecture} from "../lectures/lecture.model";
import {ServerService} from "./server.service";
import {Teacher} from "../teachers/teacher.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {Student} from "../students/student.model";

@Injectable()
export class LecturesService {

  private updatedLectures = new Subject<Lecture[]>();
  lectures: Lecture[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  getLectures(){
    this.http.get<{message: string, lectures: Lecture[]}>("http://localhost:3001/api/lectures")
      .subscribe((lectureData)=>{
        this.lectures = lectureData.lectures;
        console.log(lectureData.lectures)
        this.updatedLectures.next([...this.lectures]);
      });
  }

  getUpdatedLecturesListener(){
    return this.updatedLectures.asObservable()
  }

  getLecturesByDayAndHour(day: string, hour: number) : any{
    return this.lectures.filter(
      (lecture: any) =>
        lecture.day === day && lecture.hour === hour);
  }

  getLecture(id : number) : any{

  }

  addLecture(name: string, day: number, hour: number) {
    const newLecture: Lecture = new Lecture(name,"",  day, hour);
    this.http.post<{message: string, lectureId: string}>("http://localhost:3001/api/lectures", newLecture)
      .subscribe((resData) =>{
        const id = resData.lectureId;
        newLecture._id = id;
        console.log("lecture res: " + id)
        this.lectures.push(newLecture);

        // this.updatedLectures.next([...this.lectures]);
        this.router.navigate(["/lectures"]);
      });
  }

  deleteLecture(lectureId: string){
    this.http.delete<{message: string}>("http://localhost:3001/api/lectures/" + lectureId)
      .subscribe((resData) => {
        console.log(resData.message);
        const lecturesWithoutDeleted = this.lectures.filter(lecture => lecture._id !== lectureId);
        this.lectures = lecturesWithoutDeleted;
        this.updatedLectures.next([...this.lectures]);
      });
  }

  editLecture(){

  }
}
