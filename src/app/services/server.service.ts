import { Injectable } from '@angular/core';
import {Lecture} from "../lectures/lecture.model";
import {HttpClient} from "@angular/common/http";
// import {Response} from "@angular/http";

import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) { }

  addLecture(lecture: Lecture) {
    return this.http.post("https://lifta-43d77.firebaseio.com/data.json", lecture);
  }

  getLectures(){
    return this.http.get("https://lifta-43d77.firebaseio.com/data.json")
      .map(
        (res: Response) => {
          const data = res.json
          // return data;
          return res;
        }
      );
  }
}


